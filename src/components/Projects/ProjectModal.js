import React from "react";
import Modal from "../Shared/Modal";
import Carousel from "../Shared/Carousel";

const ProjectModal = ({ open, close, project, projectsCategory }) => {
  const folder = project.project_folder;

  function frenchDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);

    return `${day}/${month}/${year}`;
  }

  function displayLongDescription(longDescription) {
    return longDescription.map((paragraph, index) => (
      <p key={index} className="font-size-xs mb-2">
        {paragraph}
      </p>
    ));
  }

  function displayCarousels(carousels) {
    return carousels.map((carousel, index) => (
      <Carousel
        carousel={carousel}
        folder={project.project_folder}
        carouselNbr={index}
        key={index}
        projectsCategory={projectsCategory}
      />
    ));
  }

  function displayPicturesList(pictures) {
    const folder = project.project_folder;

    return pictures.map((picture, index) => (
      <div className="w-100 mb-1" key={index}>
        <img
          src={require(`../../images/${projectsCategory}${folder}/${picture}`)}
          alt=""
          className="w-100"
        />
      </div>
    ));
  }

  return (
    <Modal open={open} close={close} fullHeight>
      {project.project_picture && (
        <div className="d-flex">
          <div id="project-modal-container">
            <div id="project-modal-description-container">
              <div id="project-modal-description">
                <div className="d-flex f-col w-100 mb-3">
                  <div className="w-100 mb-3 d-block d-lg-none">
                    <img
                      src={require(`../../images/${projectsCategory}${folder}/${project.project_picture}`)}
                      alt={project.project_name}
                      className="w-100"
                    />
                  </div>
                  <p
                    style={{ textTransform: "uppercase", letterSpacing: "2px" }}
                    className="font-weight-bolder mb-1"
                  >
                    {project.project_name}
                  </p>
                  <p
                    style={{ textTransform: "uppercase", letterSpacing: "2px" }}
                    className="font-weight-bolder"
                  >
                    {project.project_subcaption || frenchDate(project.date)}
                  </p>
                </div>

                <div className="pb-3">
                  <div className="mb-3">
                    <p
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                      }}
                      className="font-size-xs"
                    >
                      {project.project_occasion}
                    </p>
                    <p
                      style={{ textTransform: "uppercase" }}
                      className="font-size-xs"
                    >
                      {project.project_award}
                    </p>
                  </div>
                  <div id="long-description-container">
                    {displayLongDescription(project.intentions)}
                  </div>
                </div>
              </div>
            </div>

            <div id="project-modal-pictures">
              <div className="d-none d-lg-flex">
                <div className="w-100 mb-1">
                  <img
                    src={require(`../../images/${projectsCategory}${folder}/${project.project_picture}`)}
                    alt={project.project_name}
                    className="w-100"
                  />
                </div>
              </div>

              {project.pictures_before.length > 0 && (
                <div className="mb-1">
                  {displayPicturesList(project.pictures_before)}
                </div>
              )}
              {project.carousels.length > 0 && (
                <div className="mb-1">
                  {displayCarousels(project.carousels)}
                </div>
              )}
              {project.pictures.length > 0 && (
                <div>{displayPicturesList(project.pictures)}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ProjectModal;
