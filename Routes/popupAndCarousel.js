const router = require("express").Router();
const popup = require("../Controller/popup");

router.post("/popup-carousel", popup.postPopup);
router.get("/popup-carousel", popup.getPopup);
router.delete("/popup-carousel/:id", popup.daletePopup);

module.exports = router;
