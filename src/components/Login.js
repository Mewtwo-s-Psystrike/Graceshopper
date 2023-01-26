import React, { useState } from "react";
import {} from "../api/api";
import { Link, Routes, Route } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginwindow">
      <div className="logindiv">
        <div>
          <h1 className="logintitle">Account</h1>
          <form className="loginform">
            <label className="userlog">Username</label>
            <br />
            <input
              className="username"
              autoComplete="on"
              // onChange={handleOnChange}
              // value={username}
            />
            <br />
            <label className="passlog">Password</label>
            <br />
            <input
              type="password"
              className="password"
              autoComplete="on"
              // onChange={handleOnChange}
              // value={password}
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
  );
};

export default Login;
