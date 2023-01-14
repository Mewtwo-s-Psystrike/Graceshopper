import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <div className="menu">
            <div className="homelink">
            <Link to="/">Home</Link>
            </div>
            <div className="dropdown">
            <Link to="/products">All Products</Link>
            <Link to="/account">Account</Link>
            </div>
            <div>
            <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}

//if token then no login/register .. if no token then register , have login link at register
export default Navbar