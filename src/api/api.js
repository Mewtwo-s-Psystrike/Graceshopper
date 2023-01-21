const baseURL = 'http://localhost:3200/graceshopper'

export const createProduct = async (jwt, user, { title, imageurl, year, make, model, description, color, price, inventory }) => {
    try {
        const response = await fetch(`${baseURL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                user,
                title,
                imageurl,
                year,
                make,
                model,
                description,
                color,
                price,
                inventory,
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const updateProduct = async (jwt, {id, title, imageurl, year, make, model, description, color, price, inventory }) => {
    try {
            const response =  await fetch(`${baseURL}/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify({
                    title: title,
                    imageurl: imageurl,
                    year: year,
                    make: make,
                    model: model,
                    description: description,
                    color: color,
                    price: price,
                    inventory: inventory,
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};


export const deleteProduct = async (jwt, productId) => {
    try {
        const response = await fetch(`${baseURL}/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};


export const getCart = async (jwt) => {
    console.log(`${baseURL}/cart`)
     try {
         const response = await fetch(`${baseURL}/cart`, {
             headers: {
                 'Content-type': 'application/json',
                 'Authorization': `Bearer ${jwt}`
             }
     });   
     const results = await response.json();
     return results;
     } catch (err) {
         console.error(err);
     }
 };
 
 
 export const addProductToCart = async (jwt, {productId, qty}) => {
     const headers = createHeaders(jwt);
     try {
         const response = await fetch(`${baseURL}/cart`, {
             method: 'POST',
             headers,
             body: JSON.stringify({
                 productId,
                 qty,
             }),
         });
         const result = await response.json();
         return result;
     } catch (err) {
         console.error(err);
     }
 };
 
 export const updateCartProduct = async (jwt, id, qty) => {
     try {
             const response =  await fetch(`${baseURL}/cart/${id}`, {
             method: 'PATCH',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${jwt}`
             },
             body: JSON.stringify({
                     qty: qty
             })
         })
         const result = await response.json();
         return result;
     } catch (ex) {
         console.log('error updating cart product')
     }
 };