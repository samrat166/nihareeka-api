const Form = require("../Model/Form");
const nodemailer = require("nodemailer");

const router = require("express").Router();

function sendMail(email, message) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gautamrajat185@gmail.com",
      pass: "1462962708",
    },
  });

  var mailOptions = {
    from: "gautamrajat185@gmail.com",
    to: `${email}`,
    subject: "Mail From Nihareeka College",
    text: `${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
router.post("/form", async (req, res) => {
  const response = await Form.create(req.body);
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/form", async (req, res) => {
  const response = await Form.find({}).sort({ createdAt: -1 });
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/form/:id", async (req, res) => {
  const { id } = req.params;
  const response = await Form.findById({ _id: id });
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.put("/form/update/:id/:state", async (req, res) => {
  const { id } = req.params;
  const { state } = req.params;
  const response = await Form.findByIdAndUpdate(
    { _id: id },
    { acceptence: state },
    { new: true }
  );
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.delete("/form/delete/:id/", async (req, res) => {
  const { id } = req.params;

  const response = await Form.findByIdAndRemove({ _id: id });
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/mail/accept/:email/:message", async (req, res) => {
  const { email } = req.params;
  const { message } = req.params;
  try {
    sendMail(email, message);
    res.json("Email Sent Successfully");
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/mail/reject/:email/:message", async (req, res) => {
  const { email } = req.params;
  const { message } = req.params;
  try {
    sendMail(email, message);
    res.json("Email Sent Successfully");
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
