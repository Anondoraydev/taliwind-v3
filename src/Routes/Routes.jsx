import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
]);
export default router;