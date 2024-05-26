const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
require("./connection");

const PORT = process.env.PORT || 4003;

//Global Middlewares
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

//Routes
const contactRoute = require("./Routes/contact.js");
const eventsRoute = require("./Routes/events.js");
const galleryRoute = require("./Routes/gallery.js");
const newsletterRoute = require("./Routes/newsletter.js");
const noticeRoute = require("./Routes/notice.js");
const resultRoute = require("./Routes/result");
const formRoute = require("./Routes/form");

//Initializing Routes
app.use("/api/v1", contactRoute);
app.use("/api/v1", eventsRoute);
app.use("/api/v1", galleryRoute);
app.use("/api/v1", newsletterRoute);
app.use("/api/v1", noticeRoute);
app.use("/api/v1", resultRoute);
app.use("/api/v1", formRoute);

app.listen(PORT, () => {
  console.log(`server is started at ${PORT}`);
});
