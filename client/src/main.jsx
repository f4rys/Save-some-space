import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CookieBanner from "./components/CookieBanner";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="background-image"></div>

    <div className="container-full-height">
      <BrowserRouter>
        <App />
        <CookieBanner />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
