import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = ({ projectsCategory, projects }) => {
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState({});

  function openProjectModal(projectToDisplay) {
    setProject(projectToDisplay);
    setOpenModal(true);
  }

  function displayProjectsLg() {
    return projects.map((projectToDisplay, index) => {
      return displayProject(projectToDisplay, index);
    });
  }

  function displayProject(projectToDisplay, index) {
    const folder = projectToDisplay.project_folder;

    return (
      <div
        className="project-card"
        key={index}
        onClick={() => openProjectModal(projectToDisplay)}
      >
        <div className="w-100 mb-1">
          <img
            src={require(`../../images/${projectsCategory}${folder}/${projectToDisplay.project_picture_square}`)}
            alt={projectToDisplay.project_name}
            className="w-100"
          />
        </div>
        <div className="project-card-name-container">
          <p
            style={{ textTransform: "uppercase", letterSpacing: "2px" }}
            className="font-weight-bolder font-size-sm mt-auto"
          >
            {projectToDisplay.project_name}
          </p>
          <p
            style={{ textTransform: "uppercase", letterSpacing: "2px" }}
            className="font-weight-bolder font-size-sm"
          >
            {projectToDisplay.project_subcaption}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex f-col w-100 bg-lighter flex-1">
      <div className="px-3 project-list">{displayProjectsLg()}</div>

      <ProjectModal
        open={openModal}
        close={() => setOpenModal(false)}
        project={project}
        projectsCategory={projectsCategory}
      />
    </div>
  );
};

export default Projects;
