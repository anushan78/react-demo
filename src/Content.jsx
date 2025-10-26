import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

export default function Content() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const buttonStyle = {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: theme === "light" ? "#007bff" : "#ff9900",
    color: "#fff",
  };

  return (
    <>
      <p>
        The current theme is: <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme} style={buttonStyle}>
        Toggle Theme
      </button>
    </>
  );
}
