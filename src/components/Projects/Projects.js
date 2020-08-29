import React, { useState } from "react";
import classnames from "classnames";
import ProjectModal from "./ProjectModal";

const Projects = ({ projectsCategory, projects }) => {
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState({});

  function openProjectModal(projectToDisplay) {
    setProject(projectToDisplay);
    setOpenModal(true);
  }

  function displayProjects() {
    return projects.map((projectToDisplay, index) => {
      return displayShortProject(projectToDisplay, index, false);
    });
  }

  function displayShortProject(projectToDisplay, index, inModal) {
    const folder = projectToDisplay.project_folder;

    return (
      <div
        className={classnames("d-flex f-col w-100", inModal ? "mb-3" : "mb-5")}
        key={index}
      >
        <div
          className={classnames("w-100", inModal ? "mb-5" : "mb-1")}
          onClick={() => openProjectModal(projectToDisplay)}
        >
          <img
            src={require(`../../images/${projectsCategory}/${folder}/${projectToDisplay.project_picture}`)}
            alt={projectToDisplay.project_name}
            className="w-100"
          />
        </div>
        <p
          style={{ textTransform: "uppercase" }}
          className="font-weight-bolder font-size-sm"
        >
          {projectToDisplay.project_name}
        </p>
        <p
          style={{ textTransform: "uppercase" }}
          className="font-weight-bolder font-size-sm"
        >
          {projectToDisplay.project_subcaption}
        </p>
      </div>
    );
  }

  return (
    <div className="d-flex f-col w-100 bg-lighter flex-1">
      <div className="px-3">{displayProjects()}</div>
      <ProjectModal
        open={openModal}
        close={() => setOpenModal(false)}
        project={project}
        displayShortProject={displayShortProject}
        projectsCategory={projectsCategory}
      />
    </div>
  );
};

export default Projects;
