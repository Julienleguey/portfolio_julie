import React, { useState } from "react";
import collages from "./collage.json";
import CollageModal from "./CollageModal";

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
      <div className="px-3 pb-4" key={index}>
        <div
          className="collage-container"
          onClick={() => openCollageModal(collage)}
        >
          <img
            src={require(`../../images/collages/${collage.file}`)}
            alt={collage.name}
            className="collage-picture"
          />
        </div>
        <div>
          <p
            className="font-weight-bolder font-size-sm"
            style={{ textTransform: "uppercase" }}
          >
            {collage.name}
          </p>
          <p
            className="font-weight-bolder font-size-sm"
            style={{ textTransform: "uppercase" }}
          >
            {frenchDate(collage.date)}
          </p>
        </div>
      </div>
    ));
  }
  return (
    <div className="d-flex f-col w-100 bg-lighter flex-1">
      {displayPictures()}
      <CollageModal
        open={openModal}
        close={() => setOpenModal(false)}
        collage={collageInModal}
        frenchDate={frenchDate}
      />
    </div>
  );
};

export default Collage;
