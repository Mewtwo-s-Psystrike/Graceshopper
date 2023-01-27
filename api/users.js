const express = require('express');
const usersRouter = express.Router();
const jwt = require('jsonwebtoken');
const { createUser, getUser, getUserById } = require('../db');
const { requireUser } = require('./requireUser');


usersRouter.post('/login', async (req, res, next) => {
    const {username, password} = req.body

    if (!username || !password) {
        next({
          name: "MissingCredentialsError",
          message: "Please supply both email and password"
        });
      }
      try {
        const user = await getUser(username);
        console.log("user:", user)
    
        if (user.password == password) {
          const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
          res.send({ message: "you're logged in!", token: token });
        } else {
          next({ 
            name: 'IncorrectCredentialsError', 
            message: 'email or password is incorrect'
          });
        }
      } catch(error) {
        console.log("Error in the login route");
        throw error;
      }
    });

// POST /api/users/register
usersRouter.post('/register', async (req, res, next) => {
    const { username, password} = req.body;
  
    try {
      const _user = await getUser({username});
      console.log("_user -----", _user);

      if (_user) {
        next({
          name: 'UserExistsError',
          message: 'A user with that username already exists'
        });
      }
    
      const user = await createUser({
        username,
        password,
      });

      console.log('username -----', user.username);
      console.log('user password -----', user.password);

      const token = jwt.sign({ 
        id: user.id, 
        username
      }, process.env.JWT_SECRET, {
        expiresIn: '1w'
      });
  
      res.send({ 
        message: "Thank you for signing up!",
        token 
      });
    } catch (error) {
      next(error)
    } 
});

// GET /api/users/me
usersRouter.get('/me', requireUser, async (req, res, next) => {
    const prefix = 'Bearer '
    const auth = req.headers['Authorization'];

    if (!auth) {
        next(new Error('Authorization header missing'));
      }

    if (auth.startsWith(prefix)) {
        const token = auth.slice(prefix.length);

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        const me = await getUserById(id);
        res.send(me)
      } catch (error) {
        console.log("Error in the user auth route")
        next(error);
      }
    }
});

  

module.exports = usersRouter;
