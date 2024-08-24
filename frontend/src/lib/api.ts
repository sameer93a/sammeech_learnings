import { hc } from "hono/client";
import { type ApiRoutes } from "../../../server/app.ts";

const client = hc<ApiRoutes>("/");

export const api = client.api;
