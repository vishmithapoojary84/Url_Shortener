import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree.js";
import QRCodePage from "../pages/QRCodePage.jsx";

export const qrRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/qr",
  component: QRCodePage,
});
