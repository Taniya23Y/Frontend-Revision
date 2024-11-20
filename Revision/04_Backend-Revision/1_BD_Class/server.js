// server Instantiate
const express = require("express");
const app = express();

// used to parse req.body in express -> PUT & POST
const bodyParser = require("body-parser");

// specifically parse JSON data & add it to the request.body Object
app.use(bodyParser.json());

// active the server on 3000 port
// app.listen(3000, () => {
//   console.log("Server stared at port no. 3000");
// });

// another route
app.listen(5000, (req, res) => {
  console.log("server is running on now 5000");
});

// Routes
// get res
app.get("/", (request, response) => {
  response.send("Hello Backend Class 1");
});

// post res
app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car submitted successfully");
});
