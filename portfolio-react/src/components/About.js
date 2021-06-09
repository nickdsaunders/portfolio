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
    <div className="about-container">
      <div className="about-wrapper">
        <h2>ABOUT ME</h2>
        <br />
        <p>
          Hello, My name is Nick Saunders and I am a full stack developer in Los
          Angeles with strong analytical skills, attention to detail, and out of
          the box problem solving capabilities. Fueled by a passion for clean
          efficient code and the desire to make practical applications both user
          intuitive and aesthetically pleasing. Backed with a demonstrated
          history of being an exemplary team player and a skilled multi-tasker
          with 7+ years of professional experience in the design industry.
        </p>
        <br />
        <a href="https://github.com/nickdsaunders" target="_blank">
          <i className="fab fa-github" />
        </a>
      </div>

      <div className="skills-wrapper">
        <h2>SKILLS</h2>
        <br />
        <div className="tech-icons">
          <h3 className>LANGUAGES</h3>
          <div className="tech-icons-item">
            <SiJavascript />
            <DiRuby />
            <ImHtmlFive />
            <SiCss3 />
          </div>
        </div>
        <div className="tech-icons">
          <h3>FRAMEWORKS</h3>
          <div className="tech-icons-item">
            <SiReact />
            <SiRails />
          </div>
        </div>
        <div className="tech-icons">
          <h3>TESTING</h3>
          <div className="tech-icons-item">
            <SiPostgresql />
            <SiJest />
          </div>
        </div>
        <div className="tech-icons">
          <h3>DESIGN</h3>
          <div className="tech-icons-item">
            <DiPhotoshop />
            <SiAdobeindesign />
            <SiAutodesk />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
