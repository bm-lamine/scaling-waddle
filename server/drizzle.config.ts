import { type Config } from "drizzle-kit";

import env from "#/env";

export default {
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.valid.DATABASE_URL,
  },
} satisfies Config;
