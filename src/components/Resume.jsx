import {
  FiBriefcase,
  FiBookOpen,
  FiDownload,
} from "react-icons/fi";

const experiences = [
  {
    date: "2026 - Present",
    title: "Project Experience",
    description:
      "Full-Stack Development: Developed responsive web applications using HTML, CSS, JavaScript, Python, FastAPI, and MySQL.",
    points: [
      "Developed a full-stack web application using HTML, CSS, JavaScript, Python, FastAPI, and MySQL.",
      "Built responsive frontend interfaces and integrated RESTful APIs for backend functionality.",
      "Designed and managed the MySQL database for storing and retrieving application data.",
    ],
  },

  {
    date: "Jul 2025 - Jun 2025",
    title: "College Website Administrator",
    description:
      "Website Management: Managed and updated the college website, maintaining content, pages, and ensuring accurate and timely information.",
    points: [
      "Managed and updated the official college website with current content.",
      "Published notices, academic updates, results, and event information.",
      "Coordinated with faculty and administration to ensure accurate website content.",
    ],
  },
];

const education = [
  {
    date: "2022 - 2026",
    title: "Bachelor of Engineering",
    institution:
      "Sant Gadge Baba University, Amravati",
  },

  {
    date: "2019 - 2020",
    title: "Higher Secondary School",
    institution:
      "Swatantraweer Sawarkar Vidyalay, Sayala",
  },
];

function Resume() {
  return (
    <section
      id="resume"
      className="section resume-section"
    >
      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            My Resume
          </span>

          <h2>
            Education & <span>Experience</span>
          </h2>

          <p>
            Computer Science and Engineering graduate
            passionate about building scalable and
            user-centric software solutions.
          </p>

        </div>

        <div className="resume-block">

          <div className="resume-block-title">
            <FiBriefcase />
            <h3>Experience</h3>
          </div>

          <div className="timeline">

            {experiences.map((experience) => (

              <div
                className="timeline-item"
                key={experience.title}
              >

                <div className="timeline-dot"></div>

                <div className="timeline-card glass-card">

                  <span className="timeline-date">
                    {experience.date}
                  </span>

                  <h3>
                    {experience.title}
                  </h3>

                  <p>
                    {experience.description}
                  </p>

                  <ul>
                    {experience.points.map(
                      (point) => (
                        <li key={point}>
                          {point}
                        </li>
                      )
                    )}
                  </ul>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="resume-block">

          <div className="resume-block-title">
            <FiBookOpen />
            <h3>Education</h3>
          </div>

          <div className="education-grid">

            {education.map((item) => (

              <div
                className="education-card glass-card"
                key={item.title}
              >

                <span className="timeline-date">
                  {item.date}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.institution}
                </p>

              </div>

            ))}

          </div>

        </div>

        <div className="resume-download">

          <a
            href={`${import.meta.env.BASE_URL}Sandip_CV.pdf`}
            className="btn btn-primary"
            download
          >
            Download Resume
            <FiDownload />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Resume;