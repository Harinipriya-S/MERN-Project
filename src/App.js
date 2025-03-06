import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import InitialHeader from "./components/InitialHeader";
import FinalHeader from "./components/FinalHeader";
import Exercise from "./components/Exercise";
import AddEntryForm from "./components/AddEntryForm";
import History from "./components/History";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setIsAuthenticated(!!userToken);
  }, []);

  return (
    <Router>
      {isAuthenticated ? <FinalHeader setIsAuthenticated={setIsAuthenticated} /> : <InitialHeader />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<RegisterPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/add-entry" element={<AddEntryForm />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
