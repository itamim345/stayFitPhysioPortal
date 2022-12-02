require("dotenv").config();
const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://db1:b3aRQbscn84lRSu3@cluster0.njpsmqa.mongodb.net/StyayFitPhysioPortal";
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
