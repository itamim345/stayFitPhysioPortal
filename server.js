//Using Dotev
require("dotenv").config();
// Importing Express
const express = require("express");
const app = express();

// Importing DataBase
require("./config/configdb").connect();
const PORT = process.env.PORT || 5000;

//Importing Schema form Model
const user = require("./Models/userModel");

//Importing bcrypt
const bcrypt = require("bcryptjs");
const { connect } = require("mongoose");

// Json Formatting user Data for sending to DB
app.use(express.json());

// Importing routes
// const userRoute = require('./routes/userRoute');

// Server Configuration
// app.use('/api/user', userRoute);


//Routes
app.post("/register", async (req, res) => {
  try {
    // // Getting data from request body
    const { name, email, password } = req.body;
    const userExist = await user.findOne({ email: email });
    if (!(name && email && password)) {
      return res.status(400).send("all Fields are required!");
    }
    
    if (userExist) {
      return res.status(200).send({
        message: "User Exists..",
        success: false,
      });
    }
    const newUser = new user ({name,email,password});
    const userData = await newUser.save();
  } catch (error) {
    return res.status(500).send({
      message: "Error Occured!",
      success: false,
      error,
    });
   }
});


// Server Listener
app.listen(PORT, () => {
  console.log(`runnig server at , ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("hello! hi");
});
