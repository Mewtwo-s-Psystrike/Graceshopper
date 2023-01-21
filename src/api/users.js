import React, { useState, useEffect } from 'react';
const baseURL = 'http://localhost:3200/graceshopper'

export const createHeaders = jwt => {
    return jwt
        ?{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${jwt}`,
        }
        :{
            'Content-Type':'application/json',
        };
};

export const getCurrentUser = async () => {

    const headers = createHeaders();

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


export const registerUser = async (username, password, action) => {
    try {
      const response = await fetch(`${baseURL}/users/${action}`, {
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
      return data;
    } catch (error) {
      console.error("There was an error registering the user", error);
    }
  };
