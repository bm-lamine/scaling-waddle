import utils from "./utils";

export const userTable = utils.create("users", (db) => ({
  id: db.varchar().$defaultFn(utils.id).primaryKey(),
  email: db.varchar().notNull().unique(),
  password_hash: db.varchar().notNull(),
}));

export const schema = { users: userTable } as const;
