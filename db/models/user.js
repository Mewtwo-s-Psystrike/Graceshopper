// grab our db client connection to use with our adapters
const client = require('../client');
const client = require("./client");
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

module.exports = {
  // add your database adapter fns here
  getAllUsers,
};
async function createUser({ username, password }) {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

  try {
    const { rows: [user] } = await client.query(`
    INSERT INTO users(username, password)
    VALUES ($1, $2)
    ON CONFLICT (username) DO NOTHING
    RETURNING *;
    `, [username, hashedPassword]);

    delete user.password;
    return user;
  } catch (error) {
    console.log("Error creating user");
  }
}

async function getUser({ username, password }) {
  if (!username || !password) return
  try {
    const user = await getUserByUsername(username);
    const hashedPassword = user.password
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (passwordsMatch) {
      delete user.password;
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
}

async function getAllUsers() {
  /* this adapter should fetch a list of users from your db */
async function getUserById(userId) {
  try {
    const { rows: [user] } = await client.query (`
    SELECT *
    FROM users
    WHERE id = ${userId}
    `);
    if (!user) {
      return null
    } else {
      delete user.password;
      return user;
    }
  } catch(error) {
    console.log("Error with getting user by id");
  }
}
}

async function getUserByUsername(userName) {
  try {
    const { rows: [user] } = await client.query(`
    SELECT *
    FROM users
    WHERE username=$1;
    `, [userName]);

    return user;
  } catch (error) {
    console.log("Error getting user by username");
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}