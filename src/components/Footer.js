import React from 'react';

import email from '../img/icons/email.svg';
import phone from '../img/icons/phone.svg';
import facebook from '../img/icons/facebook.svg';
import instagram from '../img/icons/instagram.svg'
import { Link, navigate } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <StaticImage 
        src="../img/eucalyptus_04.png"
        style={{
          transform: 'rotate(-90deg)',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "45vw",
          maxWidth: '600px',
        }}
        alt=""
        placeholder="blurred"
        layout="constrained"
        width={600}
        height={600}
        aspectRatio={1/1}
      /> */}
      <div className="footer__row" style={{alignSelf: 'flex-end'}}>
        <a className="primary-btn" href="#">
          /\
        </a>
      </div>
      <div className="footer__row">
        <div className="footer__contact">
        <h3>Magdalena Juwko</h3>
        <a href="mailto:kontakt@justmemoriesphoto.pl">
          <img 
            src={email}
            alt="e-mail" 
            style={{ width: "1.5em", height: "1.5em", marginRight: "1em" }}
          />
          kontakt@justmemoriesphoto.pl
        </a>
        <a href="https://www.facebook.com/JustMemoriesPhoto/">
          <img 
            src={facebook}
            alt="facebook" 
            style={{ width: "1.5em", height: "1.5em", marginRight: "1em" }}
          />
          facebook.com/JustMemoriesPhoto/
        </a>
        <a href="tel:612345678">
          <img 
            src={phone}
            alt="phone" 
            style={{ width: "1.5em", height: "1.5em", marginRight: "1em" }}
          />
            612 345 678
        </a>
        </div>
        <div className="footer__menu">
          <Link to="/portfolio/">
            Portfolio
          </Link>
          <Link to="/cennik/">
            Cennik
          </Link>
          <Link to="/o-mnie/">
            O mnie
          </Link>
        </div>
        <div className="footer__menu">
          <button
            className="primary-btn"
            onClick={() => window.location.href='/admin'}
          >
            Strefa klienta
          </button>
          <button
            className="btn"
            onClick={() => navigate("/kontakt/")}
          >
            Kontakt
          </button>
        </div>
        <div className="footer__social">
          <a href="https://www.instagram.com/justmemoriesphoto">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
          <a href="https://www.facebook.com/JustMemoriesPhoto">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>Just Memories</span>
        <span>2022</span>
      </div>
    </footer>
  );
};

export default Footer;