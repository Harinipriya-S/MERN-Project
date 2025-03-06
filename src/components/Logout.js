import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsAuthenticated(false); 
    navigate("/login");
    window.location.reload();
  };

  return (
    <button 
      onClick={handleLogout} 
      style={{
        padding: "10px 15px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px"
      }}
    >
      Logout
    </button>
  );
}

export default Logout;
