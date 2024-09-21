const router = require("express").Router();
const Events = require("../controller/events");

router.post("/events", Events.postEvents);
router.get("/events", Events.getEvents);
router.delete("/events/:id", Events.deleteEvents);

module.exports = router;
