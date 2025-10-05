import React from "react";

export default function ThemeToggle() {
  const handleToggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <button
      type="button"
      className="btn btn-outline-secondary fw-semibold"
      onClick={handleToggleTheme}
    >
      <i className="bi bi-circle-half me-2"></i>
      Đổi Giao Diện
    </button>
  );
}
