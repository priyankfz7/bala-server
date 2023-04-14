const express = require("express");
const { pdfModal } = require("../Models/pdf.model");

const pdfRouter = express.Router();

pdfRouter.get("/all", async (req, res) => {
  try {
    let data = await pdfModal.find({});
    data.reverse();
    res.send({ msg: "request Successfull", data: data });
  } catch (err) {
    console.log(err);
    res.status(404).send({ msg: "something went wrong" });
  }
});

pdfRouter.post("/add", async (req, res) => {
  let { title, link } = req.body;
  title = title.toUpperCase();
  const date = new Date(Date.now()).toDateString();

  try {
    let pdf = new pdfModal({ title, link, date });
    await pdf.save();
    res.send({ msg: `${title} has been added successfully` });
  } catch (err) {
    console.log(err);
    res.status(404).send({ msg: "somethig went wrong" });
  }
});

pdfRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pdfModal.findByIdAndDelete(id);
    res.send({ msg: `file has been deleted` });
  } catch (err) {
    console.log(err);
    res.status(404).send({ msg: "somethig went wrong" });
  }
});
module.exports = pdfRouter;
