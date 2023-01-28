import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";


const Products = ({ products, token }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  console.log('filter products', filteredProducts);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    setFilteredProducts(
      products.filter((product) =>
      product.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toString().includes(searchQuery) ||
      product.odometer.toString().includes(searchQuery) ||
      product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.inventory.toString().includes(searchQuery)
      )
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
    <form onSubmit={handleSearchSubmit} className="searchForm">
    <input
        type="text"
        placeholder="Search for a product"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
    <div className="flexwrap">
    <div className="carddiv">
        {filteredProducts.map((product) => (
           <div className="card" key={product.id}>

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
           <div>
           <ul className="list-group list-group-flush">
             <li className="list-group-item">Price USD: {product.price}</li>
             <li className="list-group-item">Odometer: {product.odometer}</li>
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
    </div>
      
    </>
  );
};

export default Products;
