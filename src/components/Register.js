import React, { useState } from 'react';
import { registerUser } from '../api/api.js';
import { Link } from "react-router-dom";


const RegisterUser = () => {
    const [user, setUser] = useState("");
    const [password, setPassword]= useState("");

  
    const handleRegisterClick = async (event) => {
        event.preventDefault();
        const registerInfo = {
          user: user,
          password: password
        };
      
        const newUser = await registerUser(registerInfo);
        window.alert("You have successfully registered!");
        setUser("");
        setPassword("");
        window.location.replace("/login");
      };
    

    const handleUserChange = (event) => {
        setUser(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
 

    return (
      <div id='registerPage'>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Create New User</h2>

        <form className='username-box'>
            <label htmlFor="username">Username: </label>
            <input type="text" className="RegisterBox" id="username" placeholder="Username" value={user} onChange={handleUserChange}  />
            <br/>
            <br/>
            <label htmlFor="password">Password: </label>
            <input type="password" className="RegisterBox" placeholder="Password" id="password" value={password}
             onChange={handlePasswordChange}/>
             <br/>
             <br/>
             <button onClick={handleRegisterClick}>Register</button>  
        </form>
        <h4>Already have an account with us?</h4><button><Link to="/login"> Click here to login</Link></button>
      </div>    
    );
};

export default RegisterUser;