import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Svg from "@/assets/ok.svg";
import ico from "@/assets/burger.ico";
import png from "@/assets/page.png";
import jpg from "@/assets/photo.jpg";
import gif from "@/assets/loader.gif";

const imgSize = { width: 16, height: 16 };

export default function Layout() {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
                <div className="images">
                    <img {...imgSize} src={Svg} alt="svg" />
                    <img {...imgSize} src={ico} alt="ico" />
                    <img {...imgSize} src={png} alt="png" />
                    <img {...imgSize} src={jpg} alt="jpg" />
                    <img {...imgSize} src={gif} alt="gif" />
                </div>
            </header>
            <main className="container">
                <Suspense fallback={'Loading...'}>
                    <Outlet />
                </Suspense>
            </main>
            <footer className="container">
                Copyright © 2024 Small Solutions, Inc.
            </footer>
        </>
    );
}