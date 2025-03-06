import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ageGroups = [
  { label: "Under 12", value: "child" },
  { label: "12-17", value: "teen" },
  { label: "18-49", value: "adult" },
  { label: "50+", value: "senior" }
];

const exercises = [
   { name: "Running", ageGroup: "teen-adult", image: "https://images.pexels.com/photos/694587/pexels-photo-694587.jpeg?auto=compress&cs=tinysrgb&w=600", gif:"https://media0.giphy.com/media/yyJtlSsn2cP8WH1Drv/giphy.gif", description: "Running improves heart health and endurance.", meters: 500, calories: 100 },
  { name: "Walking", ageGroup: "all", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePO_L-ucWXG6OM8ZtNa1jrGmsa7A9hgMyew&s", gif: "https://i.pinimg.com/originals/47/03/09/4703093a70ba47001bf2c86319aae091.gif", description: "Walking enhances overall fitness and mobility.", meters: 300, calories: 50 },
  { name: "Swimming", ageGroup: "all", image: "https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg", gif: "https://i.gifer.com/qh.gif", description: "Swimming builds strength and flexibility.", meters: 200, calories: 120 },
  { name: "Cycling", ageGroup: "child-teen-adult", image: "https://www.shutterstock.com/image-vector/happy-little-boy-wearing-helmet-600nw-2407683425.jpg", gif: "https://i.gifer.com/8tVa.gif", description: "Cycling improves cardiovascular health and leg strength.", meters: 700, calories: 90 },
  { name: "Planks", ageGroup: "adult-senior", image: "https://media.istockphoto.com/id/1204463032/vector/woman-doing-plank-exercise-on-blue-mat-with-stopclock-symbol-over-her-head.jpg?s=612x612&w=0&k=20&c=gmOmI8TkKt9deB1Mh3pAAA8DWBPVc7QBIdMh9r0NAQ8=", gif: "https://assets-v2.lottiefiles.com/a/b8ff5496-4162-11ee-8471-fb5cac1c4de6/eWZZfv0tat.gif", description: "Planks strengthen the core and improve posture.", times: 60, calories: 40 },
  { name: "Push-ups", ageGroup: "teen-adult", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRus1BvdRWYwxa-3lxtQ-paT94tawc8IFGHIA&s", gif: "https://i.pinimg.com/originals/7e/51/8f/7e518fbecfdebefe167b7d222a692efd.gif", description: "Push-ups build upper body strength.", times: 30, calories: 50 },
  { name: "Skipping", ageGroup: "child-teen-adult", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhxT--k6_UsOPghufvv8E6miHiDazPiqyxQ&s", gif: "https://media0.giphy.com/media/7XxDb1vih6BOKRkFWa/200w.gif", description: "Skipping improves bone strength and cardiovascular health.", meters: 400, calories: 70 },
  { name: "Squats", ageGroup: "teen-adult-senior", image: "https://images.healthshots.com/healthshots/en/uploads/2024/06/12074011/squats-1.jpg", gif: "https://www.kettlebellkings.com/cdn/shop/articles/Sqaut_Exercises.gif", description: "Squats strengthen the lower body and core.", times: 25, calories: 60 },
  { name: "Dancing", ageGroup: "all", image: "https://cbx-prod.b-cdn.net/COLOURBOX11618671.jpg?width=800&height=800&quality=70", gif: "https://cdn.pixabay.com/animation/2024/03/09/11/53/11-53-41-115_512.gif", description: "Dancing improves coordination and cardiovascular health.", meters: 0, calories: 80 },
  { name: "Pilates", ageGroup: "adult-senior", image: "https://media.self.com/photos/5a79d77a9f7fc74032b0448c/4:3/w_5000,h_3750,c_limit/011618_SELF_2845.jpg", gif: "https://media2.giphy.com/media/zMBf4OJl9s2dZSFGmK/source.gif", description: "Pilates enhances flexibility and core strength.", meters: 0, calories: 50 }
];

const Exercise = () => {
  const [ageGroup, setAgeGroup] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const navigate = useNavigate();

  const getFilteredExercises = () => {
    if (!ageGroup) return [];
    if (ageGroup === "child") return exercises.filter(e => ["all", "child-teen-adult"].includes(e.ageGroup));
    if (ageGroup === "teen") return exercises.filter(e => ["all", "child-teen-adult", "teen-adult"].includes(e.ageGroup));
    if (ageGroup === "adult") return exercises;
    return exercises.filter(e => ["all", "adult-senior", "senior"].includes(e.ageGroup));
  };

  const toggleSelection = (exercise) => {
    setSelectedExercises((prev) =>
      prev.includes(exercise.name) ? prev.filter((e) => e !== exercise.name) : [...prev, exercise.name]
    );
  };

  const openModal = (exercise) => {
    setSelectedExercise(exercise);
  };

  const closeModal = () => {
    setSelectedExercise(null);
  };

  const handleAddExercise = () => {
    navigate("/add-entry", { state: { selectedExercises } });
  };

  return (
    <div className="exercise-container">
      <br/> <br/> <br/>
      <h1 className="exercise-title">Exercise Guide</h1>
      
      {/* Age Dropdown */}
      <div className="age-dropdown-container">  <br/>
        <label>Select Your Age Group: </label>
        <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
          <option value="">-- Select Age Group --</option>
          {ageGroups.map((group, index) => (
            <option key={index} value={group.value}>{group.label}</option>
          ))}
        </select>
      </div>

      {/* Exercise Grid */}
      {ageGroup && (
        <div className="exercise-grid">
          {getFilteredExercises().map((exercise, index) => (
            <div
              key={index}
              className={`exercise-card ${selectedExercises.includes(exercise.name) ? "selected" : ""}`}
              onClick={() => {
                toggleSelection(exercise);
                openModal(exercise);
              }}
            >
              <img src={exercise.image} alt={exercise.name} className="exercise-image" />
              {selectedExercises.includes(exercise.name) && <span className="tick-mark">✔</span>}
              <h2 className="exercise-name">{exercise.name}</h2>
            </div>
          ))}
        </div>
      )}

      {/* Add Exercise Button */}  <br/><br/><br/>
      <button onClick={handleAddExercise} className="add-exercise-btn">
        Add Exercise
      </button>

      {/* Modal for Exercise Details */}
      {selectedExercise && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedExercise.name}</h2>
            <p className="exercise-description">{selectedExercise.description}</p>
            <img src={selectedExercise.gif} alt={selectedExercise.name} className="exercise-gif" style={{ display: "block", margin: "0 auto", maxWidth: "100%", borderRadius: "10px" }} />
            {selectedExercise.meters ? (
              <p>🏃 Distance: {selectedExercise.meters} meters</p>
            ) : (
              <p>🔄 Repetitions: {selectedExercise.times || "N/A"} times</p>
            )}
            <p>🔥 Calories Burned: {selectedExercise.calories} kcal</p>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercise;
