import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const Products = ({ products, token }) => {
  console.log("products prop", products);
  return (
    <>
      <div className="carddiv">
        {products.map((product) => (
           <div className="card">

          <div className="cardleft">
          <img src={product.imageurl} className="card-img-top" alt="..." height={250}></img>
          </div>
          <div className="cardright">
          <div className="card-body">
             <h5 className="card-title">{product.year} {product.make} {product.model}</h5>
             <p className="ptext">
             {product.description}
             </p>
           </div>
           <div className="ptext">
           <ul className="list-group list-group-flush">
             <li className="list-group-item">Price USD: {product.price}</li>
             <li className="list-group-item">Color: {product.color}</li>
             <li className="list-group-item">Inventory: {product.inventory}</li>
           </ul>
            </div>
          
           <div className="card-body">
            
             <button href="#" className="cardbtn">
               ADD TO CART
             </button>
          </div>
          
           </div>
         </div>
        ))}
      </div>
    </>
  );
};

export default Products;
