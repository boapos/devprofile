export default async function handler(req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");

  const mailData = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject: req.body.subject,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  await new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
      secure: true,
    });

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        res.status(200).json({ message: "mail sent" });
        console.log(info);
        resolve(info);
      }
    });
  });
}
