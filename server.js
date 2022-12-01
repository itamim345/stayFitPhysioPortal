const express = require('express');
const app = express();
require("dotenv").config();
const configDB = require("./config/configDB");
const PORT = process.env.PORT || 5000;

// console.log(process.env.MONGO_URL);
app.listen(PORT, () => {
    console.log(`runnig server at , ${PORT}`);
})