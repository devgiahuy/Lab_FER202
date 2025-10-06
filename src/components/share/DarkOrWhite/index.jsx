// làm dark mode or white mode sử dụng cho toàn bộ app
import React, { useEffect, useState } from "react";
import { Button, Form, FormCheck } from "react-bootstrap";

export default function DarkOrWhite() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#26382dff" : "#ffffff";
    // document.body.style.color = isDarkMode ? "#f8f9fa" : "#212529";
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <i className="bi bi-sun"></i>
      <Form.Check
        type="switch"
        id="dark-mode-switch"
        checked={isDarkMode}
        onChange={toggleMode}
      />
      <i className="bi bi-moon-stars"></i>
    </div>
  );
}
