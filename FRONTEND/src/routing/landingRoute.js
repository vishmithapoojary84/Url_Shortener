// routing/landingRoute.js
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree.js";
import LandingPage from "../components/LandingPage.jsx";

export const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/landing",
  component: LandingPage,
});
