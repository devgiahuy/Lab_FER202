import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // <- CSS quan trọng nhất
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // <- JS (cho navbar toggle, dropdown, modal,...)
import Navbar from "../components/share/Navbar";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div
        className="container my-4 flex-grow-1 bg-white"
        style={{
          maxWidth: "1400px",
          backgroundColor: "#b3e5fc",
          // minHeight: "500px",
          // border: "2px solid red",
          padding: "24px",
        }}
      >
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-auto border-top">
        2025 Orchid shop
      </footer>
    </div>
  );
}
