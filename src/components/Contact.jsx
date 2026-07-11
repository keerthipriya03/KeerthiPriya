import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./components.css";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-header">
        <span className="section-tag">Let's Connect</span>
        <h2>Contact Me</h2>
        {/* <p>
          Have a project, internship, or collaboration in mind? Feel free to
          reach out.
        </p> */}
      </div>

      <div className="contact-container">
        <div className="contact-info">
          {/* <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>email@gmail.com</p>
            </div>
          </div> */}

          <div className="info-card">
            <FaGithub className="info-icon" />
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/keerthipriya03"
                target="_blank"
                rel="noreferrer"
              >
                github.com/keerthipriya03
              </a>
            </div>
          </div>
 
          <div className="info-card">
            <FaLinkedin className="info-icon" />
            <div>
              <a
                href="https://www.linkedin.com/in/keerthi-priya-dwarampudi-094b302a1"
                target="_blank"
                rel="noreferrer"
              >
                {/* linkedin.com/in/yourprofile */}
              <h3>LinkedIn</h3>
              </a>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/keerthipriyadwarampudi@gmail.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;