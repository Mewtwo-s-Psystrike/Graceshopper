import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="cartwindow">
        <div className="cart">CART PAGE</div>
        <button>
          <Link to="/checkout">Checkout</Link>
        </button>
      </div>
    </>
  );
};

export default Cart;
