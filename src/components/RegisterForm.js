import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FinalHeader from "./FinalHeader";

function RegisterPage({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering user:", username, email, password);
    
    
    localStorage.setItem("userToken", "dummyToken");
    setIsAuthenticated(true);
    navigate("/exercise");
  };

  return (
    <>
      <FinalHeader setIsAuthenticated={setIsAuthenticated} />
      <div className="register-page container">
        <br/><br/><br/><h2>Register</h2><br/><br/>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="new-password"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="new-password"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;