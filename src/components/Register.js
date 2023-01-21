import React from "react";

const Register = () => {
  return (
    <div>
      <div id="login-page">
        <div>
          <h1 className="register-title">Register for Grace Autos</h1>
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
              Register
            </button>
          </form>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Register;
