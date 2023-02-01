import React from "react";
import { Link } from "react-router-dom";
import home from "../images/home.jpg";


const Home = ({token}) => {
    return(
        <>
        <img src={home} alt="Concept" className="home"/>
        <p className="slogan">The #1 World Leader For Used Tesla Models.</p>
        <div className="browse">
        <Link to="/products" className="text-decoration-none"><button className="browsebtnl">BROWSE MODELS</button></Link>
        {!token? (<Link to="/register" className="text-decoration-none"><button className="browsebtnr">CREATE ACCOUNT</button></Link>): null}
      
        </div>
       
        </>
    )
}

export default Home