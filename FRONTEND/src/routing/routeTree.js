import { createRootRoute } from "@tanstack/react-router"
import App from "../App"
import { homePageRoute } from "./homePage"
import { auth_route } from "./auth_route"
import { dashboardRoute } from "./dashboard"
import RootLayout from "../App"

 export const rootRoute = createRootRoute({
  // rootlayout is in *app.jsx file
  component:RootLayout
})
 export const routeTree = rootRoute.addChildren([
  homePageRoute,
  auth_route,
  dashboardRoute
])
