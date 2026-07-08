import profileImage from "../images/contact.avif";
import "./page.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <form action="https://formsubmit.co/keerthipriyadwarampudi@gmail.com" method="POST">
          <input type="text" name="name" required placeholder="Your Name" />
          <input type="email" name="email" required placeholder="Your Email" />
          <textarea name="message" required placeholder="Your Message"></textarea>

          <button type="submit">Send</button>
        </form>

        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}

export default Contact;






