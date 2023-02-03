import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const [subtotal, setSubtotal] = useState("");

  useEffect(() => {
    setSubtotal(cart.reduce((acc, item) => acc + item.price, ""));
  }, [cart]);

  const taxes = "3,456"
  const shipping = "2,123"

  return (
    <>
      <div className="floatleft">
        {cart.map((carts) => (
          <div className="cart" key={carts.id}>
            <img src={carts.imageurl} className="cartimg" alt="..."></img>
            <div>
              <h5 className="carttitle">{carts.title}</h5>
            <div>
              <p><b>Price USD:</b> {carts.price}</p>
              <p><b>Odometer:</b> {carts.odometer}</p>
              <p><b>Color:</b> {carts.color}</p>
              <p><b>Description:</b> {carts.description}</p>

            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="floatright">
        <div>
        <p>Subtotal: {subtotal}</p>
        <p>Est Taxes & Fees: ${taxes}</p>
        <p>Shipping: ${shipping} </p>
        </div>
        <div>
        <button href="#">
          <Link to="/checkout">CONTINUE TO PURCHASE</Link>
        </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
