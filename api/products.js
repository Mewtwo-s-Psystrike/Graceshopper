const express = require('express');
const productsRouter = express.Router();
const {getAllProducts, createProduct, getProductByTitle, getProductById, updateProduct, deleteProduct} = require(`../db`);
const { requireUser } = require(`./requireUser`);


productsRouter.get('/', async (req, res, next) => { 
    try {
      const products = await getAllProducts();
      if (products) {
        res.send(products);
      }
  
    } catch ({ title, message }) {
      next({ title, message });
    }
  });


  productsRouter.post('/', requireUser, async (req, res) => {
    const { title, imageurl, year, make, model, description, color, price, inventory } = req.body;
    const _title = await getProductByTitle(title);
    const newProduct = await createProduct({ title, imageurl, year, make, model, description, color, price, inventory });
  
    if (_title) {
      res.send({
        error: 'ProductAlreadyExists',
        title: 'Product already exists',
        message: 'That product already exists',
      });
    } else {
      res.send(newProduct);
    }
  });


  productsRouter.patch('/:productId', requireUser, async (req, res, next) => {
    const { productId } = req.params;
  
    try {
      const { title, imageurl, year, make, model, description, color, price, inventory } = req.body;
  
      const updateFields = {};
  
      if (productId) {
        updateFields.id = productId;
      }

      if (title) {
        updateFields.title = title;
      }
  
      if (imageurl) {
        updateFields.imageurl = imageurl;
      }

      if (year) {
        updateFields.year = year;
      }

      if (make) {
        updateFields.make = make;
      }
      
      if (make) {
        updateFields.model = model;
      }
  
      if (description) {
        updateFields.description = description;
      }

      if (color) {
        updateFields.color = color;
      }
  
      if (price) {
        updateFields.price = price;
      }
  
      if (inventory) {
        updateFields.inventory = inventory;
      }

  
      const _product = await getProductById(productId);
      const _title = await getProductByTitle(title);
  
      if (!_product) {
        res.send({
          error: 'ProductDoesNotExists',
          title: 'Product does not exists',
          message: 'Product does not exist',
        });
      } else if (_title) {
        res.send({
          error: 'ProductAlreadyExists',
          title: 'Product already exists',
          message: 'Product already exists',
        });
      } else {
        const adminUpdateProduct = await updateProduct(updateFields);
        res.send(adminUpdateProduct);
      }
    } catch (error) {
      next(error);
    }
  });

  module.exports = productsRouter