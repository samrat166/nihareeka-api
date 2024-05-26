const mongoose = require("mongoose");
const noticeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "Please enter title"],
    trim: true,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Codes", noticeSchema);
