const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Newsletter = require("../Model/newsletter");

module.exports.postNewsletter = async (req, res, next) => {
  const newNewsletter = new Newsletter(req.body);

  try {
    const insertNewsletter = await newNewsletter.save();

    res.status(201).json(insertNewsletter);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send("Email Already Exist");
    } else {
      res.status(400).json(error.message);
      console.log(error);
    }
  }
};
module.exports.getNewsletter = async (req, res, next) => {
  try {
    const getNewsletter = await Newsletter.find();
    res.json(getNewsletter);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.deleteNewsletter = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteNewsletter = await Newsletter.findByIdAndDelete({ _id });
    res.json(deleteNewsletter);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
