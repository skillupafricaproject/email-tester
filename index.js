const express = require("express")
const app = express()
const nodemailer = require('nodemailer');
require("dotenv/config")

const cors = require("cors");


app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const add = require("./routes/add")
const substrate = require("./routes/substrate")

app.use("/add", add)
app.use("/substrate", substrate)



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


// hahahahahahahahahahahahahahahahah
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// transporter.sendMail({
//   from: '"Node tes👻" <foo@example.com>', // sender address
//   to: "xyz@gmail.com", // list of receivers
//   subject: "we are good to go", // Subject line
//   // text: "Trying from the server with env keys", // plain text body
//   html: "<b>Hello from Miebaka</b>", // html body
// }).then(info => {
//   console.log(info.response);
//   console.log(info.messageId);
// })

const PORT = process.env.PORT || 3001



app.listen(PORT, () => {
  console.log("Server is running and open " + PORT)
})