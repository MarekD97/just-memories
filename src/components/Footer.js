import React from 'react';

import email from '../img/icons/email.svg';
import phone from '../img/icons/phone.svg';
import facebook from '../img/icons/facebook.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__header">
          Magdalena Juwko
        </h3>
        <a 
          className="footer__item"
          href="mailto:kontakt@justmemoriesphoto.pl"
        >

          <img 
            src={email}
            className="footer__icon"
            alt="e-mail" 
          />
          kontakt@justmemoriesphoto.pl
        </a>
        <a 
          className="footer__item"
          href="https://www.facebook.com/JustMemoriesPhoto/"
        >
          <img 
            src={facebook}
            className="footer__icon"
            alt="facebook" 
          />
          facebook.com/JustMemoriesPhoto/
        </a>
        <a 
          className="footer__item"
          href="tel:612345678"
        >
          <img 
            src={phone}
            className="footer__icon"
            alt="phone" 
          />
            612 345 678
        </a>
      </div>
      <div className="footer__bottom">
      © 2022 Just Memories Photo
      </div>
    </footer>
  );
};

export default Footer;