import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - route tree generated at build time
export const Route = createFileRoute("/" as any)({
  component: () => {
    const App = require("../App").default;
    return <App />;
  },
});
