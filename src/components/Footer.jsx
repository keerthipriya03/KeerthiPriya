import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import "./components.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            D. Keerthi Priya
          </h2>

          <p>
            Front-end Developer passionate about creating modern web
            experiences.
          </p>
        </div>


        <div className="footer-links">

          <a href="#header">
            Home
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <div className="footer-social">

          <a
            href="https://github.com/keerthpriya03"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>


          <a
            href="https://linkedin.com/in/YOUR_PROFILE"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>


          <a href="mailto:keerthipriyadwarampudi@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} D. Keerthi Priya. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
 
export default Footer;