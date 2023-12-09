import NextEnv from "@next/env";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";

NextEnv.loadEnvConfig(process.cwd(), true);

async function run() {
	const { db } = await import("./db");
	await migrate(db, { migrationsFolder: process.cwd() + "/src/db/migrations" });
}

run().catch((err) => {
	console.dir(err, { depth: 999 });
	process.exit(1);
});
