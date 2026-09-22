import { Outlet } from "react-router-dom";
import Header from "./Components/layout/Header.tsx";

export default function App() {
    return (
        <div className="app">
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    );
}