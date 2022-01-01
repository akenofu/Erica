const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      process.env.DB_CONNECTION_STRING,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then( ()=> {
        console.log("Connected To Database successfully");
    })
    .catch((err) => {
      console.log(err);
      process.exit(-1);
    });
};

module.exports = connectDB;
