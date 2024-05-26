const router = require("express").Router();
const Events = require("../Controller/events");

router.post("/events", Events.postEvents);
router.get("/events", Events.getEvents);
router.delete("/events/:id", Events.deleteEvents);

module.exports = router;
