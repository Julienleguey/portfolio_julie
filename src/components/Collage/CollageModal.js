import React from "react";
import Modal from "../Shared/Modal";

const CollageModal = ({ collage, open, close, frenchDate }) => {
  return (
    <Modal open={open} close={close}>
      {collage.file && (
        <div className="p-3">
          <div className="w-100">
            <img
              src={require(`../../images/collages/${collage.file}`)}
              alt={collage.name}
              className="w-100"
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
      )}
    </Modal>
  );
};

export default CollageModal;
