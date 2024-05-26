const Events = require("../Model/events.js");

module.exports.postEvents = async (req, res, next) => {
  const newEvents = new Events(req.body);
  try {
    const insertEvents = await newEvents.save();
    res.status(201).json(insertEvents);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};
module.exports.getEvents = async (req, res, next) => {
  try {
    const getEvents = await Events.find().sort({ createdAt: -1 });
    res.json(getEvents);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.deleteEvents = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEvents = await Events.findByIdAndDelete({ _id: id });
    res.json(deleteEvents);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
