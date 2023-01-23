import React from "react";
import { Link } from "react-router-dom";
import home from "../images/home.jpg";
import tesla from "../images/tesla.png";


const Home = () => {
    return(
        <>
        <img src={home} alt="Concept" className="home"/>
        <body className="oneHunVh">
        <Link to="/products" className="modelshome">MODELS</Link>
        <i class="bi bi-arrow-bar-down"></i>
        <img src={tesla} alt="Tesla Logo" height={100} className="tesla"/>
        </body>
        </>
        

    )
}

export default Home