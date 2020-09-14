import React, { useState, useRef } from "react";
import classnames from "classnames";
import backArrow from "../../images/back-arrow.svg";
import nextArrow from "../../images/next-arrow.svg";

const Carousel = ({ carousel, folder, carouselNbr, projectsCategory }) => {
  const [sliding, setSliding] = useState(false);
  const activeCard = useRef(0);
  const carouselHasName = carousel.name ? true : false;

  function changeCard(direction) {
    setSliding(true);

    const carouselLength = carousel.pictures.length - 1;
    const cardToRemove = document.querySelector(
      `#card-${carouselNbr}-${activeCard.current}`
    );
    let nextActiveIndex;
    if (direction === "left") {
      nextActiveIndex =
        activeCard.current + 1 > carouselLength ? 0 : activeCard.current + 1;
    } else {
      nextActiveIndex =
        activeCard.current - 1 < 0 ? carouselLength : activeCard.current - 1;
    }
    const cardToAdd = document.querySelector(
      `#card-${carouselNbr}-${nextActiveIndex}`
    );

    cardToAdd.classList.add(direction === "left" ? "right" : "left");
    cardToRemove.classList.add(`move-${direction}`);
    cardToAdd.classList.add(`move-${direction}`);

    setTimeout(() => {
      cardToAdd.classList.add("active");
      cardToRemove.classList.add(direction);
      cardToRemove.classList.remove("active");
      cardToAdd.classList.remove(direction === "left" ? "right" : "left");
      cardToRemove.classList.remove(`move-${direction}`);
      cardToAdd.classList.remove(`move-${direction}`);
      activeCard.current = nextActiveIndex;
      setSliding(false);
    }, 600);
  }

  function displayPictures(pictures) {
    return pictures.map((picture, index) => (
      <div
        className={classnames(
          "carousel-card",
          index === activeCard.current && "active"
        )}
        key={index}
        id={`card-${carouselNbr}-${index}`}
      >
        <div className="w-100 h-100 pos-relative">
          <img
            src={require(`../../images/${projectsCategory}${folder}/${
              carouselHasName ? picture : picture.file
            }`)}
            alt={picture.name}
            className="carousel-picture"
          />
        </div>
        {!carouselHasName && (
          <div className="py-3">
            <p
              className="text-center font-size-xs"
              style={{ textTransform: "uppercase", letterSpacing: "2px" }}
            >
              {picture.name}
            </p>
          </div>
        )}
      </div>
    ));
  }

  return (
    <div className="d-flex f-col pos-relative mb-0">
      {carousel && (
        <div className="pictures-container">
          <div style={{ zIndex: -1, opacity: 0 }}>
            <div className="w-100">
              <img
                src={require(`../../images/${projectsCategory}${folder}/${
                  carouselHasName
                    ? carousel.pictures[0]
                    : carousel.pictures[0].file
                }`)}
                alt={carousel.pictures[0].name}
                className="w-100"
              />
            </div>
            {!carouselHasName && (
              <div className="py-3">
                <p
                  className="text-center font-size-xs"
                  style={{ textTransform: "uppercase", letterSpacing: "2px" }}
                >
                  {carousel.pictures[0].name}
                </p>
              </div>
            )}
          </div>
          {displayPictures(carousel.pictures)}
        </div>
      )}

      {carouselHasName && (
        <div className="py-3">
          <p
            className="text-center font-size-xs"
            style={{ textTransform: "uppercase", letterSpacing: "2px" }}
          >
            {carousel.name}
          </p>
        </div>
      )}

      <button
        className="carousel-btn back"
        onClick={() => changeCard("right")}
        disabled={sliding}
      >
        <img src={backArrow} alt="flèche arrière" className="w-3 h-3 pos-b-0" />
      </button>
      <button
        className="carousel-btn forward"
        onClick={() => changeCard("left")}
        disabled={sliding}
      >
        <img src={nextArrow} alt="flèche avant" className="w-3 h-3 pos-b-0" />
      </button>
    </div>
  );
};

export default Carousel;
