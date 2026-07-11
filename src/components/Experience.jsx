
import "./components.css";

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="section-header">
        <span className="section-tag">Career Journey</span>
        <h2>Experience</h2>
        <p>
          A snapshot of my professional experience, internships, and open-source
          contributions.
        </p>
      </div>
 
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">Jan 2026 – Feb 2026</span>

            <h3>Elite Coders Winter of Code</h3>

            <h4>Open Source Contributor</h4>

            <ul>
              <li>
                Contributed to multiple open-source repositories with 30+ pull
                requests.
              </li>

              <li>
                Collaborated with developers worldwide, improving code quality
                through reviews and iterative improvements.
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">May 2025 – Jun 2025</span>

            <h3>Vault of Codes</h3>

            <h4>Web Developer Intern</h4>

            <ul>
              <li>
                Gained hands-on experience in frontend development, UI design, and interactive web application logic.
              </li>

              <li>
                Built responsive user interfaces using HTML, CSS, and
                JavaScript.
              </li>

              <li>
                Improved frontend design and interactive user experiences.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;