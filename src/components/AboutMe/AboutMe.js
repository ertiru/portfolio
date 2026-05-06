import React from "react";

import arrow from "../../assets/arrow.png";

const AboutMe = () => {
  return (
    <div className="me" id="about">
      <div className="container">
        <div className="aboutme-wrapper">
          <div className="aboutme">
            <div className="colbox">
              <div className="row1">
                <div className="box">
                  <h1>+1 Years</h1>
                  <p>Of experience</p>
                  <p>
                    1+ year of experience in front-end development, building
                    responsive and user-friendly interfaces.
                  </p>
                </div>
                <div className="box">
                  <h1>+10</h1>
                  <p>Projects</p>
                  <p>
                    Completed 10+ front-end development projects while
                    continuously improving my skills as a developer.
                  </p>
                </div>
              </div>
              <div className="box">
                <h1>+5</h1>
                <p>Certificates</p>
                <p>
                  5+ certifications showcasing my dedication to professional
                  growth and development.
                </p>
              </div>
            </div>
            <div className="foto">
              <img src={arrow} alt="arrow" width="39px" height="39px" />
              <div>
                <p>Let's develop together</p>

                <button>Get in touch →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
