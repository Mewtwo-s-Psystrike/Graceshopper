const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET = 'neverTell' } = process.env;
const { getUserById } = require('../db/user');

router.get('/health', async (req, res) => {
  res.send({
    message: 'All is well',
  });
});

router.use(async (req, res, next) => {
  const prefix = 'Bearer ';
  const auth = req.header('Authorization');


  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    try {
      console.log("error with token", token)
      console.log("error with JWT SECRET", JWT_SECRET)
      const { id } = jwt.verify(token, JWT_SECRET);
      if (id) {
        req.user = await getUserById(id);
        next();
      }
    } catch (error) {
      next(error);
    }
  } else {
    next({
      name: 'AuthorizationHeaderError',
      message: `Authorization token must start with ${prefix}`,
    });
  }
});


const usersRouter = require('./users');
router.use('/users', usersRouter);

const productsRouter = require('./products');
router.use('/products', productsRouter);

const cartRouter = require('./cart');
router.use('/cart', cartRouter);

router.get('*', (req, res) => {
  res.status(404).send({
    message: 'Page not found!',
  });
});


module.exports = router;
