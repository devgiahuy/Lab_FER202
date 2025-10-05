// làm dark mode or white mode sử dụng cho toàn bộ app
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const DarkOrWhite = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.style.backgroundColor = "#121212"; // Dark mode background
    } else {
      document.body.style.backgroundColor = "#FFFFFF"; // Light mode background
    }
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Button onClick={toggleMode}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </Button>
    </div>
  );
};
