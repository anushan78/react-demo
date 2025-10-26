import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Find the DOM node for portal and append
  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {children}
        <button onClick={onClose} style={buttonStyle}>
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
}

// Styles
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  minWidth: "300px",
  textAlign: "center",
};

const buttonStyle = {
  marginTop: "15px",
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "#fff",
};
