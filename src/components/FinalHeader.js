
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout";

function FinalHeader({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsAuthenticated(false); 
    navigate("/login");
    window.location.reload(); 
  };

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
        <Link to="/exercise">Exercise</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/history">History</Link>
      </div>

      <div style={{ position: "absolute", right: "20px", top: "15px" }}>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </nav>
  );
}

export default FinalHeader;
