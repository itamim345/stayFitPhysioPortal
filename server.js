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

//for deploying purpose
const path = require('path');

// Json Formatting user Data for sending to DB
app.use(express.json());

//cors
app.use(cors());


// Importing user routes
const userRoute = require('./routes/userRoute');

//Importing Admin routes
const adminRoute = require("./routes/adminRoute")

//Importing therapist routes
const therapistRoute = require("./routes/therapistRoute")

//Calling Router (here for user)
app.use('/api/user', userRoute);

//Calling Router, (here for admin)
app.use('/api/admin', adminRoute)

//Calling Router, (here for doctor)
app.use("/api/therapist", therapistRoute);


// Accessing static file for deploying purpose
app.use(express.static(path.join(__dirname, './stayfitphysioportalclient/build')))

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./stayfitphysioportalclient/build/index.html"))
})


// Server Listener
app.listen(PORT, () => {
  console.log(`runnig server at , ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("hello! hi");
});
