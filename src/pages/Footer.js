import React from "react";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        marginTop: "20px",
        boxShadow: "0px -2px 10px rgba(216, 22, 22, 0.1)",
      }}
    >
      {/* Add Images with Links */}
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "5px",
        }}
      >
        &copy; {new Date().getFullYear()} Health Tracker. All rights reserved.
      </p>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#007bff",
          marginBottom: "5px",
        }}
      >
        Contact us:
      </p>
      <p
        style={{
          fontSize: "16px",
          color: "#555",
          lineHeight: "1.5",
        }}
      >
        Phone: 9876543210
        <br /> Email: zenvitals@healthtracker.com
      </p>
    </footer>
  );
}

export default Footer;
