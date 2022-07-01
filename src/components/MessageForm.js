import React from "react";

const MessageForm = ({ onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <input
          type="text"
          name="name"
          className="form__input"
          id="formName"
          placeholder="Imię i nazwisko"
        />
        <input
          type="email"
          name="email"
          className="form__input"
          id="form_email"
          placeholder="Email"
        />
      </div>
      <textarea
        type="text"
        name="message"
        className="form__textarea"
        id="form_message"
        placeholder="Wiadomość"
        rows={4}
      />
      <button type="submit" className="button button--primary">
        Wyślij wiadomość
      </button>
    </form>
  );
};

export default MessageForm;
