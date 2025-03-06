import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setIsAuthenticated(!!userToken);
    console.log("User is authenticated:", !!userToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      {/* Video in the Top Left */}
      <video autoPlay loop muted style={styles.video}>
        <source src="/video/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation Links */}
      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/exercise">Exercise</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/history">History</Link>
      </div>

      {/* Logout Button */}
      <div style={styles.logout}>
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 20px",
    borderBottom: "2px solid #ddd",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    boxSizing: "border-box",
    zIndex: "1000",
    backgroundColor: "#fff", // Background color to ensure visibility
  },
  video: {
    position: "absolute",
    top: "80px",
    left: "20px",
    width: "100px",  // Adjust width as needed
    height: "100px", // Adjust height as needed
    borderRadius: "10px", // Optional: Rounded corners
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Optional: Shadow effect
  },
  links: {
    display: "flex",
    gap: "15px",
    marginLeft: "120px", // Push links to the right so they don't overlap with the video
  },
  logout: {
    position: "absolute",
    right: "20px",
    top: "15px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Header;
