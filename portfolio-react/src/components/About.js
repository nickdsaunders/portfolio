import '../styles/About.css';
import {
  SiJavascript,
  SiCss3,
  SiReact,
  SiRails,
  SiJest,
  SiAdobeindesign,
  SiAutodesk,
  SiPostgresql
} from 'react-icons/si';
import { DiRuby, DiPhotoshop } from 'react-icons/di';
import { ImHtmlFive } from 'react-icons/im';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-wrapper">
          <h2 className="about-h2">ABOUT ME</h2>
          <div className="about-divider"></div>
          <p className="about-p">
            Hello, My name is Nick Saunders and I am a full stack developer
            currently in Los Angeles. I am equipped with strong analytical
            skills, attention to detail, and the will to find solutions to
            everyday problems. Fueled by a passion for clean efficient code and
            the desire to make practical applications both user intuitive and
            aesthetically pleasing. Backed with a demonstrated history of being
            an exemplary team player and a skilled multi-tasker with 7+ years of
            professional experience in the design industry.
          </p>
        </div>

        <div className="skills-wrapper">
          <h2 className="about-h2">SKILLS</h2>
          <div className="about-divider"></div>

          <div className="tech-icons">
            <h3 className="skills-h3">LANGUAGES:</h3>
            <div className="tech-icons-item">
              <SiJavascript />
            </div>
            <div className="tech-icons-item">
              <DiRuby />
            </div>
            <div className="tech-icons-item">
              <ImHtmlFive />
            </div>
            <div className="tech-icons-item">
              <SiCss3 />
            </div>
          </div>

          <div className="tech-icons">
            <h3 className="skills-h3">FRAMEWORKS:</h3>
            <div className="tech-icons-item">
              <SiReact />
            </div>
            <div className="tech-icons-item">
              <SiRails />
            </div>
          </div>

          <div className="tech-icons">
            <h3 className="skills-h3">TESTING:</h3>
            <div className="tech-icons-item">
              <SiPostgresql />
            </div>
            <div className="tech-icons-item">
              <SiJest />
            </div>
          </div>

          <div className="tech-icons">
            <h3 className="skills-h3">DESIGN:</h3>
            <div className="tech-icons-item">
              <DiPhotoshop />
            </div>
            <div className="tech-icons-item">
              <SiAdobeindesign />
            </div>
            <div className="tech-icons-item">
              <SiAutodesk />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
