import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const Products = ({ products, token }) => {
  console.log("products prop", products);
  return (
    <>
      <div className="carddiv">
        {products.map((product) => (
           <div className="card">
          <img src={product.imageurl} class="card-img-top" alt="..."></img>
           <div className="card-body">
             <h5 className="card-title">{product.year} {product.make} {product.model}</h5>
             <p className="card-text">
             {product.description}
             </p>
           </div>
           <ul className="list-group list-group-flush">
             <li className="list-group-item">Price USD: {product.price}</li>
             <li className="list-group-item">Color: {product.color}</li>
             <li className="list-group-item">Invetory: {product.invetory}</li>
           </ul>
           <div className="card-body">
             <a href="#" className="card-link">
               <Link to="/createproducts">CREATE PRODUCTS</Link>
             </a>
             <a href="#" className="card-link">
               ADD TO CART
             </a>
           </div>
         </div>
        ))}
      </div>
    </>
  );
};

export default Products;
