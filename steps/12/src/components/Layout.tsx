import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Svg from "@/assets/pencil.svg";
import ico from "@/assets/burger.ico";
import png from "@/assets/page.png";
import jpg from "@/assets/photo.jpg";
import gif from "@/assets/loader.gif";

export default function Layout() {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
                <div className="images">
                    <Svg className="icon" />
                    <img className="icon" src={ico} alt="ico" />
                    <img className="icon" src={png} alt="png" />
                    <img className="icon" src={jpg} alt="jpg" />
                    <img className="icon white-round" src={gif} alt="gif" />
                </div>
            </header>
            <main className="container">
                <Suspense fallback={'Loading...'}>
                    <Outlet />
                </Suspense>
            </main>
            <footer className="container">
                <span>Copyright © {__BUILD_DATE__.substring(0, 4)} Small Solutions, Inc.</span>
                <span className="build-info">Build: {`${__BUILD_DATE__} ${__IS_DEV__ ? "(dev)" : "(prod)"}`}</span>
                <div><a href="cats/index.html">-&gt; More cats there</a></div>
            </footer>
        </>
    );
}