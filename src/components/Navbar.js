import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import instagram from '../img/icons/instagram.svg';
import facebook from '../img/icons/facebook.svg';
import burgerMenu from '../img/icons/menu.svg';
import closeMenu from '../img/icons/menu_close.svg';


const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleHamburger = () => {
    const newState = !active;
    setActive(newState);
  }

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="Main"
    >
      <div className={`navbar-start ${active ? "navbar-menu--is-open" : ""}`}>
        <div className="navbar-social">
          <a className="navbar-menu__item" href="https://www.instagram.com/justmemoriesphoto">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
          <a className="navbar-menu__item" href="https://www.facebook.com/JustMemoriesPhoto">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
        </div>
        <div className="navbar-menu">
          <Link className="navbar-menu__item" to="/portfolio/">
            Portfolio
          </Link>
          <Link className="navbar-menu__item" to="/cennik/">
            Cennik
          </Link>
          <Link className="navbar-menu__item" to="/o-mnie/">
            O mnie
          </Link>
        </div>
      </div>
      <div
        className="navbar-brand"
      >
        <Link to="/">
          <StaticImage
            src="../img/logo.png"
            alt="image"
            fluid={"true"}
            width={130}
            height={130}
            placeholder="blurred"
          />
        </Link>
        <button
          className={`navbar-burger ${active ? "navbar-menu--is-open" : ""}`}
          onClick={() => toggleHamburger()}
        >
          <img
            src={active ? closeMenu : burgerMenu}
            alt="menu"
            style={{ width: "2.625em", height: "2.625em" }}
          />
        </button>
      </div>
      <div
        className={`navbar-end ${active ? "navbar-menu--is-open" : ""}`}
      >
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
    </nav >
  );
}

export default Navbar;