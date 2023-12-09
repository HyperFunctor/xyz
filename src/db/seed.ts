import NextEnv from "@next/env";
import { faker } from "@faker-js/faker";
import { tweet as TweetSchema, user as UserSchema } from "./schema";
import { db } from "@/db/db";

NextEnv.loadEnvConfig(process.cwd(), true);

async function generateTweets(numUsers: number, numTweets: number) {
	const users = [];

	for (let i = 0; i < numUsers; i++) {
		const user: typeof UserSchema.$inferInsert = {
			username: faker.internet.userName(),
		};

		users.push(user);
	}

	const usersResult = await db
		.insert(UserSchema)
		.values(users)
		.returning({ id: UserSchema.id })
		.onConflictDoNothing();

	const tweets = [];
	for (let i = 0; i < numTweets; i++) {
		const tweet: typeof TweetSchema.$inferInsert = {
			message: faker.lorem.sentences(),
			retweetCount: faker.number.int({ min: 0, max: 1000 }),
			favoriteCount: faker.number.int({ min: 0, max: 1000 }),
			isRetweet: faker.datatype.boolean(),
			userId: faker.helpers.arrayElement(usersResult).id,
		};

		// if (faker.datatype.boolean()) {
		// 	tweet.imageUrl = faker.image.url();
		// }

		tweets.push(tweet);
	}

	await db.insert(TweetSchema).values(tweets).onConflictDoNothing();
}

export async function seed() {
	await generateTweets(5, 20);

	console.log("Seeded!");
}

seed()
	.then(() => {
		process.exit(0);
	})
	.catch((error) => {
		console.dir(error, { depth: 999 });
		process.exit(1);
	});
