// Importing Express
const express = require('express');
const app = express();

require("dotenv").config();

// Importing DataBase
const configDB = require("./config/configDB");
const PORT = process.env.PORT || 5000;

// Json Formatting user Data for sending to DB
app.use(express.json());

// Importing routes
const userRoute = require('./routes/userRoute');

// Server Configuration
app.use('/user', userRoute);

// Server Listener
app.listen(PORT, () => {
    console.log(`runnig server at , ${PORT}`);
})