import React from "react";
import { Link } from "react-router-dom";
import DarkOrWhite from "../DarkOrWhite";

export default function NavbarBA() {
  return (
    <div className="mb-4">
      <nav
        className="navbar navbar-expand-lg fs-5 fixed-top "
        style={{
          background: "#3a7055ff",
          height: "60px",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-semibold fs-4 " href="/" style={{}}>
            🌿 Orchid Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
            <div className="ms-auto">
              {/* <ThemeToggle /> */}
              <DarkOrWhite />
            </div>
            <form className="d-flex p-2" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
