import React from "react";
import world from "../../assets/world.png";

const Banner = () => {
  return (
    <div className="banner">
      <span className="bluri"></span>
      <div className="container">
        <h1>
          Front End <span>Developer</span>
        </h1>
        <p>
          Front-End Developer passionate about building responsive,
          high-performance web applications with modern technologies, focusing
          on clean code, great user experience, and visually engaging
          interfaces.
        </p>
        <div className="row">
          <button>
            Projects <img src={world} alt="world" width="15px" height="15px" />
          </button>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
