import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import "./App.css";
import { HomeLazy } from "./pages/Home/HomeLazy";
import { BlogLazy } from "./pages/Blog/BlogLazy";
import { AboutLazy } from "./pages/About/AboutLazy";
import { Suspense } from "react";

export function App() {
    return (
        <>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomeLazy />} />
                        <Route path="blog" element={<BlogLazy />} />
                        <Route path="about" element={<AboutLazy />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    )
}