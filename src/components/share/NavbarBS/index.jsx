import React from "react";
import { Link } from "react-router-dom";
import DarkOrWhite from "../DarkOrWhite";

export default function NavbarBA() {
  return (
    <div className="mb-4">
      <nav
        className="navbar navbar-expand-lg shadow-sm fixed-top border-bottom"
        style={{
          backgroundColor: "var(--bs-body-bg)",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container-fluid px-4">
          {/* LOGO */}
          <Link
            className="navbar-brand fw-bold fs-4 text-success d-flex align-items-center gap-2"
            to="/home"
          >
            🌿 <span>Orchide</span>
          </Link>

          {/* TOGGLER (mobile menu) */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-lg-4">
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-success" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold text-success"
                  to="/natural"
                >
                  Natural
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-success" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold text-success"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* DARK MODE SWITCH */}
            <div className="d-flex align-items-center gap-3">
              <DarkOrWhite />

              {/* SEARCH BAR */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 rounded-pill px-3"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  style={{
                    border: "1px solid #84a98c",
                    backgroundColor: "var(--bs-body-bg)",
                    color: "var(--bs-body-color)",
                  }}
                />
                <button
                  className="btn btn-success rounded-pill px-3"
                  type="submit"
                >
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
