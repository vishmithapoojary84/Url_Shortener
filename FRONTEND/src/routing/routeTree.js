import { createRootRoute } from "@tanstack/react-router"
import App from "../App"

const rootRoute = createRootRoute({
  component:<RootLayout/>
})
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])