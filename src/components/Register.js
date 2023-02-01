import React, { useState } from "react";
import { registerUser } from "../api/api.js";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("username---->", username);

  const handleRegisterClick = async (event) => {
    event.preventDefault();

    const newUser = await registerUser(username, password);
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
    <div className="loginwindow">
    <div className="logindiv">
      <div>
     <h1 className="logintitle">Create Account</h1>
     <br />
      <form className="loginform" onSubmit={handleRegisterClick}>
        <label className="userlog">Username: </label>
        <input
          type="text"
          className="username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleUserChange}
        />
        <br />
        <label className="passlog">Password: </label>
        <input
          type="password"
          className="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Link to="/login"> Have an account? Click here to login</Link>
        <br />
        <br />
        <button className="logbtn">Register</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default RegisterUser;
