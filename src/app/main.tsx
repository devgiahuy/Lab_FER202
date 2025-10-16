import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { HeroUIProvider } from "@heroui/react";
import "./App.js"; // hoặc "./index.css" tùy đường dẫn
import AppProvider from "../providers/AppProvider.js";

// Mount React root
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    {/* HeroUI theme wrapper */}
    <HeroUIProvider>
      <AppProvider />
    </HeroUIProvider>
  </StrictMode>
);
