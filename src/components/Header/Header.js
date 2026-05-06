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
          <img src={logo} alt="logo" width="100px" height="50px" />
          <ul className="desktopnav">
            <li>
              <a onClick={() => scrollToSection("home")}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("about")}>About me</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("projects")}>Projects</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("faq")}>FAQ</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contact")}>Contact me</a>
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
