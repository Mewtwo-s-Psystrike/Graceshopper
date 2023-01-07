const {
  client,
  // declare your model imports here
  // for example, User
} = require('./');

async function buildTables() {
  try {
    client.connect();
    console.log("Dropping All Tables...");
    // drop all tables, in the correct order
    await client.query(`
      DROP TABLE IF EXISTS cars;
      DROP TABLE IF EXISTS users;
      `);
    console.log("Finished dropping tables");

    console.log("Starting to build tables...");
    // create all tables, in the correct order
    await client.query(`
  CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
  );

  CREATE TABLE cars (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      description TEXT NOT NULL
  );

`);
    console.log("Finishing creating tables");
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data by leveraging your
    // Model.method() adapters to seed your db, for example:
    // const user1 = await User.createUser({ ...user info goes here... })
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
