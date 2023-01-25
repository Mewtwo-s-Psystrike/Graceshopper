import React from "react";
import { Link } from "react-router-dom";
import home from "../images/home.jpg";


const Home = () => {
    return(
        <>
        <img src={home} alt="Concept" className="home"/>
        <div className="oneHunVh">
        <i className="bi bi-arrow-bar-down"></i>
        </div>
        </>
        

    )
}

export default Home