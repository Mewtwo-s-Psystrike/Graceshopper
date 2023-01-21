import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="cart">CART PAGE</div>
      <button><Link to="/checkout">Checkout</Link></button>
    </>
  );
};

export default Cart;
