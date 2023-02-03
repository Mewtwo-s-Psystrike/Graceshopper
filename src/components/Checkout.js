import React from "react";
import { deleteCartProduct } from "../api/api";

const Checkout = ({cart}) => {

    const submitHandler = async (event) => {
        event.preventDefault();
        window.alert("You have successfullypurchased your vehicle, now redirecting back to the home page.")
        window.location.assign("/");
    }

    return(
        <div>
        <div className="checkoutRow">
            <div className="checkoutColumn">
                <div className="checkoutContainer">
                    <form>
                    <div className="checkoutRow">
                        <div className="checkoutColumn-1">   
                            <h3>Billing Address</h3>
                            <label className="checkoutLabel" for="fname"><i className="fa fa-user"></i> Full Name</label>

                            <input type="text" id="fname" name="firstname" placeholder="type in your full name" className="checkin"></input>
                            <label className="checkoutLabel" for="email"><i className="fa fa-envelope"></i> Email</label>
                            <input type="text" id="email" name="email" placeholder="type in your email" className="checkin"></input>
                            <label className="checkoutLabel" for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                            <input type="text" id="adr" name="address" placeholder="type in your street address" className="checkin"></input>
                            <label className="checkoutLabel" for="city"><i className="fa fa-institution"></i> City</label>
                            <input type="text" id="city" name="city" placeholder="type in your city" className="checkin"></input>
                            <div className="checkoutRow">
                                <div className="checkoutColumn-1"> 
                                    <label className="checkoutLabel" for="state">State</label>
                                    <input type="text" id="state" name="state" placeholder="type in your state" className="checkin"></input>
                                </div>
                                <div className="checkoutColumn-1"> 
                                    <label className="checkoutLabel" for="zip">Zip</label>
                                    <input type="text" id="zip" name="zip" placeholder="type in your zip code" className="checkin"></input>
                                </div>
                            </div>
                        </div>

                    <div className="checkoutColumn-1">
                        <h3>Payment</h3>
                        <label className="checkoutLabel" for="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="type in cardholder's name" className="checkin"></input>
                        <label className="checkoutLabel" for="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="type in the card number" className="checkin"></input>
                        <label className="checkoutLabel" for="expmonth">Expiration Date</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="MM/YY" className="checkin"></input>
                        <label className="checkoutLabel" for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="type in the CVV code" className="checkin"></input>
                    </div>

                    <div className="checkoutBtm">
                        <form onSubmit={submitHandler}>
                            <input type="submit" value="Continue to checkout" className="btn"></input>
                        </form>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div>
              {cart.map((carts) => (
           <div className="cart" key={carts.id}>
          <img src={carts.imageurl} className="cartimg" alt="..."></img>
          <div className="cardright">
          <div>
             <h5>{carts.year} {carts.make} {carts.model}</h5>
           </div>
           <div>
             <p>Price USD: {carts.price}</p>
             <p>Odometer: {carts.odometer}</p>
             <p>Color: {carts.color}</p>
     
            </div>
             </div>
         </div>
        ))}
        </div>
        </div>
    )
}

export default Checkout;