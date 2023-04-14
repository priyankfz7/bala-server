const { default: mongoose } = require("mongoose");

const pdfSchema = mongoose.Schema({
  title: String,
  link: String,
  date: String,
});

const pdfModal = mongoose.model("pdf", pdfSchema);

module.exports = { pdfModal };
