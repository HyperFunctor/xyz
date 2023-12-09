import { relations } from "drizzle-orm";
import { pgTable, serial, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const tweet = pgTable("tweet", {
	id: serial("id").primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => user.id),
	message: text("message").notNull(),
	retweetCount: integer("retweet_count").default(0).notNull(),
	favoriteCount: integer("favorite_count").default(0).notNull(),
	isRetweet: boolean("is_retweet").default(false).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const user = pgTable("user", {
	id: serial("id").primaryKey(),
	username: text("username").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
	tweets: many(tweet),
}));

export const tweetRelations = relations(tweet, ({ one }) => ({
	user: one(user, {
		fields: [tweet.userId],
		references: [user.id],
	}),
}));
