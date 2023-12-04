const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const Contact = require("../Model/contactUs");
const ErrorHandler = require("../utils/errorHandler");

module.exports.postContact = async (req, res, next) => {
  const contact = await Contact.create(req.body);
  res.status(201).json({
    success: true,
    contact,
  });
};
module.exports.getContact = catchAsyncErrors(async (req, res, next) => {
  const getContact = await Contact.find().sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    count: getContact.length,
    getContact,
  });
});
module.exports.getSingleContact = catchAsyncErrors(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return next(new ErrorHandler("Contact not found", 404));
  }
  res.status(200).json({
    success: true,
    contact,
  });
});

module.exports.deleteContact = catchAsyncErrors(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return next(new ErrorHandler("Contact not found", 404));
  }
  await contact.remove();

  res.status(200).json({
    success: true,
    message: "Contact is deleted",
  });
});
