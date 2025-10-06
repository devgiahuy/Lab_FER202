import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // <- CSS quan trọng nhất
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // <- JS (cho navbar toggle, dropdown, modal,...)
import AppProvider from "../providers/AppProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>
);
