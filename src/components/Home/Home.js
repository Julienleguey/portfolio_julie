import React from "react";
import img1 from "../../images/home/01.jpg";
import img2 from "../../images/home/02.jpg";
import img3 from "../../images/home/03.jpg";
import img4 from "../../images/home/04.jpg";

const Home = () => {
  return (
    <div className="d-flex f-col flex-1">
      <div id="home-small">
        <div className="center-image-container">
          <img src={img1} alt="caverne 1" className="center-image" />
        </div>
      </div>

      <div className="d-none d-sm-flex px-3">
        <div id="home-img-container">
          <div className="w-100">
            <img src={img1} alt="caverne 1" className="w-100" />
          </div>
          <div className="w-100">
            <img src={img2} alt="caverne 2" className="w-100" />
          </div>
          <div className="w-100 d-none d-lg-block">
            <img src={img3} alt="caverne 3" className="w-100" />
          </div>
          <div className="w-100 d-none d-lg-block">
            <img src={img4} alt="caverne 4" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
