import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/layout/Header.tsx";
import Footer from "./Components/layout/Footer.tsx";
import {useEffect} from "react";

export default function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, [location.pathname]);

    return (
        <div className="app">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}