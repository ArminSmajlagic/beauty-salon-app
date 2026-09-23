import { createHashRouter } from "react-router-dom";

import App from "../App";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Naslovna.tsx";
import AboutUs from "../Pages/About/AboutUs.tsx";
import WebShop from "../Pages/WebShop/ShopHome.tsx";
import Biologique from "../Pages/BiologiqueResearch/Biologique.tsx";
import Services from "../Pages/Services/Services.tsx";


export const router = createHashRouter([
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
            },
            {
                path: "biologique-recherche",
                element: <Biologique />,
            },
            {
                path: "usluge",
                element: <Services />,
            },
        ],
    },
]);