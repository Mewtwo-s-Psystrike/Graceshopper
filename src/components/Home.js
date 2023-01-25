import React from "react";
import { Link } from "react-router-dom";
import home from "../images/home.jpg";


const Home = () => {
    return(
        <>
        <img src={home} alt="Concept" className="home"/>
        <body className="oneHunVh">
        <i class="bi bi-arrow-bar-down"></i>
        </body>
        </>
        

    )
}

export default Home