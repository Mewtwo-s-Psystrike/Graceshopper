const {
  client,
  // declare your model imports here
  // for example, User
} = require('./');

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order

    // build tables in correct order
  } catch (error) {
    throw error;
  }
}

async function createInitialUsers() {
  console.log("Creating users...")
  try {
    const usersToCreate = [
      { username: "andy", password: "andy1234", isAdmin: true },
      { username: "marcus", password: "marcus1234", isAdmin: true },
      { username: "jaycee", password: "jaycee1234", isAdmin: true },
      { username: "nick", password: "nick1234", isAdmin: true },
    ]
    const users = await Promise.all(usersToCreate.map(createUser))

    console.log("Users created:")
    console.log(users)
    console.log("Finished creating users!")
  } catch (error) {
    console.error("Error creating users!")
    throw error
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
