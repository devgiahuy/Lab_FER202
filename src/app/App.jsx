import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavbarBA from "../components/share/NavbarBS";
import FooterOrchide from "../components/share/Footer";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-110">
      <NavbarBA />
      <div
        className="container flex-grow-1 bg-white"
        style={{
          maxWidth: "1440px",
        }}
      >
        <Outlet />
      </div>
      <FooterOrchide />
    </div>
  );
}
