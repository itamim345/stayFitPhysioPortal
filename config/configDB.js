require("dotenv").config();
const mongoose = require("mongoose");
const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost:27017/StyayFitPhysioPortal";
exports.connect = () => {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("mongoDB connected successfully!"))
    .catch((error) => {
      console.log("Error Occured in mongoDB", error);
      process.exit(1);
    });
};

// const connection = mongoose.connection;
// connection.on("connected", () => {
//     console.log("mongoDB connected successfully!");
// })
// connection.on("Error", (err)=> {
//     console.log("Error Occured in mongoDB", err);
// })
