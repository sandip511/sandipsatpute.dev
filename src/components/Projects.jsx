import {
  FiExternalLink,
  FiGithub,
} from "react-icons/fi"; 

const projects = [
  {
    title: "PDF Chatbot",
    image: `${import.meta.env.BASE_URL}images/image-1.png`,
    description:
      "A smart PDF assistant that uses AI to understand documents and provide fast, accurate answers to user queries.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "RAG",
      "AI",
    ],
    github:
      "https://github.com/sandip511/pdf-document-qns-chatbot",
    demo: null,
  },

  {
    title: "Car Rental System",
    image: `${import.meta.env.BASE_URL}images/photo1.png`,
    description:
      "Car-Rental.com — A full-stack car rental platform for discovering, exploring, and booking vehicles with an intuitive and seamless user experience.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Full Stack",
    ],
    github:
      "https://github.com/sandip511/car-rental",
    demo: null,
  },

  {
    title: "House Price Prediction System",
    image: "/images/proj_3.jpg",
    description:
      "A machine learning system that predicts house prices based on key property features and location.",
    technologies: [
      "Python",
      "Machine Learning",
      "Data Science",
    ],
    github: null,
    demo: null,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="section projects-section"
    >
      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            My Work
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            Academic projects demonstrating hands-on
            experience in Full Stack Development,
            AI/LLM, RAG, Machine Learning, Python,
            FastAPI, MySQL, and modern web technologies.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className="project-card glass-card"
              key={project.title}
            >

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FiGithub />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                    >
                      <FiExternalLink />
                    </a>
                  )}

                </div>

              </div>

              <div className="project-content">

                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-technologies">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

                <div className="project-links">

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub />
                      GitHub
                    </a>
                  ) : (
                    <span className="project-link-disabled">
                      GitHub not available
                    </span>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                      <FiExternalLink />
                    </a>
                  ) : (
                    <span className="project-link-disabled">
                      
                    </span>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

        <div className="projects-more">

          <p>
            I love building innovative applications,
            solving real-world problems, and turning
            ideas into impactful technology.
          </p>

          <a
            href="https://github.com/sandip511"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            More Projects on GitHub
            <FiGithub />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;