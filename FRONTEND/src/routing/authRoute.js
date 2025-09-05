import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree"; // import parent route
import AuthPages from "../pages/Auth_pages";

export const authRoute = createRoute({
  getParentRoute: () => rootRoute, // ✅ required
  path: "/auth",
  component: AuthPages,
});
