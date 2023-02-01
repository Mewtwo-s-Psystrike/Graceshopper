import React from "react";
import { useState } from "react";
import { deleteCartProduct } from "../api/api";

const Checkout = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardname: "",
        cardnumber: "",
        expmonth: "",
        cvv: ""
      });

      const inputRefs = {};

      const inputChangeHandler = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = Object.entries(inputRefs).reduce((acc, [key, ref]) => {
      acc[key] = ref.current.value;
      return acc;
    }, {});
    setFormData(formData);
  };

  console.log('inputRefs --->', inputRefs);
  return (
    <>
      <div className="checkoutRow">
        <div className="checkoutColumn">
          <div className="checkoutContainer">
          <form onSubmit={submitHandler}>
              <div className="checkoutRow">
                <div className="checkoutColumn-1">
                  <h3>Billing Address</h3>
                  <label className="checkoutLabel">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="name"
                    placeholder="type in your full name"
                    className="checkin"
                    onChange={inputChangeHandler}
                    value={formData.name}
                  ></input>
                  <label className="checkoutLabel">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="type in your email"
                    className="checkin"
                    onChange={inputChangeHandler}
                    value={formData.email}
                  ></input>
                  <label className="checkoutLabel">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="type in your street address"
                    className="checkin"
                    onChange={inputChangeHandler}
                    value={formData.address}
                  ></input>
                  <label className="checkoutLabel">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="type in your city"
                    className="checkin"
                    onChange={inputChangeHandler}
                    value={formData.city}
                  ></input>

                  <div className="checkoutRow">
                    <div className="checkoutColumn-1">
                      <label className="checkoutLabel">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="type in your state"
                        className="checkin"
                        onChange={inputChangeHandler}
                        value={formData.state}
                      ></input>
                    </div>
                    <div className="checkoutColumn-1">
                      <label className="checkoutLabel">
                        Zip
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="type in your zip code"
                        className="checkin"
                        onChange={inputChangeHandler}
                        value={formData.zip}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="checkoutColumn-1">
                  <h3>Payment</h3>
                  <label className="checkoutLabel">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="type in cardholder's name"
                    className="checkin"
                    onChange={inputChangeHandler}
                    value={formData.cardname}
                  ></input>
                  <label className="checkoutLabel">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="type in the card number"
                    className="checkin"
                    onChange={inputChangeHandler}
                    value={formData.cardnumber}
                  ></input>
                  <label className="checkoutLabel" >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="MM/YY"
                    className="checkin"
                    onChange={inputChangeHandler}
                    value={formData.expmonth}
                  ></input>
                  <label className="checkoutLabel" >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="type in the CVV code"
                    className="checkin"
                  ></input>
                </div>

                <div className="checkoutBtm">
                  
                    <button
                      type="submit"
                      value="Continue to checkout"
                      className="btn"
                    >Continue to Checkout</button>
          
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
