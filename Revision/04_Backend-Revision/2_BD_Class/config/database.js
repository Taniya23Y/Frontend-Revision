const mongoose = require("mongoose");

//The line require("dotenv").config(); is used in Node.js applications to load environment
// variables from a .env file into the process.env object.
// This is helpful for managing sensitive or configurable values like API keys,
// database connection strings, or other settings outside of your source code.
require("dotenv").config();

// created a function called dbConnect
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB Connection successful");
    })
    .catch((error) => {
      console.log("Issue in DB connection");
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
