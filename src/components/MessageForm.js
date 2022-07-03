import React from "react";

const MessageForm = ({ onSubmit }) => {
  const contactSubmit = (event) => {
    event.preventDefault();
    const fields = event.target.elements;
    const isValid = validateFields(fields);
    if (isValid) onSubmit(fields);
  };

  const validateFields = (fields) => {
    const { name, email, message } = fields;
    const nameValid = name.checkValidity();
    const emailValid = email.checkValidity();
    const messageValid = message.checkValidity();
    return nameValid && emailValid && messageValid;
  };

  return (
    <form className="form" onSubmit={contactSubmit}>
      <div className="form__row">
        <input
          type="text"
          name="name"
          className="form__input"
          id="formName"
          placeholder="Imię i nazwisko"
          minLength={6}
          required
        />
        <input
          type="email"
          name="email"
          className="form__input"
          id="form_email"
          placeholder="Email"
          required
        />
      </div>
      <textarea
        type="text"
        name="message"
        className="form__textarea"
        id="form_message"
        placeholder="Wiadomość"
        rows={4}
        minLength={10}
        required
      />
      <button type="submit" className="button button--primary">
        Wyślij wiadomość
      </button>
    </form>
  );
};

export default MessageForm;
