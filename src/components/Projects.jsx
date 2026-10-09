
import "./components.css";

// import cropfit from "../images/cropfit.png";
import movieverse from "../images/movieverse.png";
import notestk from "../images/notestk.png";
import chatapp from "../images/chatapp.png";
import opticrop from "../images/opticrop.png";
import cinematch from "../images/Screenshot 2026-10-09 161154.png";
// import swapnsave from "../images/swapnsave.png";
const projects = [
  {
  title: "CineMatch",
  subtitle: "Group-Based Indian Movie Recommendation Platform",
  description:
    "CineMatch is a full-stack MERN application that helps friends decide which Indian movie to watch together. Users can create a movie night, invite friends using a unique group code, submit preferences, and receive recommendations based on combined group inputs.",
  image: cinematch,
  link: "https://github.com/keerthipriya03/CineMatch",
  technologies: [
    "React.js",
    "Vite",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Mongoose",
    "JWT",
    "bcrypt",
    "Axios",
    "Git & GitHub",
    "Render",
  ],
},
  {
    title: "MyNoteStack",
    subtitle: "Backend Note-Taking Application",
    description:
      "MyNoteStack – A backend application for creating and managing notes using RESTful APIs.",
    image: notestk,
    link: "https://journal-app-frontend-y90k.onrender.com//Login.html",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "VSCode",
      "GitHub",
    ],
  },
  {
    title: "Chat-App",
    subtitle: "Real-time Chat Application",
    description:
      "Chat-App – A real-time chat application that allows users to communicate instantly.",
    image: chatapp,
    link: "https://chat-app-a30b.onrender.com/",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TensorFlow.js",
      "Machine Learning",
      "Image Processing",
      "JSON",
    ],
  },
  {
    title: "MovieVerse",
    subtitle: "React-based Movie Search Engine",
    description:
      "MovieVerse – A React-based movie search engine that fetches and displays movie details using an external API.",
    image: movieverse,
    link: "https://movieverse-2lgh.onrender.com/",
    technologies: [
      "React.js",
      "OMDb API",
    ],
  },
  {
    title: "OptiCrop",
    subtitle: "Machine Learning Based Crop Recommendation System",
    description:
      "OptiCrop is a machine learning-based web application that recommends the most suitable crop based on soil and environmental conditions. It analyzes parameters such as nitrogen, phosphorus, potassium, temperature, humidity, pH, and rainfall to provide accurate crop predictions. The system is built with a Flask backend and integrates machine learning models for efficient and data-driven agricultural recommendations.",
    image: opticrop,
    link: "https://opticrop-2lj9.onrender.com/",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TensorFlow.js",
      "Machine Learning",
      "Image Processing",
      "JSON",
    ],
  },
  // {
  //   title: "Crop-Fit",
  //   subtitle: "Crop Recommendation App",
  //   description:
  //     "Crop-Fit – A web application that recommends crops based on soil and weather conditions.",
  //   image: cropfit,
  //   link: "https://crop-fit.vercel.app/",
  //   technologies: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "TensorFlow.js",
  //     "Machine Learning",
  //     "Image Processing",
  //     "JSON",
  //   ],
  // },
];

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section-header">
        <span className="section-tag">
          My Work
        </span>

        <h2>
          Projects I Have Done
        </h2>

        <p>
          Here is a collection of projects I have built using modern
          technologies.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className={`project-content ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            key={project.title}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-details">
              <h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.title}
                </a>
              </h3>

              {project.subtitle && (
                <h4>
                  {project.subtitle}
                </h4>
              )}

              <p>
                {project.description}
              </p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span
                    className="tech-badge"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
