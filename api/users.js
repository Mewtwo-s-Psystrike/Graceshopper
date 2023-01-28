const express = require('express');
const usersRouter = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { JWT_SECRET = 'neverTell' } = process.env;
const { createUser, getUser, getUserById, getUserByUsername } = require('../db');
const { requireUser } = require('./requireUser');


usersRouter.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.send({
      name: "MissingCredentialsError",
      message: "Please suppy both a username and password"
    });
  }
  try {
    const user = await getUserByUsername(username);
    const hashedPassword = user.password
    if (user && await bcrypt.compare(password, hashedPassword)) {
      const jwtToken = jwt.sign(user, JWT_SECRET);
      res.send({ user: user, token: jwtToken, message: "You're logged in!" });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// POST /api/users/register
usersRouter.post('/register', async (req, res, next) => {
    console.log(req.body);
    const { username, password } = req.body.username;
  
    try {
      const _user = await getUserByUsername({username});
      if (_user) {
        next({
          name: 'UserExistsError',
          message: "User " + username + " is already taken.",
          name: 'UsernameExists',
        });
      } else if(password && password.length < 4 ) {
        res.send({
          error: "PasswordLengthError",
          message: "Password Too Short!",
          name: "Short Password",
        });
        } else {
        const user = await createUser({username, password});
  
        if (user) {
        const jwtToken = jwt.sign(user, JWT_SECRET);
         const response =  {
            message: "thank you for signing up",
            token: jwtToken,
            user: {
              id: user.id,
              username: user.username,
            },
          }
          res.send(response);
        }
      }
    } catch ({ name, message }) {
      next({ name, message })
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
