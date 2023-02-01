import React, { useState } from "react";
import {loginUser} from "../api/api";
import { Link } from "react-router-dom";


const Login = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await loginUser(username, password);
      const newToken = res['token']
      console.log('newToken', newToken)
      if(!newToken){
        console.error('Token is not set');
        throw new Error('Token is not set');
      }
      setToken(newToken);
      window.localStorage.setItem('JWT_SECRET', newToken);
      const token = window.localStorage.getItem('JWT_SECRET');
      console.log('Token in local storage', token)
      window.alert("You have successfully signed in! Now redirecting to home page...")
      window.location.assign("/");
    } catch (error) {
      window.alert("Error logging in. Please check your username and password and try again.3");
      console.error('handle submit', error);
      throw error
    }
  }
  return (
    <>
    <div className="loginwindow">
      <div className="logindiv">
        <div>
          <h1 className="logintitle">Sign In</h1>
          <form onSubmit={handleSubmit} className="loginform">
            <label className="userlog">Username</label>
            <br />
            <input
              className="username"
              id="username"
              onChange={handleOnChange}
              value={username}
              placeholder="Username"
            />
            <br />
            <label className="passlog">Password</label>
            <br />
            <input
              type="password"
              id="Password"
              className="password"
              onChange={handleOnChange}
              value={password}
              placeholder="Password"
            />
            <button type="submit" className="logbtn">
              SIGN IN
            </button>
          </form>
        </div>
        <br />
        <p>OR</p>
          <Link to="/register" className="text-decoration-none">
             <button className="createacct">CREATE ACCOUNT</button>
          </Link>
      </div>
    </div>
    </>
  );
};

export default Login;
