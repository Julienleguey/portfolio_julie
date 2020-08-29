import React, { useState } from "react";
import classnames from "classnames";
import Link from "../Shared/Link";
import Button from "../Shared/Button";

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  function closeModals() {
    setMenuOpen(false);
    setProjectsOpen(false);
  }

  return (
    <div
      className={classnames(
        "w-100 d-flex pos-relative bg-lighter pt-0 pt-md-10"
      )}
    >
      <div className="flex-1 py-5 px-4 d-flex jc-sb">
        <h5 className="letter-spacing-title">JULIE HARMEGNIES</h5>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="header-menu-container"
        >
          <div className={classnames("header-menu", menuOpen && "open")} />
        </div>
      </div>
      <div
        className={classnames("mobile-menu", menuOpen ? "d-flex" : "d-none")}
      >
        <div className="flex-1 pr-6">
          <div style={{ marginTop: "15vh" }} className="d-flex f-col">
            <Link
              to="/"
              className="font-weight-bolder letter-spacing-title ml-auto pb-4"
              onClick={closeModals}
            >
              accueil
            </Link>

            <div className="d-flex f-col pb-4">
              <Button
                link
                btnClassName={classnames(
                  "ml-auto projects-btn",
                  projectsOpen && "open"
                )}
                textClassName="font-weight-bolder letter-spacing-title"
                onClick={() => setProjectsOpen(!projectsOpen)}
              >
                projets
              </Button>
              <div
                className={classnames(
                  "d-flex f-col projects-list",
                  projectsOpen && "open"
                )}
              >
                <Link
                  to="/architecture"
                  className="font-weight-bolder letter-spacing-title ml-auto py-3 font-size-xs"
                  onClick={closeModals}
                >
                  architecture
                </Link>
                <Link
                  to="/design"
                  className="font-weight-bolder letter-spacing-title ml-auto pb-3 font-size-xs"
                  onClick={closeModals}
                >
                  design
                </Link>
                <Link
                  to="/graphisme"
                  className="font-weight-bolder letter-spacing-title ml-auto pb-3 font-size-xs"
                  onClick={closeModals}
                >
                  graphisme
                </Link>
                <Link
                  to="/collage"
                  className="font-weight-bolder letter-spacing-title ml-auto font-size-xs"
                  onClick={closeModals}
                >
                  collages
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="font-weight-bolder letter-spacing-title ml-auto pb-4"
              onClick={closeModals}
            >
              à propos
            </Link>
            <Link
              to="/contact"
              className="font-weight-bolder letter-spacing-title ml-auto pb-4"
              onClick={closeModals}
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
