import React, { useState, useEffect } from "react";
import { getAllProducts } from "./api/api";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {Navbar,Home,CreateProducts,Products,Login,Register,Cart,Checkout,} from "./components/Index";

const App = () => {
  const [products, setProducts] = useState({})

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const result = await getAllProducts();
        setProducts(result)
      } catch (error) {
        console.error("error in products use effect",error)
      }
    }
    fetchAllProducts()
  }, [setProducts])

  return (
    <>
    <div className="nav-seperation">

        <div className="navit">
            <Link to="/" className ="graceautos">
              GRACE AUTOS
            </Link>
        </div>

        <div className="dropdown">
              <Link to="/products" className="text-decoration-none">Shop</Link>
              <Link to="/login" className="text-decoration-none">Account</Link>
              <Link to="/cart" >
                  <i className="bi bi-cart2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-cart2" viewBox="0 0 16 16">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                  </i>
              </Link>
        </div>
    </div>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/createproducts" element={<CreateProducts />} />
      </Routes>
    </>
  );
};

export default App;
