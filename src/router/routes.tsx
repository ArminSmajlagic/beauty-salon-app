import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home/Naslovna.tsx";
import AboutUs from "../Pages/About/AboutUs.tsx";
import Contact from "../Pages/Contact/Contact.tsx";
import WebShop from "../Pages/WebShop/ShopHome.tsx";

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
                {
                    path: "o-nama",
                    element: <AboutUs />,
                },
                {
                    path: "kontakt",
                    element: <Contact />,
                },
                {
                    path: "web-shop",
                    element: <WebShop />,
                }
            ],
        },
    ],
    {
        basename: "/beauty-salon-app",
    },
);