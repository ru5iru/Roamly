import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import "./fonts/Klavika/klavika-bold.otf"
import "./fonts/Klavika/klavika-regular.otf"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <DarkModeContextProvider>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </DarkModeContextProvider>
    </React.StrictMode>
);
