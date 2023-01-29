import React, { useState, useEffect } from "react";
import { getAllProducts, getCurrentUser } from "./api/api";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
  Home,
  CreateProducts,
  Products,
  Login,
  Register,
  Cart,
  Checkout,
} from "./components/Index";

const App = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(
    window.localStorage.getItem("token" || "")
  );



  function logout() {
    window.localStorage.removeItem("JWT_SECRET");
    setToken("");
    setUser("");
  }

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const result = await getAllProducts();
        setProducts(result);
      } catch (error) {
        console.error("error in products use effect", error);
      }
    };
    fetchAllProducts();
  }, [setProducts]);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token", token);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getCurrentUser(token).then((result) => setUser(result));
    }
  }, [token]);

  return (
    <>
      <div className="nav-seperation">
        <Link to="/" className="graceautos">
          GRACE AUTOS
        </Link>
        <div className="shopaccountcart">
          <Link to="/products" className="text-decoration-none">
            Shop
          </Link>
          <Link to="/cart" className="text-decoration-none">
            Cart
          </Link>

          {token ? (
            <Link to="/" onClick={logout} className="text-decoration-none">
              Logout
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-decoration-none">
                Account
              </Link>
            </>
          )}
            
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/createproducts"
          element={
            <CreateProducts setProducts={setProducts} products={products} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
