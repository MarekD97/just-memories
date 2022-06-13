import React from "react";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import instagram from "../img/icons/instagram.svg";
import facebook from "../img/icons/facebook.svg";
import burgerMenu from "../img/icons/menu.svg";
import closeMenu from "../img/icons/menu_close.svg";

const Navbar = () => {
  const [active, setActive] = React.useState(false);

  const {
    allMarkdownRemark: { edges: offers },
  } = useStaticQuery(graphql`
    query OffersQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "offer-page" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const toggleHamburger = () => setActive((state) => !state);

  return (
    <nav className="navbar" role="navigation" aria-label="Main" id="navigation">
      <StaticImage
        className="navbar__watermark"
        src="../img/eucalyptus_01.png"
        alt=""
        placeholder="blurred"
        layout="constrained"
        width={300}
        height={300}
        aspectRatio={1 / 1}
        imgStyle={{ zIndex: -1 }}
      />
      <div className={`navbar-start ${active ? "navbar-menu--is-open" : ""}`}>
        <div className="navbar-social">
          <a
            className="navbar-menu__item"
            href="https://www.instagram.com/justmemoriesphoto"
          >
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
          <a
            className="navbar-menu__item"
            href="https://www.facebook.com/JustMemoriesPhoto"
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
        </div>
        <div className="navbar-menu">
          <Link className="navbar-menu__item" to="/realizacje/">
            Realizacje
          </Link>
          <div className="dropdown">
            <Link className="navbar-menu__item dropdown__icon" to="/oferta/">
              Oferta
            </Link>
            <div className="dropdown__menu">
              {offers.map(({ node: offer }) => (
                <Link
                  key={offer.id}
                  className="dropdown__item"
                  to={offer.fields.slug}
                >
                  {offer.frontmatter.title}
                </Link>
              ))}
            </div>
          </div>
          <Link className="navbar-menu__item" to="/o-mnie/">
            O mnie
          </Link>
        </div>
      </div>
      <div className="navbar-brand">
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
      <div className={`navbar-end ${active ? "navbar-menu--is-open" : ""}`}>
        {/* <button
            className="button button--primary"
            onClick={() => navigate("/strefa-klienta/")}
          >
            Strefa klienta
          </button> */}
        <button className="button" onClick={() => navigate("/kontakt/")}>
          Kontakt
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
