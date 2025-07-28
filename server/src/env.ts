import z from "zod";

export default class {
  static schema = z.object({
    DATABASE_URL: z.url(),
    SESSION_COOKIE_NAME: z.string(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  });

  static runtimeEnv = {
    DATABASE_URL: process.env.DATABASE_URL,
    SESSION_COOKIE_NAME: process.env.SESSION_COOKIE_NAME,
    NODE_ENV: process.env.NODE_ENV,
  };

  static valid = this.schema.parse(this.runtimeEnv);
}
