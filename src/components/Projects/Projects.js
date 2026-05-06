import React from "react";
import { ProjectsData } from "./ProjectsData";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container" id="projects">
        <h1>Projects</h1>
        <div className="cards">
          {ProjectsData.map((project, index) => (
            <div className="card">
              <img src={project.photo} alt={project.name} />
              <div className="row2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {project.name}
                </a>
                <p>{project.year}</p>
              </div>
              <p className="projectdesc">{project.desc}</p>
              {project.pl.map((pl, index) => (
                <span>{pl}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
