const Popup = require("../Model/popup.js");

module.exports.postPopup = async (req, res, next) => {
  const newPopup = new Popup(req.body);
  try {
    const insertPopup = await newPopup.save();
    res.status(201).json(insertPopup);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};
module.exports.getPopup = async (req, res, next) => {
  try {
    const getPopup = await Popup.find();
    res.json(getPopup);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.daletePopup = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Popup.findByIdAndDelete({ _id: id });
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
