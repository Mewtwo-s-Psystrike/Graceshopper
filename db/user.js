const client = require("./client");
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

async function createUser({ username, password}) {
  console.log('password:', password);
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

  try {
    const { rows: [user] } = await client.query(`
    INSERT INTO users(username, password)
    VALUES ($1, $2)
    ON CONFLICT (username) DO UPDATE SET USERNAME = EXCLUDED.username
    RETURNING id, username;
    `, [username, hashedPassword]);

    console.log('user in user', user);
    delete user.password;
    return user;
  } catch (error) {
    console.log("Error creating user", error);
    throw error
  }
}

async function getUser({ username, password }) {
  if (!username || !password) {
    throw new Error('username and password are required');
  }
  try {
    console.log("Before client.query call");
    const { rows: [user] } = await client.query(`
    SELECT *
    FROM users
    WHERE username=$1;
    `, [username]);
    console.log("After client.query call");
    if (!user) {
      throw new Error('User not found')
    } 
    const hashedPassword = user.password
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (passwordsMatch) {
      delete user.password
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error getting user", error);
    throw error;
  }
}


async function getUserById(userId) {
  try {
    const { rows: [user] } = await client.query (`
    SELECT *
    FROM users
    WHERE id = $1
    `);
    if (!user) {
      throw new Error('User not found')
    } else {
      return user;
    }
  } catch(error) {
    console.log("Error with getting user by id", error);
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const { rows: [user] } = await client.query(`
    SELECT *
    FROM users
    WHERE username=$1;
    `, [username]);

    return user;
  } catch (error) {
    console.log("Error getting user by username", error);
    throw error;
  }
}


module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername
}
