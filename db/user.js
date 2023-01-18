const client = require("./client");
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

async function createUser({ username, password,isAdmin }) {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

  try {
    const { rows: [user] } = await client.query(`
    INSERT INTO users(username, password,"isAdmin")
    VALUES ($1, $2, $3)
    ON CONFLICT (username) DO NOTHING
    RETURNING *;
    `, [username, hashedPassword, isAdmin]);

    delete user.password;
    return user;
  } catch (error) {
    console.log("Error creating user");
  }
}

async function getUser({ username, password }) {
  if (!username || !password) return
  try {
    const { rows: [user] } = await client.query(`
    SELECT username
    FROM users
    WHERE username=$1;
    `, [username]);
    const hashedPassword = user.password
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (passwordsMatch) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error getting user");
  }
}

async function getUserById(userId) {
  try {
    const { rows: [user] } = await client.query (`
    SELECT username
    FROM users
    WHERE id = ${userId}
    `);
    if (!user) {
      return null
    } else {
      return user;
    }
  } catch(error) {
    console.log("Error with getting user by id", error);
    throw error;
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
}
