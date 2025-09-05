import { createRoute, redirect } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import DashboardPage from "../components/DahboardPage"
import store from "../store/store.js"

// Simple auth check
function checkAuth() {
  const { isAuthenticated } = store.getState().auth
  if (!isAuthenticated) {
    throw redirect({ to: "/auth" })  // redirect to login if not logged in
  }
}

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardPage,
  beforeLoad: checkAuth,  // protect the route
})
