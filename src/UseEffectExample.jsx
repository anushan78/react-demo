import React, { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect runs after every render when the dependency changes
  useEffect(() => {
    console.log(`Counter updated: ${count}`);
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array: run only when count changes

  // useEffect with no dependencies runs only once (componentDidMount)
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  return (
    <div style={divStyle}>
      <h2>React useEffect Example</h2>

      <p style={{ fontSize: "20px" }}>
        Counter: <strong>{count}</strong>
      </p>
      <button onClick={() => setCount(count + 1)} style={buttonStyle}>
        ➕ Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={buttonStyle}>
        ➖ Decrement
      </button>

      <hr style={{ margin: "20px 0" }} />

      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px",
          width: "80%",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <p style={{ marginTop: "10px" }}>
        {name ? `Hello, ${name}! 👋` : "Your name will appear here."}
      </p>
    </div>
  );
}

const divStyle = {
  maxWidth: "400px",
  margin: "50px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "12px",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};

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
