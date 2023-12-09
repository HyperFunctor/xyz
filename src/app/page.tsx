import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { unstable_cache } from "next/cache";
import { db } from "@/db/db";

const getCachedUsers = unstable_cache(
	async () => {
		const users = await db.query.user.findMany();
		return users;
	},
	["users"],
	{ revalidate: 60 },
);

export default async function Home() {
	const users = await getCachedUsers();

	return (
		<div className="mx-auto my-12 max-w-md">
			<ul
				role="list"
				className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
			>
				{users.map((user) => (
					<li
						key={user.id}
						className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
					>
						<div className="flex min-w-0 items-center gap-x-4">
							<Image
								className="inline-block h-10 w-10 rounded-full"
								src={`https://api.dicebear.com/7.x/adventurer/png?seed=${user.username}&flip=true`}
								alt="avatar"
								width={128}
								height={128}
							/>
							<div className="min-w-0 flex-auto">
								<p className="text-sm font-semibold leading-6 text-gray-900">
									<Link href={`/${user.username}`}>
										<span className="absolute inset-x-0 -top-px bottom-0" />
										{user.username}
									</Link>
								</p>
							</div>
						</div>
						<div className="flex shrink-0 items-center gap-x-4">
							<div className="hidden sm:flex sm:flex-col sm:items-end">
								<div className="mt-1 flex items-center gap-x-1.5">
									<div className="flex-none rounded-full bg-emerald-500/20 p-1">
										<div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
									</div>
									<p className="text-xs leading-5 text-gray-500">Online</p>
								</div>
							</div>
							<ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
