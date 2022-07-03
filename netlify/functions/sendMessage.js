const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");

module.exports.handler = async function (event, context) {
  const req = JSON.parse(event.body);

  const template = `<!DOCTYPE html>
  <html lang="pl">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email template</title>
      <style>
          @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");
          html,
          body,
          form,
          fieldset,
          table,
          tr,
          td,
          img {
              margin: 0;
              padding: 0;
              font-family: "Lato", sans-serif;
          }
          body {
              font-size: 1em;
          }
          .logo {
              width: 130px;
              height: 130px;
          }
          .row {
              padding: 2em 1.5em;
          }
          .content {
              background-color: #f4f4f4;
              font-size: 1.25rem;
          }
          .email {
              color: #000000;
          }
      </style>
  </head>
  <body>
      <div>
          <div class="row">
              <h1>Wiadomość od: ${req.name}</h1>
              <a class="email" href="mailto:${req.email}">Odpowiedz na adres: ${req.email}</a>
          </div>
          <div class="row content">
              <p>${req.message}</p>
          </div>
      </div>
  </body>
  </html>`;

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
      html: template,
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
