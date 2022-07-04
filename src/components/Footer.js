import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import email from "../img/icons/email.svg";
import facebook from "../img/icons/facebook.svg";
import instagram from "../img/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <StaticImage
        className="watermark watermark--bottom"
        src="../img/eucalyptus_04.png"
        style={{
          transform: "rotate(-90deg)",
          position: "absolute",
          left: 0,
          bottom: 0,
          zZndex: -1,
        }}
        alt=""
        placeholder="blurred"
        layout="constrained"
        width={300}
        aspectRatio={1 / 1}
        imgStyle={{ zIndex: -1 }}
      />
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
          {/* <a href="https://www.facebook.com/JustMemoriesPhoto/">
            <img
              src={facebook}
              alt="facebook"
              style={{ width: "1.5em", height: "1.5em", marginRight: "1em" }}
            />
            facebook.com/JustMemoriesPhoto/
          </a>
          <a href="https://www.instagram.com/justmemoriesphoto">
            <img
              src={instagram}
              alt="instagram"
              style={{ width: "1.5em", height: "1.5em", marginRight: "1em" }}
            />
            instagram.com/justmemoriesphoto
          </a> */}
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
