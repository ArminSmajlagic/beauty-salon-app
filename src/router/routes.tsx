import { createHashRouter } from "react-router-dom";

import App from "../App";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Naslovna.tsx";
import AboutUs from "../Pages/About/AboutUs.tsx";
import WebShop from "../Pages/WebShop/ShopHome.tsx";
import Biologique from "../Pages/BiologiqueResearch/Biologique.tsx";
import Services from "../Pages/Services/Services.tsx";
import Face from "../Pages/Services/SubPages/Face.tsx";
import Body from "../Pages/Services/SubPages/Body.tsx";
import MakeUp from "../Pages/Services/SubPages/MakeUp.tsx";
import Products from "../Pages/BiologiqueResearch/SubPages/Products.tsx";
import BiologiqueFace from "../Pages/BiologiqueResearch/SubPages/Face.tsx";
import BiologiqueBody from "../Pages/BiologiqueResearch/SubPages/Body.tsx";
import Pricelist from "../Pages/Services/SubPages/Pricelist.tsx";
import ProductDetails from "../Pages/WebShop/ProductDetail.tsx";

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
            {
                path: "usluge/njega-lica",
                element: <Face />,
            },
            {
                path: "usluge/njega-tijela",
                element: <Body />,
            },
            {
                path: "usluge/make-up",
                element: <MakeUp />,
            },
            {
                path: "usluge/cjenovnik",
                element: <Pricelist />,
            },
            {
                path: "biologique-recherche/njega-lica",
                element: <BiologiqueFace />,
            },
            {
                path: "biologique-recherche/njega-tijela",
                element: <BiologiqueBody />,
            },
            {
                path: "biologique-recherche/proizvodi",
                element: <Products />,
            },
            {
                path: "biologique-recherche/proizvod/:slug",
                element: <ProductDetails />,
            },
        ],
    },
]);