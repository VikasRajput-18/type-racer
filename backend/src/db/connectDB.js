const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfully connected to DB");
  } catch (error) {
    console.log(`error while connecting with database ${error}`);
  }
};

module.exports = connectToDB;
