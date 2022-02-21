// import React from "react";
// import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";

// const Navbar = class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: false,
//       navBarActiveClass: "",
//     };
//   }

//   toggleHamburger() {
//     // toggle the active boolean in the state
//     this.setState(
//       {
//         active: !this.state.active,
//       },
//       // after state has been updated,
//       () => {
//         // set the class in state for the navbar accordingly
//         this.state.active
//           ? this.setState({
//               navBarActiveClass: "is-active",
//             })
//           : this.setState({
//               navBarActiveClass: "",
//             });
//       }
//     );
//   }

//   render() {
//     return (
//       <nav
//         className="navbar is-transparent"
//         role="navigation"
//         aria-label="main-navigation"
//       >
//         <div className="container">
//           <div className="navbar-brand">
//             <Link to="/" className="navbar-item" title="Logo">
//               <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
//             </Link>
//             {/* Hamburger menu */}
//             <div
//               className={`navbar-burger burger ${this.state.navBarActiveClass}`}
//               data-target="navMenu"
//               role="menuitem"
//               tabIndex={0}
//               onKeyPress={() => this.toggleHamburger()}
//               onClick={() => this.toggleHamburger()}
//             >
//               <span />
//               <span />
//               <span />
//             </div>
//           </div>
//           <div
//             id="navMenu"
//             className={`navbar-menu ${this.state.navBarActiveClass}`}
//           >
//             <div className="navbar-start has-text-centered">
//               <Link className="navbar-item" to="/about">
//                 About
//               </Link>
//               <Link className="navbar-item" to="/products">
//                 Products
//               </Link>
//               <Link className="navbar-item" to="/blog">
//                 Blog
//               </Link>
//               <Link className="navbar-item" to="/contact">
//                 Contact
//               </Link>
//               <Link className="navbar-item" to="/contact/examples">
//                 Form Examples
//               </Link>
//             </div>
//             <div className="navbar-end has-text-centered">
//               <a
//                 className="navbar-item"
//                 href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="icon">
//                   <img src={github} alt="Github" />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import instagram from '../img/social/instagram.svg';
import facebook from '../img/social/facebook.svg';
import burgerMenu from '../img/menu_black_24dp.svg';
import closeMenu from '../img/close_black_24dp.svg';

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
          <a className="navbar-menu__item" href="#">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
          <a className="navbar-menu__item" href="#">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
        </div>
        <div className="navbar-menu">
          <Link className="navbar-menu__item" to="/portfolio">
            Portfolio
          </Link>
          <Link className="navbar-menu__item" to="/cennik">
            Cennik
          </Link>
          <Link className="navbar-menu__item" to="/o-mnie">
            O mnie
          </Link>
        </div>
      </div>
      <div
        className="navbar-brand"
      >
        <StaticImage
          src="../img/logo.png"
          alt="image"
          fluid={"true"}
          width={130}
          height={130}
          placeholder="blurred"
        />
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
          onClick={() => navigate("/logowanie")}
        >
          Strefa klienta
        </button>
        <button
          className="btn"
          onClick={() => navigate("/kontakt")}
        >
          Kontakt
        </button>
      </div>
    </nav >
  );
}

export default Navbar;