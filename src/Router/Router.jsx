import {createBrowserRouter} from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch("../apps.json"),
                element: <Home></Home>,
            },
            {
                path: "/apps",
                loader: () => fetch("../apps.json"),
                element: <Apps></Apps>,
            },
            {
                path: "/installation",
                element: <Installation></Installation>,
            },
            {
                path: "/appDetails/:id",
                loader: () => fetch("../apps.json"),
                element: <AppDetails></AppDetails>,
            },
        ],
    },
    // {
    //     path: "*",
    //     element: <ErrorPage></ErrorPage>,
    // },
]);
