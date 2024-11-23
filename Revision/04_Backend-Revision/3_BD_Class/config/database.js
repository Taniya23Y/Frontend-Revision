// database instantiate
const mongoose = require("mongoose");

require("dotenv").config();

// created a function called dbConnect
const dbConnect = async () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB Connection successful");
    })
    .catch((error) => {
      console.error("Issue in DB connection");
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
