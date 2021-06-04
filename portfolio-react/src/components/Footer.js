import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import ButtonMailto from "./ButtonMailto";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Lets Connect!</h2>
            <br />
            <Link to="/"></Link>
          </div>
          <section className="social-media">
            <div className="social-media-wrap">
              <div className="social-icons">
                <ButtonMailto
                  label={<i className="far fa-paper-plane" />}
                  mailto="mailto:nickdsaun@gmail.com"
                />
                <a
                  href="https://www.linkedin.com/in/nickdsaunders"
                  target="_blank">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="https://github.com/nickdsaunders" target="_blank">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
