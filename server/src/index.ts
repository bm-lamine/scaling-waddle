import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";

import authRouter from "./services/auth/auth.router";

const app = new Hono();

app.use(csrf());
app.use(cors());

app.route("/v1/auth", authRouter);
app.get("/", (c) => c.text("Hello Hono!"));

export default app;
