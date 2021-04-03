import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2></h2>
            <Link to="/"></Link>
          </div>
          <section className="social-media">
            <div className="social-media-wrap">
              <div className="footer-logo">
                <Link to="/" className="social-logo">
                  {/* <i className="fab fa-linkedin"></i> */}
                </Link>
              </div>
              <div className="social-icons">
                <Link
                  className="social-icon-link email"
                  to="/"
                  target="_blank"
                  aria-label="Email">
                  <i className="far fa-paper-plane" />
                </Link>
                <Link
                  className="social-icon-link linkedin"
                  to="/https://www.linkedin.com/in/nickdsaunders/"
                  target="_blank"
                  aria-label="Linkedin">
                  <i className="fab fa-linkedin" />
                </Link>
                <Link
                  className="social-icon-link github"
                  to="/"
                  target="_blank"
                  aria-label="Github">
                  <i className="fab fa-github" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
