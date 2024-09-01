const dotenv = require("dotenv");
dotenv.config();

const envVariables = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
};

module.exports = envVariables;
