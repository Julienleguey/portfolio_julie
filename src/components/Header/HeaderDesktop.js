import React from "react";
// import React, { useState } from "react";
import instagram from "../../images/instagram.svg";
import Link from "../Shared/Link";
import Button from "../Shared/Button";

const HeaderDesktop = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="w-100 d-flex">
      <div className="d-flex flex-1 pl-5 pt-8 pr-10 pb-12">
        <div className="d-flex mr-12">
          <p className="font-weight-bolder mr-5 letter-spacing-title">FR</p>
          <a
            href="https://www.instagram.com/julieharmegnies"
            target="_blank"
            rel="noopener noreferrer"
            className="w-3 h-3"
          >
            <img src={instagram} alt="instagram logo" className="w-100" />
          </a>
        </div>
        <div className="d-flex jc-sb flex-1">
          <div style={{ verticalAlign: "top" }}>
            <Link
              to="/about"
              className="font-weight-bolder mr-12 letter-spacing-title"
              style={{ verticalAlign: "top" }}
            >
              à propos
            </Link>
            <Link
              to="/contact"
              className="font-weight-bolder mr-12 letter-spacing-title"
            >
              contact
            </Link>
            <Button
              link
              textClassName="font-weight-bolder letter-spacing-title"
            >
              projets
            </Button>
          </div>
          <div>
            <h3 className="font-weight-bolder letter-spacing-title">
              JULIE HARMEGNIES
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
