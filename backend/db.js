const mongoose = require("mongoose");
require("dotenv").config();


module.exports.connect = () => {
  mongoose
    .connect(process.env.url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
