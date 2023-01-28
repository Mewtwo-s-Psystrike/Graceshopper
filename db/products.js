const client = require("./client");

//database functions
async function getAllProducts() {
    try {
        const { rows: products } = await client.query(`
        SELECT *
        FROM products;
      `);

      return products;
    } catch (error) {
        console.log("ERROR IN getAllProducts ------->>>>", products);
        throw error;
    }
  }

  async function getProductsById(id) {
    try {
        const { rows: [productsById] } = await client.query(`
        SELECT *
        FROM products
        WHERE id = $1
        `, [id]);
        
      return productsById;
    } catch (error) {
        console.log("ERROR IN getProductsById", error);
        throw error;
    }
  }

  async function getProductByTitle(title) {
    try {
        const { rows: [productByTitle] } = await client.query(`
        SELECT *
        FROM products
        WHERE "title" = $1
        `, [title]);
    } catch (error) {
        console.log("ERROR IN getProductByTitle ------>>>> ERROR", error);
    }
  }
  
  async function createProduct({title, imageurl, year, make, model,odometer, description, color, price, inventory}) {
    try {
       const { rows: [product] } = await client.query(`
       
       INSERT INTO products (title, imageurl, year, make, model,odometer, description, color, price, inventory)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *;
    `, [title, imageurl, year, make, model,odometer, description, color, price, inventory]); 
    
        return product;
    } catch(error) {
        throw error
    }  
  }

  async function updateProducts({id, ...fields}) {
   
    console.log('fields >>>>', fields);

    const setString = Object.keys(fields).map((key, index) => `"${key}"=${index + 2}`).join(", ");

    console.log("setString ---->>>> ", setString);

    try {
        const { rows: [updated] } = await client.query(`
        UPDATE products
        SET ${setString}
        WHERE id = $1
        RETURNING *;
        `, [id, ...Object.values(fields)]);

        console.log('updated', updated);

        return updated
    } catch {
        console.log("ERROR IN updateProducts ---->>>> ERROR", error)
        throw error;
    }
  }

  async function deleteProduct(productId) {
    await client.query(`
    DELETE FROM products
    WHERE "productsId" = $1
    `, [productId])
   }

  module.exports = {
    getAllProducts,
    getProductsById,
    getProductByTitle,
    createProduct,
    updateProducts,
    deleteProduct
  };
/*reference activity in fitness trackr backend

Write Database functions, we need these functions from activities but modified into graceshopper instead.

async function getAllProducts(), getProductById(id), getProductByTitle(title), createProduct({ title, imageurl, year, make, model, description, color, price, inventory}),
updateProducts({id, ...fields}), deleteProduct(productId).

*/


