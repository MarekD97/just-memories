import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

// eslint-disable-next-line
export const ContactPageTemplate = () => {
  const [state, setState] = React.useState({ isValidated: false });

  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };
  return (
    <div className="contact">
      <h1 className="contact__header">Skontaktuj się ze mną</h1>
      <form
        className="contact__form"
        method="post"
        action="/kontakt/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" onChange={handleChange} />
        <input
          type="text"
          name="name"
          className="contact__input"
          id="form_name"
          placeholder="Imię i nazwisko"
        />
        <input
          type="tel"
          name="phone"
          className="contact__input"
          id="form_phone"
          placeholder="Telefon"
        />
        <input
          type="email"
          name="email"
          className="contact__input"
          id="form_email"
          placeholder="Email"
        />
        <textarea
          type="text"
          name="message"
          className="contact__input contact__textarea"
          id="form_message"
          placeholder="Wiadomość"
          rows={4}
        />
        <input
          type="submit"
          className="button button--primary contact__submit"
          value="Wyślij wiadomość"
        />
      </form>
    </div>
  );
};

const ContactPage = () => (
  <Layout>
    <ContactPageTemplate />
  </Layout>
);

export default ContactPage;
