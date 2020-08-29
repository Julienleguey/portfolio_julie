import React from "react";
import Modal from "../Shared/Modal";
import Carousel from "../Shared/Carousel";

const ProjectModal = ({
  open,
  close,
  project,
  displayShortProject,
  projectsCategory
}) => {
  function displayLongDescription(longDescription) {
    return longDescription.map((paragraph, index) => (
      <p key={index} className="font-size-xs font-weight-bolder mb-2">
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
      <div className="w-100 mb-3" key={index}>
        <img
          src={require(`../../images/${projectsCategory}/${folder}/${picture}`)}
          alt=""
          className="w-100"
        />
      </div>
    ));
  }

  return (
    <Modal open={open} close={close} fullHeight>
      {project.project_picture && (
        <div className="p-3">
          {displayShortProject(project, "", true)}
          <div className="pb-4">
            <div className="mb-3">
              <p
                style={{ textTransform: "uppercase" }}
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
            <p className="font-size-xs font-weight-bolder mb-4">
              {project.project_short_description}
            </p>
            <p className="font-size-xs mb-3">INTENTIONS</p>
            {displayLongDescription(project.intentions)}
          </div>
          {project.carousels !== [] && (
            <div className="pb-4">{displayCarousels(project.carousels)}</div>
          )}
          {project.pictures !== [] && (
            <div>{displayPicturesList(project.pictures)}</div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default ProjectModal;
