const Gallery = require("../Model/gallery.js");

module.exports.postGallery = async (req, res, next) => {
  const newGallery = new Gallery(req.body);
  try {
    const insertGallery = await newGallery.save();
    res.status(201).json(insertGallery);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};
module.exports.getGallery = async (req, res, next) => {
  try {
    const getGallery = await Gallery.find();
    res.json(getGallery);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Gallery.findByIdAndDelete({ _id: id });
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.getByFaculty = async (req, res) => {
  const { faculty } = req.params;
  try {
    const response = await Gallery.find({ faculty });
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};
