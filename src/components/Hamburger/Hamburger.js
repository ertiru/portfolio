import React from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const scrollToSection = (id) => {
    document.getElementById("menuCheckbox").checked = false;
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <nav role="navigation">
        <div className="menuToggle">
          <input type="checkbox" id="menuCheckbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul className="menu">
            <li>
              <Link onClick={() => scrollToSection("home")}>Home</Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection("about")}>About</Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection("projects")}>Projects</Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection("faq")}>FAQ</Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection("contact")}>Contact</Link>
            </li>
            <li>
              <a
                href="https://wa.me/38344355032"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact me on Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Hamburger;
