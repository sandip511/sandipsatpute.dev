import {
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiHibernate,
  SiMongoose,
  SiGithub,
  SiJira,
} from "react-icons/si";

import {
  FiCode,
  FiDatabase,
} from "react-icons/fi";


const technologies = [
  {
    name: "Java",
    icon: SiOpenjdk,
    color: "#F89820",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "SQL",
    icon: FiDatabase,
    color: "#4479A1",
  },
  {
    name: "React.js",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: FiCode,
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#68A063",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688",
  },
  {
    name: "REST APIs",
    icon: FiCode,
    color: "#00A98F",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    color: "#003B57",
  },
  {
    name: "Hibernate",
    icon: SiHibernate,
    color: "#59666C",
  },
  {
    name: "JPA",
    icon: SiHibernate,
    color: "#59666C",
  },
  {
    name: "Mongoose",
    icon: SiMongoose,
    color: "#880000",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
  },
  {
    name: "Agile / Scrum",
    icon: SiJira,
    color: "#2684FF",
  },
];


function Skills() {
  return (
    <section id="skills" className="section skills-section">

      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">

          <span className="section-label">
            My Skills
          </span>

          <h2>
            My Technology <span>Stack</span>
          </h2>

          <p>
            Technologies and tools I use to build modern,
            scalable and user-focused applications.
          </p>

        </div>


        {/* Technology Cards */}
        <div className="technology-stack">

          {technologies.map((technology, index) => {

            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className="technology-card"
                style={{
                  "--tech-color": technology.color,
                  "--animation-delay": `${index * 0.12}s`,
                }}
              >

                <div className="technology-icon">
                  <Icon />
                </div>

                <h3>
                  {technology.name}
                </h3>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}


export default Skills;