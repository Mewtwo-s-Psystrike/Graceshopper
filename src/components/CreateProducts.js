import React, { useState } from "react";
import { createProduct } from "..api/api";
import { useNavigate } from "react-router-dom";

const CreateProduct = ({ token, products, setProducts }) => {

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
    
        const newProduct =  {title, year, make, model, description, color, price, inventory}
    
        try {
            if (!products.find((product) => product.title === newProduct.title)) {
                const result = await createProduct(token, newProduct);
                setProducts([...products, result]);
                setTitle("")
                setYear("")
                setMake("")
                setModel("")
                setDescription("")
                setColor("")
                setPrice("")
                setInventory("")
                navigate("/products")   
            } else {
                alert("product already exists")
            }
        } catch (error) {
            console.error("error creating product")
        }
    };
}

return(<>
    <h2 className="product-title">CREATE NEW PRODUCT</h2>
    <form className="product-form" onSubmit={onFormSubmit}>

        <label htmlFor="title" className="product-label">
            PRODUCT TITLE
        </label>
        <input 
            type="text"
            placeholder="Product name"
            className="forminput"
            autoComplete="off"
            value={title}
            onChange={(event) => {
               setTitle(event.target.value)
            }}
        ></input>

<label htmlFor="year" className="product-label">
            PRODUCT YEAR
        </label>
        <input 
            type="text"
            placeholder="Product year"
            className="forminput"
            autoComplete="off"
            value={year}
            onChange={(event) => {
               setYear(event.target.value)
            }}
        ></input>

<label htmlFor="make" className="product-label">
            PRODUCT MAKE
        </label>
        <input 
            type="text"
            placeholder="Product make"
            className="forminput"
            autoComplete="off"
            value={make}
            onChange={(event) => {
               setMake(event.target.value)
            }}
        ></input>

<label htmlFor="model" className="product-label">
            PRODUCT MODEL
        </label>
        <input 
            type="text"
            placeholder="Product model"
            className="forminput"
            autoComplete="off"
            value={model}
            onChange={(event) => {
               setModel(event.target.value)
            }}
        ></input>

<label htmlFor="description" className="product-label">
            PRODUCT DESCRIPTION
        </label>
        <input 
            type="text"
            placeholder="Product description"
            className="forminput"
            autoComplete="off"
            value={description}
            onChange={(event) => {
               setDescription(event.target.value)
            }}
        ></input>

<label htmlFor="color" className="product-label">
            PRODUCT COLOR
        </label>
        <input 
            type="text"
            placeholder="Product color"
            className="forminput"
            autoComplete="off"
            value={color}
            onChange={(event) => {
               setColor(event.target.value)
            }}
        ></input>

<label htmlFor="price" className="product-label">
            PRODUCT PRICE
        </label>
        <input 
            type="text"
            placeholder="Product price"
            className="forminput"
            autoComplete="off"
            value={price}
            onChange={(event) => {
               setPrice(event.target.value)
            }}
        ></input>

<label htmlFor="inventory" className="product-label">
            PRODUCT INVENTORY
        </label>
        <input 
            type="text"
            placeholder="Product inventory"
            className="forminput"
            autoComplete="off"
            value={inventory}
            onChange={(event) => {
               setInventory(event.target.value)
            }}
        ></input>
        <button type="submit" className="formbutton">
            CREATE
        </button>
    </form>
</>

);
        
export default createProduct;