import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { routeTree } from "./routing/routeTree.js";
import store from "./store/store.js";
import { getCurrentUser } from "./api/user.api.js";
import { login } from "./store/slice/authSlice.js";
import "./index.css"; 
const queryClient = new QueryClient();
const router = createRouter({
  routeTree,
  context: { queryClient, store },
});

async function restoreSession() {
  try {
    const { user } = await getCurrentUser();
    if (user) store.dispatch(login(user));
  } catch (err) {
    console.log("No active session", err.message);
  }
}

restoreSession().finally(() => {
  createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
});
