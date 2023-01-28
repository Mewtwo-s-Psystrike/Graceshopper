import React, { useState } from "react";
import { registerUser } from "../api/api.js";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("username---->", username);

  const handleRegisterClick = async (event) => {
    event.preventDefault();
    const registerInfo = {
      username: username,
      password: password
    };

    const newUser = await registerUser(registerInfo);
    window.alert(newUser.message)
    setUsername("");
    setPassword("");
    window.location.replace("/login");
  };

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div id="registerPage">
      <br />
      <br />
      <br />
      <br />
      <h2>Create New User</h2>

      <form className="username-box" onSubmit={handleRegisterClick}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          className="RegisterBox"
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleUserChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          className="RegisterBox"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <br />
        <button>Register</button>
      </form>
      <h4>Already have an account with us?</h4>
      <button>
        <Link to="/login"> Click here to login</Link>
      </button>
    </div>
  );
};

export default RegisterUser;
