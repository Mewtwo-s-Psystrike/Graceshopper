const client = require('./client');
const {createUser, createProduct} = require('./index')

///drop tables
async function dropTables(){
  try {
    console.log('beginning to drop tables');

    await client.query(`
    DROP TABLE IF EXISTS cart_products;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users;
    `);

    console.log('finished dropping tables');
  } catch (error) {
    console.error(error)
  }
}

async function createTables() {
  try {
    console.log('starting to create tables');
    await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "isAdmin" BOOLEAN DEFAULT false
    );`)

    await client.query(`
    CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        imageurl TEXT NOT NULL,
        year TEXT NOT NULL,
        make TEXT NOT NULL,
        model TEXT NOT NULL,
        odometer TEXT NOT NULL,
        description TEXT NOT NULL,
        color TEXT NOT NULL,
        price TEXT NOT NULL,
        inventory TEXT NOT NULL
    );`)

    await client.query(`
    CREATE TABLE cart_products(
      id SERIAL PRIMARY KEY,
      "cartId" INTEGER REFERENCES users(id),
      "productId" INTEGER REFERENCES products(id),
      qty INTEGER
    );`);
  
    console.log("Finishing creating tables");
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
    console.log('initial users', users);

    console.log("Finished creating users!")
  } catch (error) {
    console.error("Error creating users!")
    throw error
  }
}


async function createInitialProducts() {

  try {
      console.log('Creating new products.......');
      const productsToCreate = [
        {
          title: "2023 Tesla Model S Plaid",
          imageurl: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/11/0x0-ModelS_03.jpg",
          year: "2023",
          make: "Tesla",
          model: "Model S Plaid",
          odometer: "3,156",
          description: "Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors. With a 0-60mph time of 1.99s, this car will really throw your head back into the seat! At 1,020hp, this makes it one of the fastests cars in production. Even with all that power, you can still enjoy a nice 396miles of range.",
          color: "Blue",
          price: "$114,990",
          inventory: "Available",
      },
        {
          title: "2023 Tesla Model Y Long Range",
          imageurl: "https://cdn.motor1.com/images/mgl/pPoyY/s1/tesla-model-y-white-driving.jpg",
          year: "2023",
          make: "Tesla",
          model: "Model Y Long-Range",
          odometer: "1,321",
          description: "Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick.",
          color: "White",
          price: "$53,490",
          inventory: "Available",
        },
        {
          title: "2023 Tesla Model Y Performance",
          imageurl: "https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-Dual-Motor-Performance-AWD-front-three-quarter-6.jpg",
          year: "2023",
          make: "Tesla",
          model: "Model Y Performance",
          odometer: "2,152",
          description: "With all the features of the Model Y Long-Range, the performance version has an increased top speed from 135mph to 155mph, 21in wheels, performance brakes, lowered suspension, and alumium alloy pedals. The performance version can go from 0-60mph at an astonishing rate of 3.5seconds, all while still getting 303miles of range on a full charge!",
          color: "Gray",
          price: "$56,990",
          inventory: "Available",
        },
        {
          title: "2023 Tesla Model X Plaid",
          imageurl: "https://uncrate.com/p/2022/04/omaze-tesla-model-x-plaid-1.jpg",
          year: "2023",
          make: "Tesla",
          model: "Model X Plaid",
          odometer: "1,562",
          description: "With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Updated battery architecture enables both Long Range and Plaid configurations to complete back-to-back track runs without performance degradation. With an estimated range of 348 miles on the Standard Model X, you can enjoy driving long distances while still having extra cargo space.",
          color: "Grey",
          price: "$109,990",
          inventory: "Available",
        },
        {
          title: "2023 Tesla Model 3 performance",
          imageurl: "https://ev-database.org/img/auto/Tesla_Model_3_2021/Tesla_Model_3_2021-01.jpg",
          year: "2023",
          make: "Tesla",
          model: "Model 3 Performance",
          odometer: "2,562",
          description: "Model 3 Performance comes with dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds while still being able to get 315miles out of a single charge.",
          color: "Red",
          price: "$53,990",
          inventory: "Available",
        },
        {
          title: "2023 Tesla Model 3 Rear-Wheel Drive",
          imageurl: "https://hips.hearstapps.com/hmg-prod/images/2022-tesla-model-3-mmp-1-1640025520.jpg",
          year: "2023",
          make: "Tesla",
          model: "Model 3 Rear-Wheel Drive",
          odometer: "4,511",
          description: "The Model 3 Rear-Wheel Drive is the lowest priced Tesla that you can get while still being able to get 272miles of range on a single charge and with a 0-60mph of 5.8sec. The Model 3 Rear-Wheel Drive is a great budget car for someone that wants to drive an electric vehicle without needing the premium options.",
          color: "Blue",
          price: "$43,990",
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


async function rebuildDB() {
    await client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialProducts();
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());

module.exports = {
  dropTables,
  createTables,
};
