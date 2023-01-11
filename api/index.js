const apiRouter = require('express').Router();

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

apiRouter.get('/health', (req, res, next) => {
  res.send({
    healthy: true,
  });
});

// // ROUTER: /api/users
// const usersRouter = require('./users');
// router.use('/users', usersRouter);

// // ROUTER: /api/cars
// const carsRouter = require('./cars');
// router.use('/cars', carsRouter);

// router.get('*', function(req, res){
//   res.status(404);
//   res.send({
//       message: "404 page not found"
//   })
// })

module.exports = apiRouter;
