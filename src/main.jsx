import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdataCoffee from './components/UpdateCoffee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: 'addCoffee',
        element: <AddCoffee />,
      },
      {
        path: 'updateCoffee',
        element: <UpdataCoffee />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)