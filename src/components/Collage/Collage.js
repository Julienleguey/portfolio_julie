import React, { useState } from "react";
import collages from "./collage.json";
// import CollageModal from "./CollageModal";
import ProjectModal from "../Projects/ProjectModal";

const Collage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [collageInModal, setCollageInModal] = useState({});

  function openCollageModal(collageToDisplay) {
    setCollageInModal(collageToDisplay);
    setOpenModal(true);
  }

  function frenchDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);

    return `${day}/${month}/${year}`;
  }

  function displayPictures() {
    return collages.map((collage, index) => (
      <div
        className="project-card"
        key={index}
        onClick={() => openCollageModal(collage)}
      >
        <div className="center-image-container">
          <img
            src={require(`../../images/collages/${collage.project_picture}`)}
            alt={collage.name}
            className="center-image"
          />
        </div>
        <div className="project-card-name-container">
          <p
            style={{ textTransform: "uppercase", letterSpacing: "2px" }}
            className="font-weight-bolder font-size-sm mt-auto"
          >
            {collage.project_name}
          </p>
          <p
            style={{ textTransform: "uppercase", letterSpacing: "2px" }}
            className="font-weight-bolder font-size-sm"
          >
            {frenchDate(collage.date)}
          </p>
        </div>
      </div>
    ));
  }
  return (
    <div className="px-3 project-list">
      {displayPictures()}
      {/*<CollageModal
        open={openModal}
        close={() => setOpenModal(false)}
        collage={collageInModal}
        frenchDate={frenchDate}
      />*/}
      <ProjectModal
        open={openModal}
        close={() => setOpenModal(false)}
        project={collageInModal}
        projectsCategory="collages"
      />
    </div>
  );
};

export default Collage;
