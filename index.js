const express = require("express");
const nodemailer = require("nodemailer");
const mailToSir = require("./mailToSir.js");
const pdfRouter = require("./Routes/pdf.routes.js");
const { connection } = require("./Config/db.js");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/pdf", pdfRouter);

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "priyank764fz7@gmail.com",
    pass: process.env.key,
  },
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/mail", (req, res) => {
  const { name, phone, course, classname, school, location } = req.body;
  console.log(req.body);
  let delForSir = {
    from: "priyank764fz7@gmail.com",
    to: "Gaganjaggica1@gmail.com",
    subject: "New Student Reached Out To You!!!",
    html: mailToSir({
      name,
      phone,
      course,
      school,
      classname,
      location,
    }),
  };
  mailTransporter.sendMail(delForSir, (err) => {
    if (err) {
      console.log(err);
      return res.send({ msg: "something went wrong" });
    } else {
      console.log("email has sent to sir");
      res.send({ msg: "Thank you for filling out the form" });
    }
  });
});

app.listen(8080, async () => {
  try {
    connection;
    console.log("connected to db");
  } catch (e) {
    console.log(e);
  }
  console.log("Server is running at http://localhost:8080");
});
