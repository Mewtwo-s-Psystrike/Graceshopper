const client = require('./client');
const models = require('./models');
const user = require('./user');

module.exports = {
  client,
  user,
  ...models,
};
