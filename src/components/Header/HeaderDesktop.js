import React, { useState } from "react";
import Link from "../Shared/Link";
import Button from "../Shared/Button";
import classnames from "classnames";

const HeaderDesktop = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  function closeModals() {
    setProjectsOpen(false);
  }

  return (
    <div className="w-100 d-flex">
      <div className="d-flex flex-1 px-4 pt-8 pb-12">
        <div className="d-flex jc-sb flex-1">
          <div className="flex-1 d-flex" style={{ verticalAlign: "top" }}>
            <Link
              to="/"
              className="font-weight-bolder mr-5 letter-spacing-title font-size-xs"
              style={{ verticalAlign: "top" }}
              onClick={closeModals}
            >
              accueil
            </Link>
            <Link
              to="/about"
              className="font-weight-bolder mr-5 letter-spacing-title font-size-xs"
              style={{ verticalAlign: "top" }}
              onClick={closeModals}
            >
              à propos
            </Link>
            <Link
              to="/contact"
              className="font-weight-bolder mr-5 letter-spacing-title font-size-xs"
              onClick={closeModals}
            >
              contact
            </Link>

            <div className="d-flex">
              <Button
                link
                btnClassName={classnames(
                  "ml-auto projects-btn",
                  projectsOpen && "open"
                )}
                textClassName="font-weight-bolder letter-spacing-title font-size-xs"
                onClick={() => setProjectsOpen(!projectsOpen)}
              >
                projets
              </Button>

              <div className="d-flex pos-relative">
                <div
                  className={classnames(
                    "d-flex f-col projects-list ml-3 pos-absolute",
                    projectsOpen && "open"
                  )}
                >
                  <Link
                    to="/architecture"
                    className="font-weight-bolder letter-spacing-title pb-1 font-size-xs"
                    onClick={closeModals}
                  >
                    architecture
                  </Link>
                  <Link
                    to="/design"
                    className="font-weight-bolder letter-spacing-title pb-1 font-size-xs"
                    onClick={closeModals}
                  >
                    design
                  </Link>
                  <Link
                    to="/graphisme"
                    className="font-weight-bolder letter-spacing-title pb-1 font-size-xs"
                    onClick={closeModals}
                  >
                    graphisme
                  </Link>
                  <Link
                    to="/collage"
                    className="font-weight-bolder letter-spacing-title font-size-xs"
                    onClick={closeModals}
                  >
                    collages
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-weight-bolder letter-spacing-title">
              JULIE HARMEGNIES
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
