const ResultModel = require("../Model/resultModel");

const router = require("express").Router();

router.post("/result", async (req, res) => {
  const response = await ResultModel.create(req.body);
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/result", async (req, res) => {
  const response = await ResultModel.find({}).sort({ createdAt: -1 });
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});
router.delete("/result/:id", async (req, res) => {
  const { id } = req.params;
  const response = await ResultModel.findByIdAndDelete({ _id: id });
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
