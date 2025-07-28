import { Hono } from "hono";
import { cors } from "hono/cors";

import { showRoutes } from "hono/dev";
import authRouter from "./routers/auth/auth.router";

const app = new Hono();

// app.use(csrf()); // Turn on for production
app.use(cors({ credentials: true, origin: ["*"] }));

app.route("/v1/auth", authRouter);
app.get("/", (c) => c.text("Hello Hono!"));

showRoutes(app);

export default {
  port: 4321,
  fetch: app.fetch,
};
