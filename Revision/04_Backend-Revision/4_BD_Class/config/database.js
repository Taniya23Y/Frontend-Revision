const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connection successful");
    })
    .catch((error) => {
      console.error("Issue in DB connection");
      console.log(error.message);
      process.exit(1); // exit with error
    });
};

module.exports = dbConnect;
