import { createRootRoute } from "@tanstack/react-router";
import RootLayout from "../RootLayout.jsx";

import { homePageRoute } from "./homePage.js";
import { authRoute } from "./authRoute.js";
import { dashboardRoute } from "./dashboard.js";
import { qrRoute } from "./qrRoute.js"; // child only
import { landingRoute } from "./landingRoute.js";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

export const routeTree = rootRoute.addChildren([
  landingRoute,
  homePageRoute,
  authRoute,
  dashboardRoute,
  qrRoute,
]);
