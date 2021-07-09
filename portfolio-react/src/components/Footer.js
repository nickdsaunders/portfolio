import React from 'react';
import '../styles/Footer.css';
import ButtonMailto from './ButtonMailto';
import Plants from '../images/plants.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-image-wrapper">
          <img className="plants" alt="decorative" src={Plants} />
        </div>

        <div className="footer-connect-container">
          <div className="footer-heading-wrapper">
            <h1 className="footer-heading-h1">Lets Connect!</h1>
            <div className="footer-divider"></div>
            <div className="footer-icons-wrapper">
              <ButtonMailto
                label={<i className="far fa-paper-plane" />}
                mailto="mailto:ndsaun@gmail.com"
              />
              <a href="https://www.linkedin.com/in/nickdsaunders">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://github.com/nickdsaunders">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
