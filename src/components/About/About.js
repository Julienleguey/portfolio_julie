import React from "react";
import profilePicture from "../../images/profile_picture.jpg";
import resume from "./resume.pdf";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";

const About = () => {
  return (
    <div className="flex-1 bg-lighter">
      <div className="py-5 px-4">
        <div className="w-100">
          <img
            src={profilePicture}
            alt="Julie Harmegnies"
            className="w-100 mb-3"
          />
        </div>
        <p style={{ textTransform: "uppercase" }} className="font-size-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="mb-5">
          <p className="font-size-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="mb-8">
          <a
            href={resume}
            download="CV Julie Harmegnies.pdf"
            className="font-weight-bolder font-size-sm"
          >
            Télécharger mon CV
          </a>
        </div>

        <div className="mb-5">
          <h5 className="letter-spacing-title mb-5">CONTACT</h5>
          <p className="font-size-sm mb-2">julie.harmegnies@gmail.com</p>
          <p className="font-size-sm mb-2">(+33) 6 34 07 07 82</p>
          <p className="font-size-sm">
            3, rue Alfred de Vigny, 92400 Courbevoie
          </p>
        </div>

        <div className="d-flex">
          <a
            href="https://www.instagram.com/julieharmegnies"
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5 mr-2"
          >
            <img src={instagram} alt="instagram" className="w-100" />
          </a>

          <a
            href="https://www.linkedin.com/in/julie-harmegnies/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5"
          >
            <img src={linkedin} alt="linkedin" className="w-100" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
