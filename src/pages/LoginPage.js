import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
   
    const token = "dummyToken"; 
    localStorage.setItem("userToken", token);
    navigate("/exercise"); 
    window.location.reload(); 
  };

  const handleRedirectToRegister = () => {
    navigate("/register"); 
  };

  return (
    <div className="login-page container">
      <br/><br/><br/>  <br/><br/><br/>  <br/><br/><br/>
      <form onSubmit={handleSubmit}><h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <br/><br/><br/>
        <p>Don't have an account?</p>
        <button onClick={handleRedirectToRegister}>Sign Up</button>
      </div>
    </div>
  );
}

export default LoginPage;
