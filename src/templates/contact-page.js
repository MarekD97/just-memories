import React, { useState } from "react";
import { navigate } from "gatsby-link";

import Layout from "../components/Layout";
import MessageForm from "../components/MessageForm";

// eslint-disable-next-line
export const ContactPageTemplate = () => {
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const sendMessage = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    // check if container is valid

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    setStatus("sending");
    fetch("/.netlify/functions/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then(({ status, error }) => {
        setStatus(status);
        setError(error);
      });
  };

  if (status === "sent")
    return (
      <div className="container">
        <h1 style={{ fontSize: "1.5rem" }}>Wiadomość została wysłana.</h1>
        <button
          className="button button--primary"
          style={{ width: "auto" }}
          onClick={() => navigate("/")}
        >
          Powrót na stronę główną
        </button>
      </div>
    );

  if (status === "sending")
    return (
      <div className="container">
        <h1 style={{ fontSize: "1.5rem" }}>Wysyłanie wiadomości...</h1>
      </div>
    );

  if (status === "error" && error)
    return (
      <div className="container">
        <h2 style={{ margin: "0.75em auto" }}>Błąd: {error.response}</h2>
      </div>
    );

  return (
    <div className="container">
      <h2 style={{ margin: "0.75em auto", textTransform: "uppercase" }}>
        Skontaktuj się ze mną
      </h2>
      <MessageForm onSubmit={sendMessage} />
    </div>
  );
};

const ContactPage = () => (
  <Layout>
    <ContactPageTemplate />
  </Layout>
);

export default ContactPage;
