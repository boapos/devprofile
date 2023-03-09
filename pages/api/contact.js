export default function handler(req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");

  const mailData = {
    from: process.env.email,
    to: process.env.email,
    subject: req.body.subject,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  });

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).json({ message: "mail sent" });
}
