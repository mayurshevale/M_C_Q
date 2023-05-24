import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push("/"); // Navigate to the home page after successful registration
    } catch (error) {
      alert(error.message); // Show an error message if registration fails
    }
  };

  const history = useHistory();

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Home.js;
