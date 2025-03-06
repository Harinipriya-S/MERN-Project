import React from "react";
import { Link } from "react-router-dom";

function InitialHeader() {
  return (
    <nav style={{ 
      display: "flex", 
      alignItems: "center", 
      padding: "15px 20px",
      borderBottom: "2px solid #ddd",
      position: "fixed", 
      top: "0", 
      left: "0",
      width: "100%", 
      boxSizing: "border-box", 
      zIndex: "1000"
    }}>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default InitialHeader;
