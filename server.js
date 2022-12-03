//Using Dotev
require("dotenv").config();
// Importing Express
const express = require("express");
const app = express();

//Importing Cors
var cors = require("cors");

// Importing DataBase
require("./config/configdb").connect();
const PORT = process.env.PORT || 5000;


//Importing bcrypt
const bcrypt = require("bcryptjs");
const { connect } = require("mongoose");

// Json Formatting user Data for sending to DB
app.use(express.json());

//cors
app.use(cors());


// Importing routes
const userRoute = require('./routes/userRoute');

//Calling Router (here for register)
app.use('/api/user', userRoute);



// Server Listener
app.listen(PORT, () => {
  console.log(`runnig server at , ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("hello! hi");
});
