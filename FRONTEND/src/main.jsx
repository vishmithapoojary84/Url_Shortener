
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { RootRoute, RouterProvider, createRouter } from '@tanstack/react-router' 
import { routeTree } from './routing/routeTree.js'
import store from './store/store.js'
import { Provider } from 'react-redux'



const queryClient = new QueryClient()
const router = createRouter({ routeTree })
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>


)
