import React from "react";
import Marquee from "react-fast-marquee";

import html from "..//..//assets/html.png";
import git from "..//..//assets/git.png";
import python from "..//..//assets/python.png";
import js from "..//..//assets/js.png";
import react from "..//..//assets/react.png";
import tailwind from "..//..//assets/tailwind.png";
import css from "..//..//assets/css.png";
const Skills = [html, css, python, react, js, tailwind, git];

const MySkills = () => {
  return (
    <div className="myskills">
      <div className="container">
        <h1>My Skills</h1>
        <div className="skills">
          <Marquee gradient={false} speed={50}>
            {[...Skills, ...Skills].map((icon, i) => (
              <img
                src={icon}
                width="70px"
                height="70px"
                alt="icon"
                style={{ marginRight: "100px" }}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
