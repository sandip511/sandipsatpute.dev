import {
  FiBriefcase,
  FiCode,
  FiMapPin,
  FiTool,
  FiGlobe,
  FiBookOpen,
  FiArrowUpRight,
} from "react-icons/fi";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            About Me
          </span>

          <h2>
            Building technology with{" "}
            <span>purpose</span>
          </h2>

          <p>
            Computer Science and Engineering graduate passionate
            about creating modern, scalable and user-focused
            applications.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-profile-card glass-card">

            <div className="about-image-wrapper">
              <img
                src="/images/photo-about.png"
                alt="Sandip Satpute"
                className="about-image"
              />
            </div>

            <div className="about-profile-content">

              <div className="profile-item">
                <span className="profile-label">
                  Name
                </span>

                <strong>
                  Sandip Satpute
                </strong>
              </div>

              <div className="profile-item">
                <span className="profile-label">
                  Job Role
                </span>

                <strong>
                  Full Stack Developer
                </strong>
              </div>

              <div className="profile-item">
                <span className="profile-label">
                  Location
                </span>

                <strong className="profile-location">
                  <FiMapPin />
                  Pune, India
                </strong>
              </div>

            </div>

            <div className="about-project-count">

              <div className="project-count-number">
                10+
              </div>

              <div className="project-count-text">
                Projects
                <br />
                completed
              </div>

            </div>

            <a
              href="https://www.linkedin.com/in/sandip-satpute-549417285/"
              target="_blank"
              rel="noreferrer"
              className="about-linkedin-btn"
            >
              Connect on LinkedIn
              <FiArrowUpRight />
            </a>

          </div>

          <div className="about-content">

            <div className="about-description">

              <p>
                Computer Science and Engineering graduate with
                hands-on experience in full-stack development and
                website administration.
              </p>

              <p>
                Proficient in Java, React, Spring Boot, MySQL,
                and MongoDB, with a strong foundation in developing
                scalable and user-focused web applications.
                Passionate about building clean, maintainable
                solutions and eager to contribute as a Software
                Developer while continuously expanding technical
                expertise.
              </p>

            </div>

            <div className="about-info-grid">

              <div className="about-info-card">
                <div className="about-info-icon">
                  <FiCode />
                </div>

                <div>
                  <span>Profile</span>
                  <strong>Full Stack Developer</strong>
                </div>
              </div>

              <div className="about-info-card">
                <div className="about-info-icon">
                  <FiBookOpen />
                </div>

                <div>
                  <span>Education</span>
                  <strong>Bachelor of Engineering</strong>
                </div>
              </div>

              <div className="about-info-card">
                <div className="about-info-icon">
                  <FiGlobe />
                </div>

                <div>
                  <span>Languages</span>
                  <strong>English, Hindi</strong>
                </div>
              </div>

              <div className="about-info-card">
                <div className="about-info-icon">
                  <FiTool />
                </div>

                <div>
                  <span>Tools</span>
                  <strong>
                    Git, GitHub, VS Code, IntelliJ, Postman
                  </strong>
                </div>
              </div>

            </div>

            <div className="about-extra">

              <div className="about-extra-title">
                <FiBriefcase />
                <span>Other Skills</span>
              </div>

              <p>
                Cloud, PySpark, Excel, Git, JIRA,
                Google Analytics, SEO
              </p>

            </div>

            <div className="about-extra">

              <div className="about-extra-title">
                <FiGlobe />
                <span>Interests</span>
              </div>

              <p>
                Problem Solving, Traveling
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;