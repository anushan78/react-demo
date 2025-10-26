import React, { useState } from "react";

export default function StateExample() {
  const [count, setCount] = useState(0);
  const [name, setname] = useState("");

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleNameChange = (e) => setname(e.target.value);

  return (
    <div style={divStyle}>
      <h2>React useState Example</h2>
      {/* Counter section */}
      <p style={{ fontSize: "20px" }}>
        Counter: <strong>{count}</strong>
      </p>
      <button onClick={handleIncrement} style={buttonStyle}>
        ➕ Increment
      </button>
      <button onClick={handleDecrement} style={buttonStyle}>
        ➖ Decrement
      </button>
      {/* Conditional rendering */}
      {count > 5 && <p style={{ color: "green" }}>That's a high number! 🎉</p>}
      {count < 0 && (
        <p style={{ color: "red" }}>Negative numbers? Bold move! ⚠️</p>
      )}
      <hr style={{ margin: "20px 0" }} />
      {/* Text input with live state */}
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={handleNameChange}
        style={{
          padding: "8px",
          width: "80%",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <p style={{ marginTop: "10px" }}>
        {name ? `Hello, ${name}!👋` : "Your name will appear here."}
      </p>
    </div>
  );
}

const buttonStyle = {
  margin: "5px",
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "#fff",
  fontSize: "14px",
};

const divStyle = {
  maxWidth: "400px",
  margin: "50px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "12px",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};
