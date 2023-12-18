import { desc, eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { PostForm } from "@/ui/component/PostForm";
import { PostItem } from "@/ui/component/PostItem";
import { db } from "@/db/db";
import { tweet, user } from "@/db/schema";
import { AutoRefresh } from "@/ui/component/AutoRefresh";

const getCachedUser = unstable_cache(
	async (username: string) => {
		const currentUser = await db.query.user.findFirst({
			where: eq(user.username, username),
		});

		return currentUser;
	},
	["currentUser"],
	{ revalidate: 60 },
);

const getCachedTweetsForUser = unstable_cache(
	async (userId: number) => {
		const tweets = await db.query.tweet.findMany({
			where: eq(tweet.userId, userId),
			with: {
				user: true,
			},
			orderBy: [desc(tweet.createdAt)],
		});

		return tweets;
	},
	["tweets"],
	{ revalidate: 60 },
);

export default async function HomePage({ params }: { params: { username: string } }) {
	const currentUser = await getCachedUser(params.username);

	if (!currentUser) {
		return notFound();
	}

	const tweets = await getCachedTweetsForUser(currentUser.id);

	return (
		<div className="w-full sm:w-600">
			<div className="dark:bg-dim-900 sticky top-0 flex items-center justify-between border-b border-l border-r border-gray-200 bg-white px-4 py-3 dark:border-gray-700">
				<h2 className="font-sm font-bold text-gray-800 dark:text-gray-100">Home</h2>

				<div>
					<svg viewBox="0 0 24 24" className="h-5 w-5 text-rose-400" fill="currentColor">
						<g>
							<path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
						</g>
					</svg>
				</div>
			</div>

			<PostForm currentUser={currentUser} />
			{tweets.map((tweet) => (
				<PostItem key={tweet.id} {...tweet} />
			))}

			<div className="flex items-center justify-center border-b border-l border-r border-gray-200 p-4 dark:border-gray-700"></div>
			<AutoRefresh />
		</div>
	);
}
