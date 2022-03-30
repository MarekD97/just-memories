import React from "react";
import Layout from "../components/Layout";

export const ContactPageTemplate = () => {
    return (
        <div className="contact">
            <h1 className="contact__header">
                Skontaktuj się ze mną
            </h1>
            <form 
                className="contact__form"
                action="" 
                method="post" 
            >
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
    )
}

const ContactPage = () => (
    <Layout>
        <ContactPageTemplate />
    </Layout>
)

export default ContactPage;