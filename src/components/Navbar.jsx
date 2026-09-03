import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
} from "react-icons/fi";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Resume", id: "resume" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (
          section &&
          scrollPosition >= section.offsetTop
        ) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        <button
          className="navbar-logo"
          onClick={() =>
            scrollToSection("home")
          }
        >
          Sandip Satpute
        </button>

        <nav
          className={`navbar-links ${
            menuOpen ? "open" : ""
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className={
                activeSection === item.id
                  ? "active"
                  : ""
              }
              onClick={() =>
                scrollToSection(item.id)
              }
            >
              {item.name}
            </button>
          ))}
        </nav>

        <button
          className="navbar-menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <FiX />
          ) : (
            <FiMenu />
          )}
        </button>

      </div>

    </header>
  );
}

export default Navbar;