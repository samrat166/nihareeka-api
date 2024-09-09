const Faculty = require("../Model/facultyMember.js");

module.exports.postFaculty = async (req, res, next) => {
  const newFaculty = new Faculty(req.body);
  try {
    const insertFaculty = await newFaculty.save();
    res.status(201).json(insertFaculty);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};
module.exports.getFaculty = async (req, res, next) => {
  try {
    const getFaculty = await Faculty.find();
    res.json(getFaculty);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.daleteFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Faculty.findByIdAndDelete({ _id: id });
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
