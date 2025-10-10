import {createBrowserRouter} from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";

import AppDetails from "../Pages/AppDetails/AppDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AppError from "../Pages/ErrorPage/AppError";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <AppError></AppError>,
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
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);
