const router = require("express").Router();
const newsletter = require("../Controller/newsletter");
const NotificationModel = require("../Model/Notification");

router.post("/newsletter", newsletter.postNewsletter);
router.get("/newsletter", newsletter.getNewsletter);
router.delete("/newsletter/:id", newsletter.deleteNewsletter);

router.get("/notification", async (req, res) => {
  const response = await NotificationModel.find({});
  res.json(response);
});

router.put("/notification/:request", async (req, res) => {
  const { request } = req.params;
  const resposne = await NotificationModel.findByIdAndUpdate(
    { _id: "627f3e6112e6ebbbcb5dbe3e" },
    { notification: request },
    { new: true }
  );
  res.json(resposne);
});

module.exports = router;
