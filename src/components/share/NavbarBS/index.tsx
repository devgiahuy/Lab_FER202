"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Input, Button } from "@heroui/react";
import DarkOrWhite from "../DarkOrWhite/index.js";

export default function NavbarBA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        border-b border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-900
        shadow-sm transition-all duration-300
      "
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* 🌿 LOGO */}
        <Link
          to="/home"
          className="
            flex items-center gap-2 text-green-600 dark:text-green-400
            font-bold text-2xl hover:text-green-700 dark:hover:text-green-300
            transition-colors
          "
        >
          🌿 <span>Orchide</span>
        </Link>

        {/* 📱 MOBILE TOGGLER */}
        <Button
          isIconOnly
          radius="full"
          variant="light"
          className="md:hidden text-green-700 dark:text-green-300"
          onPress={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>

        {/* 🌸 NAV LINKS (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {[
              { name: "Home", to: "/home" },
              { name: "Natural", to: "/natural" },
              { name: "About", to: "/about" },
              { name: "Contact", to: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="
                    font-semibold text-green-700 dark:text-green-400
                    hover:text-green-900 dark:hover:text-green-300
                    transition-colors
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* 🌗 Dark/Light switch */}
          <DarkOrWhite />

          {/* 🔍 Search bar */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
          >
            <Input
              placeholder="Search..."
              radius="full"
              size="sm"
              className="w-40"
              classNames={{
                input:
                  "text-gray-700 dark:text-gray-200 bg-transparent placeholder:text-gray-400",
                inputWrapper:
                  "border border-green-300 dark:border-green-700 rounded-full hover:border-green-500",
              }}
            />
            <Button
              isIconOnly
              radius="full"
              color="success"
              variant="flat"
              className="flex items-center justify-center"
            >
              <Search size={18} />
            </Button>
          </form>
        </div>
      </nav>

      {/* 📱 MOBILE MENU */}
      {isOpen && (
        <div
          className="
            md:hidden flex flex-col items-start gap-4 px-6 py-4
            bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700
            transition-all
          "
        >
          {[
            { name: "Home", to: "/home" },
            { name: "Natural", to: "/natural" },
            { name: "About", to: "/about" },
            { name: "Contact", to: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="
                w-full text-green-700 dark:text-green-400
                font-semibold py-1 hover:text-green-900 dark:hover:text-green-300
                transition-colors
              "
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Dark switch + search bar trong mobile */}
          <div className="flex items-center justify-between w-full mt-2">
            <DarkOrWhite />
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <Input
                placeholder="Search..."
                radius="full"
                size="sm"
                className="w-32"
              />
              <Button isIconOnly radius="full" color="success" variant="flat">
                <Search size={18} />
              </Button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
