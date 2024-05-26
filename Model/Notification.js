const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema({
  notification: {
    type: Boolean,
    default: false,
  },
});

module.exports = new mongoose.model("Notification", notificationSchema);
