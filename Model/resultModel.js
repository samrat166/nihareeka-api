const { Schema, model } = require("mongoose");

const resultSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = new model("ResultModel", resultSchema);
