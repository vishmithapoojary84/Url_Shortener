import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import Auth_pages from "../pages/Auth_pages"
import DashboardPage from "../components/DahboardPage"
 import { checkAuth } from "../api/helper.js"

 export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage ,
  beforeLoad: checkAuth,
})