import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FinalHeader from "../components/FinalHeader"; 

function RegisterPage({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); 

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
    setIsRegistered(true); 

    navigate("/exercise");
  };

  return (
    <>
      {isRegistered && <FinalHeader setIsAuthenticated={setIsAuthenticated} />}

      <div className="register-page container">
      <br/><br/><br/><br/><br/><br/><br/><br/>
        <form onSubmit={handleSubmit}><h2>Register</h2>
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
