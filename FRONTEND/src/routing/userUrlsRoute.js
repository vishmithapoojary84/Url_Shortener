// src/routes/userUrlsRoute.js
import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import UserUrlPage from "../pages/UserUrlPage";
import store from "../store/store.js";

// Protect route: only logged-in users can access
function checkAuth() {
  const { isAuthenticated } = store.getState().auth;
  if (!isAuthenticated) {
    throw redirect({ to: "/auth" });
  }
}

export const userUrlsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user-urls",
  component: UserUrlPage,
  beforeLoad: checkAuth,
});
