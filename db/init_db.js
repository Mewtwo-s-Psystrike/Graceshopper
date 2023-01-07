const {
  client,
  // declare your model imports here
  // for example, User
} = require('./');

async function buildTables() {
  try {
    client.connect();
isAdmin BOOLEAN DEFAULT false
    // drop tables in correct order

    // build tables in correct order
  } catch (error) {
    throw error;
  }
}

//title, year, make, model, description, color, price, inventory

async function createInitialProducts() {
  try {
      console.log('Creating new products.......');
      const productsToCreate = [
        {
          title: "2023 Tesla Model S",
          year: "2023",
          make: "Tesla",
          model: "Model S Plaid",
          description: "Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors. With a 0-60mph time of 1.99s, this car will really throw your head back into the seat! At 1,020hp, this makes it one of the fastests cars in production. Even with all that power, you can still enjoy a nice 396miles of range.",
          color: "Blue",
          price: "$127,590",
          inventory: "Available",
      }]
  } catch (error) {
    throw error;
  }
}



buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
