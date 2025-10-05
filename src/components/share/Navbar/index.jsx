import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemToggle";
import { DarkOrWhite } from "../DarkOrWhite";

export default function Navbar() {
  return (
    <div style={{}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
