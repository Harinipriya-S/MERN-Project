import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"; // Import the Footer component

function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div style={styles.homePage}>
            {/* Small Video in the Left Corner */}
            <video autoPlay loop muted style={styles.video}>
        <source src="/video/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={styles.overlay}>
        <div style={styles.content}>
        <br/><br/><br/><br/><br/><br/>
          <h1>Welcome to Health Tracker</h1><br/>
          <p>Track your health with ease: Monitor weight, BMI, water intake, steps, and sleep!</p><br/>
          <button onClick={handleGetStarted} style={styles.button}>Get Started</button>
        </div>
      </div>

      {/* Footer Component at the Bottom */}
      <Footer />
    </div>
  );
}

const styles = {
  homePage: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundImage: "url('/background.jpg')", // Use an absolute path from the public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // Keeps background fixed while scrolling
  },
  video: {
    position: "absolute",
    top: "150px",
    left: "20px",
    width: "250px",  // Adjust width as needed
    height: "250px", // Adjust height as needed
    borderRadius: "10px", // Optional: Rounded corners
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Optional: Shadow effect
  },
  overlay: {
    width: "100%",
    height: "100%", 
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  content: {
    padding: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};

export default HomePage;


