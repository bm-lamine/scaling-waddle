import type { z, ZodObject } from "zod";

export type Error<T extends ZodObject<any>> = Array<{
  path: Array<keyof z.infer<T>> | undefined;
  message: string;
}>;
