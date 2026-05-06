import React from "react";
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import communication from "../../assets/communication.png";

const ContactMe = () => {
  const scrollToSection = (id) => {
    document.getElementById("menuCheckbox").checked = false;
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="contact">
      <div className="container" id="contact">
        <h1>CONTACT ME</h1>
        <div className="rowcont">
          <div className="col1">
            <h2>Erti Rushiti</h2>
            <div className="row">
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={github} alt="github" />
              <img src={whatsapp} alt="whatsapp" />
              <img src={linkedin} alt="linkedin" />
              <img src={communication} alt="communication" />
            </div>
          </div>
          <div className="col">
            <h3>Email</h3>
            <p>ertirushitix1@gmail.com</p>
          </div>
          <div className="col">
            <h3>Phone number</h3>
            <p>+383 44 355 032</p>
          </div>
        </div>
        <hr></hr>
        <div className="footer-row">
          <div>
            <ul>
              <li>
                <Link onClick={() => scrollToSection("home")}>Home</Link>
              </li>
              <li>
                <Link onClick={() => scrollToSection("about")}>About me</Link>
              </li>
              <li>
                <Link onClick={() => scrollToSection("projects")}>
                  Projects
                </Link>
              </li>
              <li>
                <Link onClick={() => scrollToSection("faq")}>FAQ</Link>
              </li>
              <li>
                <Link onClick={() => scrollToSection("contact")}>
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
          <div>© Copyright 2026,Erti Rushiti</div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
