const express = require("express");
const router = express.Router();
const Contact = require("../Controller/contact");

router.post("/contact", Contact.postContact);
router.get("/contact", Contact.getContact);
router.get("/contact/:id", Contact.getSingleContact);
router.delete("/contact/:id", Contact.deleteContact);

module.exports = router;
