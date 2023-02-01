import React, { useState, useEffect } from 'react';
import { ListGroup, Tabs, Tab, Container, Col, Row, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../api/api';

const Cart = ({cart}) => {
console.log('cart in cart', cart);
  return (
    <>
      <div className="flexwrap">
    <div className="carddiv">
        {cart.map((carts) => (
           <div className="card" key={carts.id}>
          <img src={carts.imageurl} className="card-img-top" alt="..." height={250}></img>
          <div className="cardright">
          <div>
             <h5>{carts.year} {carts.make} {carts.model}</h5>
           </div>
           <div>
             <p>Price USD: {carts.price}</p>
             <p>Odometer: {carts.odometer}</p>
             <p>Color: {carts.color}</p>
     
            </div>
             <button href="#" >
              CONTINUE TO CHECKOUT
             </button>
    
          
           </div>
         </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Cart;

