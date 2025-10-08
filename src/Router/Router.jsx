import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            index: true,
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/apps",
            element:<Apps></Apps>
        },
        {
            path: "/installation",
            element:<Installation></Installation>
        }
    ]
    
  },
]); 