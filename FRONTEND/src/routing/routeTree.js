import { createRootRoute } from "@tanstack/react-router"
import RootLayout from "../RootLayout.jsx"  // ✅ fix path here

import { homePageRoute } from "./homePage.js"
import { authRoute } from "./authRoute.js"
import { dashboardRoute } from "./dashboard.js"

export const rootRoute = createRootRoute({
  component: RootLayout,
})

export const routeTree = rootRoute.addChildren([
  homePageRoute,
  authRoute,
  dashboardRoute,
])
