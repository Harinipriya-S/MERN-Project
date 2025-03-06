import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaWeightHanging, FaRunning, FaWater, FaBed, FaDumbbell, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

function AddEntryForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedExercises = [] } = location.state || {};

  const [names, setNames] = useState("");
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [water, setWater] = useState("");
  const [steps, setSteps] = useState("");
  const [sleep, setSleep] = useState("");

  const calculateBMI = (weight, height) => {
    return weight > 0 && height > 0 ? (weight / Math.pow(height / 100, 2)).toFixed(2) : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = calculateBMI(weight, height);
    if (!bmi) return;

    const exercises = selectedExercises.length > 0 ? selectedExercises : ["None"];
    const newEntry = { names, date, weight, height, water, steps, sleep, exercises, bmi };

    const existingEntries = JSON.parse(localStorage.getItem("healthEntries")) || [];
    localStorage.setItem("healthEntries", JSON.stringify([...existingEntries, newEntry]));
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);

    navigate("/history");
  };

  return (
    <div className="background-container">
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headerStyle}>Add Your Health Entry 🏃</h2>

        <div style={inputGroupStyle}>
          <FaArrowRight size={20} className="icon-animate" />
          <input
            type="text"
            placeholder="What's your name?"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            required
            style={inputStyle}
          />
        </div>


<div style={inputGroupStyle}>
  <FaCalendarAlt size={20} className="icon-animate" />
  <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    required
    style={inputStyle}
  />
</div>

        <div style={inputGroupStyle}>
          <FaWeightHanging size={20} className="icon-animate" />
          <input
            type="number"
            placeholder="Your weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <FaDumbbell size={20} className="icon-animate" />
          <input
            type="number"
            placeholder="Your height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <FaWater size={20} className="icon-animate" />
          <input
            type="number"
            placeholder="Water Intake (L)"
            value={water}
            onChange={(e) => setWater(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <FaRunning size={20} className="icon-animate" />
          <input
            type="number"
            placeholder="Steps Taken"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <FaBed size={20} className="icon-animate" />
          <input
            type="range"
            min="0"
            max="24"
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
            style={sliderStyle}
          />
          <span>{sleep} hrs</span>
        </div>

        <div style={motivationalQuoteStyle}>
          <p>"Every step is progress. Keep pushing forward!"</p>
        </div>

        <div>
          <h3 style={subHeaderStyle}>Exercises You Did! 💪</h3>
          {selectedExercises.length > 0 ? (
            selectedExercises.map((exercise, index) => (
              <p key={index} style={exerciseStyle}>{exercise}</p>
            ))
          ) : (
            <p style={exerciseStyle}>No exercises selected</p>
          )}
        </div>

        <button type="submit" style={buttonStyle}>Add Entry 🎉</button>
      </form>
      
      <img src="https://i.pinimg.com/originals/d9/8f/a2/d98fa26fff636cde12a8f9ac6ac83d8b.gif" alt="animated4" style={bottomRightStyle} />
    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "90%",
  maxWidth: "400px",
  padding: "20px",
  background: "yellow",
  borderRadius: "12px",
  boxShadow: "none",
  margin: "auto",
  marginTop: "40px",  
  color: "#333",
  fontFamily: "'Arial', sans-serif",
  animation: "fadeIn 1s ease-in-out",
};

const headerStyle = {
  textAlign: "center",
  color: "#333",
  fontFamily: "'Arial', sans-serif",
  marginBottom: "16px",
};

const inputGroupStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  animation: "slideIn 0.5s ease",
};

const inputStyle = {
  flex: "1",
  padding: "12px",
  borderRadius: "8px",
  border: "2px solid #ddd",
  outline: "none",
  fontSize: "14px",
  backgroundColor: "#fff",
  transition: "all 0.3s ease",
};

const sliderStyle = {
  flex: "1",
};

const buttonStyle = {
  backgroundColor: "black",
  padding: "12px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  marginTop: "16px",
  transition: "background-color 0.3s ease",
  animation: "bounce 1s infinite",
};

const motivationalQuoteStyle = {
  backgroundColor: "#e0f7fa",
  padding: "10px",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "14px",
  color: "#00796b",
  margin: "16px 0",
};

const subHeaderStyle = {
  fontSize: "16px",
  marginBottom: "8px",
};

const exerciseStyle = {
  fontSize: "14px",
};

const bottomRightStyle = {
  position: "fixed",
  bottom: "150px",
  right: "100px",
  width: "300px",
  height: "300px",
  animation: "bounce 2s infinite",
};

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  .icon-animate {
    animation: bounce 2s infinite;
  }
  .confetti {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: url('confetti.gif') no-repeat center center;
    background-size: cover;
    z-index: 9999;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default AddEntryForm;
