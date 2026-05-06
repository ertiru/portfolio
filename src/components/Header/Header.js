import React from "react";
import logo from "../../assets/logo.png";
import Hamburger from "../Hamburger/Hamburger";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById("menuCheckbox").checked = false;
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div className="header" id="home">
        <div className="container header-inner">
          <img
            src={logo}
            alt="logo"
            width="100px"
            height="50px"
            className="logo"
          />
          <ul className="desktopnav">
            <li>
              <span onClick={() => scrollToSection("home")}>Home</span>
            </li>
            <li>
              <span onClick={() => scrollToSection("about")}>About me</span>
            </li>
            <li>
              <span onClick={() => scrollToSection("projects")}>Projects</span>
            </li>
            <li>
              <span onClick={() => scrollToSection("faq")}>FAQ</span>
            </li>
            <li>
              <span onClick={() => scrollToSection("contact")}>Contact me</span>
            </li>
          </ul>
          <button>Contact me on Whatsapp</button>
        </div>
      </div>

      <Hamburger />
    </>
  );
};

export default Header;
