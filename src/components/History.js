import React, { useEffect, useState } from "react";
import { FaFire } from 'react-icons/fa';

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "5px 0",
  boxSizing: "border-box",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

function History() {
  const [entries, setEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editEntry, setEditEntry] = useState({
    date: "",
    names: "",
    weight: "",
    height: "",
    bmi: "",
    water: "",
    steps: "",
    sleep: "",
    exercises: "",
  });
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("healthEntries")) || [];
    setEntries(savedEntries);
    calculateStreak(savedEntries);
  }, []);

  const calculateStreak = (entries) => {
    if (entries.length === 0) {
      setStreak(0);
      return;
    }

    let streakCount = 1;
    for (let i = 1; i < entries.length; i++) {
      const currentDate = new Date(entries[i].date);
      const previousDate = new Date(entries[i - 1].date);
      const differenceInTime = currentDate - previousDate;
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      if (differenceInDays === 1) {
        streakCount++;
      } else {
        break;
      }
    }

    setStreak(streakCount);
  };

  const getDietRecommendation = (bmi) => {
    bmi = parseFloat(bmi);
    if (bmi < 18.5) {
      return "High-calorie diet with proteins, healthy fats, and carbs.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Balanced diet including lean proteins, complex carbs, and healthy fats.";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Increase fiber intake, opt for lean proteins, and reduce processed foods.";
    } else {
      return "Low-calorie, high-fiber diet with lean proteins, avoid sugars and refined carbs.";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditEntry({ ...entries[index] });
  };

  const handleSave = () => {
    if (editIndex === null) return;
    const updatedEntries = [...entries];
    updatedEntries[editIndex] = { ...editEntry };
    setEntries(updatedEntries);
    localStorage.setItem("healthEntries", JSON.stringify(updatedEntries));
    setEditIndex(null);
    calculateStreak(updatedEntries);
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    localStorage.setItem("healthEntries", JSON.stringify(updatedEntries));
    calculateStreak(updatedEntries);
  };

  return (
    <center>
     <div
  style={{
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "rgba(219, 238, 212, 0.83)", // Light overlay effect
  }}
>

        <div
          style={{
            maxWidth: "700px",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "rgb(244, 243, 199)",
            boxShadow: "0px 4px 20px rgba(73, 18, 214, 0.3)",
            textAlign: "left",
            width: "100%", 
          }}
        >
          <br/><br/><br/>  
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>History</h2>
          <h3 style={{ textAlign: "center", marginBottom: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <FaFire color="red" style={{ marginRight: "8px" }} /> Current Streak: {streak} day
          </h3>
          {entries.length === 0 ? (
            <p>No entries found.</p>
          ) : (
            <ul style={{ padding: "0", listStyleType: "none" }}>
              {entries.map((entry, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "15px",
                    padding: "15px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(203, 19, 19, 0.2)",
                  }}
                >
                  {editIndex === index ? (
                    
                    <div>
                      <input
                        type="text"
                        name="names"
                        value={editEntry.names}
                        onChange={handleChange}
                        placeholder="Name"
                        style={inputStyle} 
                      />
                      <input
                        type="date"
                        name="date"
                        value={editEntry.date}
                        onChange={handleChange}
                        placeholder="Date"
                        style={inputStyle} 
                      />
                      <input
                        type="number"
                        name="weight"
                        value={editEntry.weight}
                        onChange={handleChange}
                        placeholder="Weight (kg)"
                        style={inputStyle} 
                      />
                      <input
                        type="number"
                        name="height"
                        value={editEntry.height}
                        onChange={handleChange}
                        placeholder="Height (cm)"
                        style={inputStyle} 
                      />
                      <input
                        type="number"
                        name="bmi"
                        value={editEntry.bmi}
                        onChange={handleChange}
                        placeholder="BMI"
                        style={inputStyle} 
                      />
                      <input
                        type="number"
                        name="water"
                        value={editEntry.water}
                        onChange={handleChange}
                        placeholder="Water (L)"
                        style={inputStyle} 
                      />
                      <input
                        type="number"
                        name="steps"
                        value={editEntry.steps}
                        onChange={handleChange}
                        placeholder="Steps"
                        style={inputStyle}
                      />
                      <input
                        type="number"
                        name="sleep"
                        value={editEntry.sleep}
                        onChange={handleChange}
                        placeholder="Sleep (hrs)"
                        style={inputStyle} 
                      />
                    
                      <button
                        onClick={handleSave}
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          margin: "10px 5px",
                        }}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        style={{
                          backgroundColor: "gray",
                          color: "white",
                          padding: "5px 10px",
                          borderRadius: "5px",
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    // Display Data
                    <div>
                      <strong>
                        <b style={{ color: "black", fontWeight: "bold" }}>
                          Name:{" "}
                        </b>
                        {entry.names}
                        <br />
                        <b style={{ color: "black", fontWeight: "bold" }}>
                          Date:
                        </b>
                        {entry.date}
                      </strong>
                      <p>
                        <b style={{ color: "black", fontWeight: "bold" }}>
                          Weight:{" "}
                        </b>{" "}
                        {entry.weight} kg <br />
                        <b style={{ color: "black", fontWeight: "bold" }}>
                          Height:{" "}
                        </b>
                        {entry.height} cm <br />
                        <b style={{ color: "black", fontWeight: "bold" }}>
                          BMI:{" "}
                        </b>
                        {entry.bmi}
                      </p>
                      <p>
                      <b style={{ color: "black", fontWeight: "bold" }}>
                          Steps:{" "}
                        </b>
                        {entry.steps} <br />
                        <b style={{ color: "black", fontWeight: "bold" }}>
                          Sleep:{" "}
                        </b>{" "}
                        {entry.sleep} hrs
                      </p>
                      <b style={{ color: "black", fontWeight: "bold" }}>
                        Exercises: {entry.exercises || "None"}
                      </b>
                      <p>
                        <strong
                          style={{
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Diet Recommendation:
                        </strong>{" "}
                        <span
                          style={{
                            color: "",
                            fontWeight: "bold",
                          }}
                        >
                          {getDietRecommendation(entry.bmi)}
                        </span>
                      </p>

                      <div>
                        <button
                          onClick={() => handleEdit(index)}
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            marginRight: "5px",
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </center>
  );
}

export default History;


