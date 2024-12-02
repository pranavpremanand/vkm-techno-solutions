import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "react-modern-drawer/dist/index.css";
import "keen-slider/keen-slider.min.css";
import { HelmetProvider } from "react-helmet-async";
import GoogleTracking from "./components/GoogleTracking";
// import GoogleTags from "./components/GoogleTag";
// import GoogleTagManager from "./components/GoogleTagManager";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        {/* <GoogleTags /> */}
        {/* <GoogleTagManager /> */}
        <GoogleTracking />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
reportWebVitals();
