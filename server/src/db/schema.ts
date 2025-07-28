import utils from "./utils";

export const userTable = utils.create("users", (db) => ({
  id: db.varchar().$defaultFn(utils.id).primaryKey(),
  email: db.varchar().notNull().unique(),
  password_hash: db.varchar().notNull(),
  created_at: db
    .timestamp({ mode: "date", withTimezone: true })
    .$defaultFn(utils.now)
    .notNull(),
}));

export const sessionTable = utils.create("sessions", (db) => ({
  id: db.varchar().$defaultFn(utils.id).primaryKey(),
  user_id: db
    .varchar()
    .notNull()
    .references(() => userTable.id),
  ip_address: db.inet(),
  user_agent: db.text(),
  is_valid: db.boolean().default(true).notNull(),
  invalidated_at: db.timestamp({ mode: "date", withTimezone: true }),
  last_verified_at: db
    .timestamp({ mode: "date", withTimezone: true })
    .$defaultFn(utils.now)
    .notNull(),
  created_at: db
    .timestamp({ mode: "date", withTimezone: true })
    .$defaultFn(utils.now)
    .notNull(),
}));

export const schema = {
  users: userTable,
  sessions: sessionTable,
} as const;
