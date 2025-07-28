import { Hono } from "hono";

import authRouter from "./services/auth/auth.router";

const app = new Hono();

app.route("/v1/auth", authRouter);
app.get("/", (c) => c.text("Hello Hono!"));

export default app;
