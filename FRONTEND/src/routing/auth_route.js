import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import Auth_pages from "../pages/Auth_pages"

 export const auth_route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: Auth_pages 
})