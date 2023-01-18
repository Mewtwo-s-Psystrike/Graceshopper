const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET  = process.env.JWT_SECRET;
const { getUserById } = require('../db/user');

router.use(async (req, res, next) => {
  const prefix = 'Bearer ';
  const auth = req.header('Authorization');


  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    try {
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

router.get('/health', async (req, res) => {
  res.send({
    message: 'All is well',
  });
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

router.use((error, req, res, next) => {
  res.send({
    message: error,
  });
});


module.exports = router;
