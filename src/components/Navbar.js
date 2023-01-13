import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/register">Register</Link>
            <Link to="/register/login">Login</Link>
        </div>
    )
}

//if token then no login/register .. if no token then register , have login link at register
export default Navbar