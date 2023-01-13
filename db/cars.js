const client = require("./client");

// database functions
async function getAllCars() {
  try {
    const { rows: cars } = await client.query(`
      SELECT * 
      FROM cars;
    `);

    console.log('cars rows ------>>>>', cars);
    return cars;
  } catch (error) {
    console.log("error in getAllActivities -->>", error);
    throw error;
  }
}





module.exports = {
    getAllCars,
    getCarsById,
    getCarsByName,
    createCars,
    updateCars,
  };
  