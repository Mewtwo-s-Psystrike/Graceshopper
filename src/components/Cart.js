import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  console.log("cart in cart", cart);
  return (
    <>
      <div className="floatleft">
        {cart.map((carts) => (
          <div className="cart" key={carts.id}>
            <img src={carts.imageurl} className="cartimg" alt="..."></img>
            <div>
              <h5>{carts.title}</h5>
            </div>
            <div>
              <p>Price USD: {carts.price}</p>
              <p>Odometer: {carts.odometer}</p>
              <p>Color: {carts.color}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="floatright">
        <p>Subtotal: ''</p>
        <p>Est Taxes & Fees</p>
        <p>Shipping: </p>
        <button href="#">
          <Link to="/checkout">CONTINUE TO PURCHASE</Link>
        </button>
      </div>
    </>
  );
};

export default Cart;
