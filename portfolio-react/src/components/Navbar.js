import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import ButtonMailto from "./ButtonMailto";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            NICK SAUNDERS
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="about-container"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
                className="nav-links"
                onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="cards__container"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-150}
                className="nav-links"
                onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="footer-container"
                spy={true}
                smooth={true}
                duration={1000}
                // offset={50}
                className="nav-links"
                onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            {/* <li className="nav-item">
              <ButtonMailto
                label={<i className="far fa-paper-plane" />}
                mailto="mailto:nickdsaun@gmail.com"
              />
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/nickdsaunders"
                target="_blank">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/nickdsaunders" target="_blank">
                <i className="fab fa-github" />
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
