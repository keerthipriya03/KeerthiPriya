import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiMysql,
} from "react-icons/si";

import "./components.css";


const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "ReactJS",
    icon: <FaReact />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
];


function Skills() {
  return (
    <section id="skills" className="skills section">

      <div className="section-header">

        <span className="section-tag">
          Technical Skills
        </span>

        <h2>
          Skills
        </h2>

        <p>
          Technologies and tools I use to build responsive and scalable
          applications.
        </p>

      </div>


      <div className="skills-grid">

        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill.name}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>
              {skill.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}


export default Skills;