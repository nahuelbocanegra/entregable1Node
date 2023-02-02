const nodemailer = require("nodemailer");
require("dotenv").config();

//creamos nuestro transportador

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: "nahuboca7@gmail.com",
    pass: process.env.G_PASSWORD,
  },
});
module.exports = transporter;
