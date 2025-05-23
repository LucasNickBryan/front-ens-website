import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./assets/lib/fontawesome/fontawesome.min.css";
import { RoutesConfig } from "./config/routes";
import "bootstrap/dist/js/bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoutesConfig />
  </React.StrictMode>
);
