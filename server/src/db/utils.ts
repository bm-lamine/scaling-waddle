import { createId } from "@paralleldrive/cuid2";
import { pgTableCreator } from "drizzle-orm/pg-core";

export default class {
  static create = pgTableCreator((name) => name);
  static id = createId;
}
