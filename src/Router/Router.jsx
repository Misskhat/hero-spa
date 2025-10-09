import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            loader: ()=>fetch('../apps.json'),
            element:<Home></Home>
        },
        {
            path: "/apps",
            element:<Apps></Apps>
        },
        {
            path: "/installation",
            element:<Installation></Installation>
        },
        {
            path: "*",
            element: <ErrorPage></ErrorPage>
        }
    ]
    
  },
]); 