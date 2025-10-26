import React, { useState } from "react";
import Modal from "./Modal";

export default function PortalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={outerDivStyle}>
      <h2>React Portal Example</h2>
      <button style={buttonStyle} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3>Hello from the Portal</h3>
        <p>This modal is rendered outside of the main DOM tree</p>
      </Modal>
    </div>
  );
}

const buttonStyle = {
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#28a745",
  color: "#fff",
};

const outerDivStyle = { textAlign: "center", marginTop: "50px" };
