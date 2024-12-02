import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "react-modern-drawer/dist/index.css";
import "keen-slider/keen-slider.min.css";
import GoogleTags from "./components/GoogleTag";
// import GoogleTagManager from "./components/GoogleTagManager";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleTags />
      {/* <GoogleTagManager /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
