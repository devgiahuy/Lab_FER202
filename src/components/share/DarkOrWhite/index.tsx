"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "@heroui/react";
import { Sun, Moon } from "lucide-react";

/**
 * Component DarkOrWhite
 * 👉 Dùng để chuyển toàn bộ app giữa Light mode và Dark mode
 * - Sử dụng Tailwind + HeroUI
 * - Áp dụng class "dark" vào <html> (theo chuẩn Tailwind)
 */
export default function DarkOrWhite() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cập nhật chế độ theme khi người dùng bật / tắt
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center gap-3">
      <Sun
        size={20}
        className={`transition-colors ${
          isDarkMode ? "text-gray-400" : "text-yellow-500"
        }`}
      />

      <Switch
        size="sm"
        color="success"
        isSelected={isDarkMode}
        onValueChange={setIsDarkMode}
        aria-label="Toggle dark mode"
      />

      <Moon
        size={20}
        className={`transition-colors ${
          isDarkMode ? "text-indigo-400" : "text-gray-400"
        }`}
      />
    </div>
  );
}
