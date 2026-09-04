import {
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-greeting">
            Hello, I'm
          </span>

          <h1 className="hero-name">
            Sandip Satpute
          </h1>

          <h2 className="hero-title">
            Software Engineer
          </h2>

          <div className="availability">
            <span className="availability-dot"></span>

            <span>
              I'm available for opportunities
            </span>
          </div>

          <h3 className="hero-role">
            Full Stack Developer
          </h3>

          <p className="hero-description">
            Computer Science and Engineering graduate passionate
            about building clean, scalable, and user-focused web
            applications. I enjoy solving real-world problems and
            continuously expanding my technical expertise.
          </p>

          <div className="hero-buttons">

            <button
              className="btn btn-primary"
              onClick={scrollToProjects}
            >
              View Projects
              <FiArrowDown />
            </button>

            <a
              href={`${import.meta.env.BASE_URL}Sandip_CV.pdf`}
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
              <FiDownload />
            </a>

          </div>

          <div className="hero-social">

            <span>
              Find me on
            </span>

            <a
              href="https://github.com/sandip511"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sandip-satpute-549417285/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-image-glow"></div>

          <div className="hero-image-card">

            <img
              src={`${import.meta.env.BASE_URL}images/kg.png`}
              alt="Sandip Satpute"
              className="hero-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;