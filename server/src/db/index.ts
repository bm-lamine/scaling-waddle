import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import env from "#/env";
import { schema } from "./schema";

const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.valid.DATABASE_URL);
if (env.valid.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, {
  schema,
  logger: env.valid.NODE_ENV === "development",
});
