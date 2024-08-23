import app from "./app";

Bun.serve({
  fetch: app.fetch,
});

console.log("Hello via Bun!");
console.log("How are you");
