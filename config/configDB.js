const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;
connection.on("connected", () => {
    console.log("mongoDB connected successfully!");
})
connection.on("Error", (err)=> {
    console.log("Error Occured in mongoDB", err);
})

module.exports = mongoose;