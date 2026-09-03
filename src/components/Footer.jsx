import {
  FiGithub,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">

        {/* Footer Top */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <h2>Sandip Satpute</h2>

            <p>
              Full Stack Developer passionate about building
              modern, scalable and impactful applications.
            </p>

            <div className="footer-socials">

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

          {/* Navigation */}
          <div className="footer-links">
            <h3>Quick Links</h3>

            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("skills")}>
              Skills
            </button>

            <button onClick={() => scrollToSection("resume")}>
              Resume
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>

          {/* Back To Top */}
          <div className="footer-action">
            <button
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <FiArrowUp />
            </button>

            <span>Back to top</span>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Sandip Satpute.
            All rights reserved.
          </p>

          <p>
            Built with React & Vite
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;