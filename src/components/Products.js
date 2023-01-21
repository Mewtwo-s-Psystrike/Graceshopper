import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const Products = () => {
    return(
        <>
         <div className="products">PRODUCTS PAGE</div>
         <p>list of cars with title(year, make, model), description, price</p>
         <Link to='/createproducts'>CreateProduct</Link>
        </>
       
    )
}

export default Products

