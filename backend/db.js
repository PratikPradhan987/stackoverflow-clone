const mongoose = require("mongoose");
require("dotenv").config();

const url = 
  // "mongodb://Pratik:pratik8250846027@cluster0-shard-00-00.rfatk.mongodb.net:27017,cluster0-shard-00-01.rfatk.mongodb.net:27017,cluster0-shard-00-02.rfatk.mongodb.net:27017/stackoverflow?ssl=true&replicaSet=atlas-i16i1b-shard-0&authSource=admin&retryWrites=true&w=majority";
  "mongodb+srv://admin:admin123456789@cluster0.pgxcj.mongodb.net/?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
