const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://amanmongodb123:amanmongodb123@cluster0.raequ.mongodb.net/NihareekaCollege?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      console.log("connected to database 😂");
    } else {
      console.log(err);
    }
  }
);
