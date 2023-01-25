import React, { useState } from "react";
import {} from "../api/api";
import { Link, Routes, Route } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginwindow">
      <div id="login-page">
        <div>
          <h1 className="form-title">Welcome Returning User!</h1>
          <form className="username-box">
            <label>Username:</label>
            <input
              className="username"
              // onChange={handleOnChange}
              // value={username}
              placeholder="Username"
            />
            <br />
            <br />
            <label>Password:</label>
            <input
              type="password"
              className="Password"
              // onChange={handleOnChange}
              // value={password}
              placeholder="Password"
            />
            <link></link>
            <button type="submit" id="login-button">
              Login
            </button>
          </form>
        </div>
        <br />
        <div id="register">
          <Link to="/register">
            Don't have an accoun with us? Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
