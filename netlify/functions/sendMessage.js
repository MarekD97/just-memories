const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");

module.exports.handler = async function (event, context) {
  const req = JSON.parse(event.body);

  const filePath = path.resolve(__dirname, "../../static/email-template.html");
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);

  console.log(filePath);

  const replacements = {
    name: req.name,
    email: req.email,
    message: req.message,
    date: Date.now(),
  };
  const htmlToSend = template(replacements);

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    },
  });

  let res = {
    status: "",
    error: "",
  };

  const mail = await transporter
    .sendMail({
      from: `"Just Memories" <${process.env.AUTH_USER}>`,
      to: `"Just Memories" <${process.env.AUTH_USER}>`,
      replyTo: req.email,
      subject: "Wiadomość ze strony justmemoriesphoto.pl",
      html: htmlToSend,
    })
    .then((info) => (res.status = info.accepted ? "sent" : "error"))
    .catch((error) => {
      res.status = "error";
      res.error = error;
    });

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};
