import React from "react";
import { Link } from "react-router-dom";
import DarkOrWhite from "../DarkOrWhite";
// import ThemeToggle from "../ThemToggle";

export default function Navbar() {
  return (
    <div className="mb-4">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          background: "#3a7055ff",
          height: "60px",
        }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            Orchid shop
          </Link>
          <div className="ms-auto">
            {/* <ThemeToggle /> */}
            <DarkOrWhite />
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
