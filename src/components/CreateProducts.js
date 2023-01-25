import React, { useState } from "react";
import { createProduct } from "../api/api";
import { useNavigate } from "react-router-dom";

const CreateProduct = ({ user,token, products, setProducts }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const newProduct = {
      title,
      year,
      make,
      model,
      description,
      color,
      price,
      inventory,
    };

    try {
      if (!products.find((product) => product.title === newProduct.title)) {
        const result = await createProduct(token,user, newProduct);
        setProducts([...products, result]);
        setTitle("");
        setYear("");
        setMake("");
        setModel("");
        setDescription("");
        setColor("");
        setPrice("");
        setInventory("");
        navigate("/products");
      } else {
        alert("product already exists");
      }
    } catch (error) {
      console.error("error creating product");
    }
  };

  return (
    <>
      <form className="row g-3" onSubmit={onFormSubmit}>
        <div className="col-md-6">
          <label htmlFor="title" className="product-label">
            Title
          </label>
          <input
            type="text"
            placeholder="Product Title"
            className="form-control"
            id="inputEmail4"
            autoComplete="off"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
        </div>

        <div className="col-md-6">
          <label htmlFor="year" className="product-label">
            Year
          </label>
          <input
            type="text"
            placeholder="Product year"
            className="form-control"
            id="inputPassword4"
            autoComplete="off"
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
          ></input>
        </div>

        <div className="col-12">
          <label htmlFor="make" className="product-label">
            Make
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Tesla"
            autoComplete="off"
            value={make}
            onChange={(event) => {
              setMake(event.target.value);
            }}
          ></input>
        </div>

        <div className="col-12">
          <label htmlFor="model" className="product-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </div>

        <div className="col-md-6">
          <label htmlFor="color" className="product-label">
            Color
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            autoComplete="off"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          ></input>
        </div>

        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Model
          </label>
          {/* <select id="inputState" className="form-select">
            <option selected="">Choose...</option>
            <option>...</option>
          </select> */}
        </div>

        <div className="col-md-2">
          <label htmlFor="price" className="product-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            autoComplete="off"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          ></input>
        </div>

        <div className="col-md-2">
        <label htmlFor="inventory" className="product-label">
                    PRODUCT INVENTORY
                </label>
                <input 
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    value={inventory}
                    onChange={(event) => {
                       setInventory(event.target.value)
                    }}
                ></input>
            </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            CREATE
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateProduct;
