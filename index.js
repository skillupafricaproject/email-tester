const express = require("express")
const app = express()
require("dotenv/config")

const cors = require("cors");


app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const add = require("./routes/add")

app.use("/add", add)

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "grudge.m3district@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});


// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});



const PORT = process.env.PORT || 3001



app.listen(PORT, () => {
  console.log("Server is running and open " + PORT)
})