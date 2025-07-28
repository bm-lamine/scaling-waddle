import utils from "./utils";

export const userTable = utils.create("users", (db) => ({
  id: db.varchar().$defaultFn(utils.id).primaryKey(),
  email: db.varchar().notNull().unique(),
  password_hash: db.varchar().notNull(),
  // timestamps
  created_at: db
    .timestamp({ mode: "date", withTimezone: true })
    .$defaultFn(utils.now)
    .notNull(),
  updated_at: db
    .timestamp({ mode: "date", withTimezone: true })
    .$onUpdateFn(utils.now),
}));

export const schema = {
  users: userTable,
} as const;
