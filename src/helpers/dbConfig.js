const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/index");

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI).then(() => {
      console.log("Connected to the database!");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
