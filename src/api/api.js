const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3200/api'


export const getAllProducts = async () => {
    try {
        const response = await fetch(`${baseURL}/products`, {
            headers:{
                "Content-Type": "application/json" ,
            }
        })

        const products = await response.json();
        console.log("fetch all products in api --->", products);
        return products
    } catch (error) {
        console.error("error fetching products")
    }
}

export const createProduct = async (jwt, user, { title, imageurl, year, make, model,odometer, description, color, price, inventory }) => {
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
                odometer,
                description,
                color,
                price,
                inventory,
            }),
        });
        const result = await response.json();
        console.log('created product in api--->', result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const updateProduct = async (jwt, {id, title, imageurl, year, make, model,odometer, description, color, price, inventory }) => {
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
                    odometer: odometer,
                    description: description,
                    color: color,
                    price: price,
                    inventory: inventory,
            })
        })
        const result = await response.json();
        console.log('error updating products in api', result);
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
     } catch (error) {
         console.error(error);
     }
 };
 
 
 export const addProductToCart = async ( {productId, qty}) => {

     try {
         const response = await fetch(`${baseURL}/cart`, {
             method: 'POST',
             body: JSON.stringify({
                 productId,
                 qty,
             }),
         });
         const result = await response.json();
         return result;
     } catch (error) {
         console.error(error);
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

 export const deleteCartProduct = async (jwt, productId) => {
    try {
        const response = await fetch(`${baseURL}/cart/${productId}`, {
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
        throw error;
    }
};
 
 export const createHeaders = token => {
     return token
         ?{
             'Content-Type':'application/json',
             'Authorization':`Bearer ${token}`,
         }
         :{
             'Content-Type':'application/json',
         };
 };
 
 export const loginUser = async (username, password) => {
    const headers = createHeaders();
    try {
        // if(!user){
        //     throw new Error ("Error logging in. Please check your username and password and try again1")
        // }
        const response = await fetch(`${baseURL}/users/login`,{
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            username: username,
            password: password
        })
      });
      console.log('response',response);

      const result = await response.json();
      console.log('login user result', result);
      if (!response.ok) {
        throw new Error("Error logging in. Please check your username and password and try again.");
      }
      return result;
    } catch(ex) {
      throw ex;
    }
  };

 export const getCurrentUser = async (token) => {
 
     const headers = createHeaders(token);
 
     try {
       const response = await fetch(`${baseURL}/users/me`, {
         headers: headers,
       });
       
       const data = await response.json();
       return data;
     } catch {
       console.error("Could not retrieve user",error);
     }
   };
 
 
 export const registerUser = async (username, password) => {
     try {
       const response = await fetch(`${baseURL}/users/register`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
             username: username,
             password: password
         }),
       });
 
       const data = await response.json();
       console.log('data in register api', data);
       return data;
     } catch (error) {
       console.error("There was an error registering the user", error);
       throw error
     }
 };