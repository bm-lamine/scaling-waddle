import { Hono } from "hono";

const app = new Hono();

app.all("/", (ctx) => ctx.text("auth router"));

export default app;
