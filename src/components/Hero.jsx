import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  MdLocationOn,
} from "react-icons/md";

import profileImage from "../images/profile.webp";

import "./components.css";


function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-container">

        <div className="hero-left">

          <span className="section-tag">
            Welcome to my portfolio
          </span>


          <h1>
            Hi, I am Keerthi Priya 👋
          </h1>


          <h2>
            Front-end Developer
          </h2>


          <p>
            An aspiring full-stack developer passionate about creating
            responsive, user-friendly websites and building real-world
            applications using modern technologies.
          </p>


          <div className="hero-location">

            <MdLocationOn />

            <span>
              Visakhapatnam, India
            </span>

          </div>


          <div className="hero-actions">

            <a
              href="#projects"
              className="primary-btn"
            >
              View Projects
            </a>


            <a
              href="#contact"
              className="secondary-btn"
            >
              Contact Me
            </a>

          </div>


          <div className="social-icons">

            <a
              href="https://github.com/keerthipriya03"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>


            <a
              href="https://www.linkedin.com/in/keerthi-priya-dwarampudi-094b302a1"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>


        </div>


        <div className="hero-right">

          <img
            src={profileImage}
            alt="Keerthi Priya"
          />

        </div>


      </div>

    </section>
  );
}


export default Hero;