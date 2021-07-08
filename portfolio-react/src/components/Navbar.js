import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="home-container"
            className="navbar-logo"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
            onClick={closeMobileMenu}>
            Nick Saunders
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="about-container"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-180}
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
                offset={-25}
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
