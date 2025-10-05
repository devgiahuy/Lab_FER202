import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  return (
    // <div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/home">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <hr />
    //   <Outlet />
    // </div>
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/home" className="navbar-brand">
              Demo App
            </Link>

            {/* Toggle button cho mobile */}
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
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
      </header>

      {/* Nội dung chính */}
      <main className="container my-4 flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-auto border-top">
        <div className="container">© 2025 Demo App</div>
      </footer>
    </div>
  );
}
