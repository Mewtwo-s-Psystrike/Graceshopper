const {
  client,
  // declare your model imports here
  // for example, User
} = require('./');

async function buildTables() {
  try {
    await client.query(`

    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );
  
    CREATE TABLE cars (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        make VARCHAR(255) UNIQUE NOT NULL,
        model VARCHAR(255) UNIQUE NOT NULL,
        year TEXT NOT NULL,
        color TEXT NOT NULL,
        price TEXT NOT NULL,
        inventory TEXT NOT NULL,
        description TEXT NOT NULL
    );
    `)
  
    console.log("Finishing creating tables");
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
          imageurl: "https://cdn.motor1.com/images/mgl/VR6Al/s1/4x3/tesla-model-s-plaid-blue.webp",
          year: "2023",
          make: "Tesla",
          model: "Model S Plaid",
          description: "Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors. With a 0-60mph time of 1.99s, this car will really throw your head back into the seat! At 1,020hp, this makes it one of the fastests cars in production. Even with all that power, you can still enjoy a nice 396miles of range.",
          color: "Blue",
          price: "$127,590",
          inventory: "Available",
      },
      {
          title: "2023 Tesla Model Y",
          imageurl: "https://cdn.motor1.com/images/mgl/pPoyY/s1/tesla-model-y-white-driving.jpg",
          year: "2023",
          make: "Tesla",
          model: "Model Y Long-Range",
          description: "Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick.",
          color: "White",
          price: "$58,190",
          inventory: "Available",
    },
      {
          title: "2023 Tesla Model Y",
          imageurl: "https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-Dual-Motor-Performance-AWD-front-three-quarter-6.jpg",
          year: "2023",
          make: "Tesla",
          model: "Model Y Performance",
          description: "With all the features of the Model Y Long-Range, the performance version has an increased top speed from 135mph to 155mph, 21in wheels, performance brakes, lowered suspension, and alumium alloy pedals. The performance version can go from 0-60mph at an astonishing rate of 3.5seconds, all while still getting 303miles of range on a full charge!",
          color: "Gray",
          price: "$62,190",
          inventory: "Available",
    },
  ]

   const products = await Promise.all (
    productsToCreate.map(product => createProduct(product))
  );
  console.log("Products that were created:", products);
  console.log('Finished making products');
  } catch (error) {
    console.error(error);
    throw error;
  }
}



buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
