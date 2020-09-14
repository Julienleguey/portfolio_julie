import React from "react";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";

const SmallContact = () => (
  <div className="pt-6 pt-sm-10 px-3 pb-6 px-sm-4 d-flex f-col f-sm-row">
    <div className="mb-4 mb-sm-0 flex-1">
      <p className="font-weight-bolder mb-4" style={{ letterSpacing: "2px" }}>
        CONTACT
      </p>
      <p className="font-size-xs mb-2">julie.harmegnies@gmail.com</p>
      <p className="font-size-xs mb-2">(+33) 6 34 07 07 82</p>
      <p className="font-size-xs">3, rue Alfred de Vigny, 92400 Courbevoie</p>
    </div>

    <div className="d-flex flex-1">
      <div className="d-flex mt-auto">
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

export default SmallContact;
