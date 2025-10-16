"use client";
import React from "react";
import NavbarBA from "../components/share/NavbarBS/index.js";
import { Outlet } from "react-router-dom";
import FooterOrchide from "../components/share/Footer/index.js";

/**
 * 🌿 App Layout chính
 * - Bao gồm Navbar, Outlet (nội dung trang), Footer
 * - Hỗ trợ dark mode và responsive container
 */
export default function App() {
  return (
    <div
      className="
        flex flex-col min-h-screen 
        bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
        transition-colors duration-300
      "
    >
      {/* Thanh điều hướng */}
      <NavbarBA />

      {/* Nội dung động (router) */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <FooterOrchide />
    </div>
  );
}
