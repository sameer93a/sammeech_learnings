import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expenses")({
  component: () => <div>Hello /expenses!</div>,
});
