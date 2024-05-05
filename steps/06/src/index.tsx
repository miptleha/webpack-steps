import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const root = document.getElementById("root");
if (!root) {
    throw new Error("root element not found!");
}

const container = createRoot(root);
container.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);