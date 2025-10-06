import React from "react";
import { Outlet, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"; // <- CSS quan trọng nhất
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // <- JS (cho navbar toggle, dropdown, modal,...)
import Navbar from "../components/share/Navbar";
import NavbarBA from "../components/share/NavbarBS";
import FooterOrchide from "../components/share/Footer";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-110">
      {/* <Navbar /> */}
      <NavbarBA />
      <div
        className="container flex-grow-1 bg-white"
        style={{
          maxWidth: "1400px",
          backgroundColor: "#b3e5fc",
          // minHeight: "500px",
          height: "",
          // border: "2px solid red",
        }}
      >
        <Outlet />
      </div>

      {/* Footer */}
      <FooterOrchide />
    </div>
  );
}
