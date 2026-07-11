import "./components.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="section-header">
        <span className="section-tag">Get To Know Me</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm <strong>Keerthi Priya</strong>, an aspiring Full Stack
            Developer passionate about building responsive, user-friendly, and
            scalable web applications. I enjoy transforming ideas into
            interactive digital experiences while continuously learning modern
            technologies.
          </p>

          <p>
            I have experience working with React, Java, Python, MySQL, and
            modern frontend technologies. I enjoy solving real-world problems,
            contributing to open-source projects, and creating applications that
            deliver meaningful user experiences.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h3>Education</h3>
            <p>B.Tech in Computer Science</p>
          </div>

          <div className="about-card">
            <h3>Location</h3>
            <p>Andhra Pradesh, India</p>
          </div>

          <div className="about-card">
            <h3>Experience</h3>
            <p>Web Development & Open Source</p>
          </div>

          <div className="about-card">
            <h3>Interests</h3>
            <p>Web Development • Problem Solving • UI Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;