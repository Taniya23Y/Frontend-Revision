// express Instantiate
const express = require("express");
const app = express();

// load | import config file from env
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware to parse json body
app.use(express.json());

// routes
const blog = require("./routes/blog");

// mount posts API routes
app.use("/api/v1", blog);

// server start
app.listen(PORT, () => {
  console.log(`App is started at Port no ${PORT}`);
});

// db connect
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
  res.send(`<h1>This is HOMEPAGE buddy</h1>`);
});
