import { createRoute, redirect } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import Auth_pages from "../pages/Auth_pages"
import Home_page from "../pages/Home_page"

 export const homePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home_page,
  beforeLoad: () => {
    // Redirect to landing page on first visit
    throw redirect({ to: '/landing' });
  }
});
