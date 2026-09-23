import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Naslovna.tsx";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
            ],
        },
    ],
    {
        basename: "/beauty-salon-app",
    },
);