const Notice = require("../Model/notice.js");

module.exports.postNotice = async (req, res) => {
  const newNotice = new Notice(req.body);
  try {
    const insertNotice = await newNotice.save();
    res.status(201).json(insertNotice);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
};
module.exports.getNotice = async (req, res, next) => {
  try {
    const getNotice = await Notice.find();
    res.json(getNotice);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.deleteNotice = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteNotice = await Notice.findByIdAndDelete({ _id });
    res.json(deleteNotice);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
