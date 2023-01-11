// module.exports = {
//   // ...require('./client'), // adds key/values from users.js
//   ...require('./user'), // adds key/values from users.js
//   ...require('./cars'), // adds key/values from activites.js
// };

// then, in your API, you'll require the appropriate model
// and use its database connectors
// ie User.getUserById(), where user.js had a module.exports
// that looked like this: module.exports = { getUserById, ... }
