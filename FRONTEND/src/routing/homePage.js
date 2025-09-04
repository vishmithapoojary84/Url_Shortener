import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import Auth_pages from "../pages/Auth_pages"
import Home_page from "../pages/Home_page"

 export const homePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home_page 
})