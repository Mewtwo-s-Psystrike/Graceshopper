import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const Products = ({ products, token }) => {
  console.log("products prop", products);
  return (
    <>
      <div className="carddiv">
        {products.map((product) => (
           <div className="card">
          <img src={product.imageurl} className="card-img-top" alt="..." height={250}></img>
           <div className="card-body">
             <h5 className="card-title">{product.year} {product.make} {product.model}</h5>
             <p className="card-text">
             {product.description}
             </p>
           </div>
           <ul className="list-group list-group-flush">
             <li className="list-group-item">Price USD: {product.price}</li>
             <li className="list-group-item">Color: {product.color}</li>
             <li className="list-group-item">Invetory: {product.inventory}</li>
           </ul>
           <div className="card-body">
            
            <Link to="/createproducts" className="card-link">CREATE PRODUCTS</Link>
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
