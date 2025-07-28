import { Hono } from "hono";
import { cors } from "hono/cors";
import * as dev from "hono/dev";

const app = new Hono();

app.use(cors({ credentials: true, origin: ["*"] }));

app.get("/", (c) => c.text("Hello Hono!"));

dev.showRoutes(app);

export default {
  port: 4321,
  fetch: app.fetch,
};
