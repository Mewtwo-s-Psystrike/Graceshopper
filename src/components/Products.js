import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Products = ({ products, cart, setCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('filter products', filteredProducts);
  console.log('cart--->', cart);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsModalOpen(true);
  };


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    setFilteredProducts(
      products.filter((product) =>
      product.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toString().includes(searchQuery) ||
      product.odometer.toString().includes(searchQuery) ||
      product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.inventory.toString().includes(searchQuery)
      )
    );

  };



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  return (
    <>
     {isModalOpen && (
      <div className="modal-container">
        <div className="modal">
           <div className="modal-header">
             <h5 className="modal-title">THANK YOU</h5>
           </div>
           <div className="modal-body">
             <p>Your Tesla has been added to your cart!</p>
           </div>
           <div className="modal-footer">
             <button type="button" className="modalbtn"><Link to="/cart">Go to Cart</Link></button>
             <button type="button" className="modalbtn" onClick={() => setIsModalOpen(false)}>Continue Shopping</button>
           </div>
     </div>
      </div>
       
      )}



    <form onSubmit={handleSearchSubmit} className="searchForm">
    <input
        type="text"
        placeholder="Search by year, make, model, and color"
        className="searchinput"
        value={searchQuery}
        onChange={handleSearchSubmit}
      />
      <button type="submit" className="searchbtn">Search</button>
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
             <li className="list-group-item" id="inv">Inventory: {product.inventory}</li>
           </ul>
            </div>
             <button href="#" className="cardbtn" onClick={() => addToCart(product)}>
              ADD TO CART
             </button>
    
          
           </div>
         </div>
        ))}
      </div>
    </div>
      
    </>
  );
};


export default Products;
