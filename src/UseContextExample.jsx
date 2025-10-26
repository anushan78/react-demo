import React from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import Content from "./Content";

export default function UseContextExample() {
  return (
    <ThemeProvider>
      <div style={divStyle}>
        <h2>useContext Example</h2>
        <Content />
      </div>
    </ThemeProvider>
  );
}

const divStyle = {
  maxWidth: "400px",
  margin: "50px auto",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#b2cad6ff",
  transition: "all 0.3s ease",
};
