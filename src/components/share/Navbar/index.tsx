"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkOrWhite from "../DarkOrWhite/index.js";
import { Menu, X } from "lucide-react";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-green-700 dark:bg-gray-900
        text-white shadow-md
        transition-colors duration-300
      "
    >
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* 🌿 Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-green-200 transition-colors"
        >
          Orchid Shop
        </Link>

        {/* 🌗 Nút chuyển dark/light */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                to="/"
                className="hover:text-green-200 dark:hover:text-green-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-200 dark:hover:text-green-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-200 dark:hover:text-green-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          <DarkOrWhite />
        </div>

        {/* 📱 Menu mobile toggle */}
        <Button
          isIconOnly
          radius="full"
          className="md:hidden text-white bg-transparent hover:bg-green-600 dark:hover:bg-gray-700"
          onPress={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </nav>

      {/* 📱 Menu mobile */}
      {isOpen && (
        <div
          className="
            md:hidden bg-green-700 dark:bg-gray-900
            border-t border-green-600 dark:border-gray-800
            px-6 py-4 space-y-3
          "
        >
          <Link
            to="/"
            className="block text-white hover:text-green-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-green-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-green-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-2 border-t border-green-600 dark:border-gray-700">
            <DarkOrWhite />
          </div>
        </div>
      )}
    </header>
  );
}
