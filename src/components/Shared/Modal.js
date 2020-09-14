import React, { useState, useEffect } from "react";
import classnames from "classnames";

const Modal = ({ open, close, children, fullHeight }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (open) {
      setScroll(window.scrollY);
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "static";
      window.scrollTo(0, scroll);
    }
    // eslint-disable-next-line
  }, [open]);

  return (
    <div
      id="modal-container"
      className={classnames(open ? "d-flex" : "d-none")}
    >
      {!fullHeight && <div id="modal-bg" onClick={close} />}
      <div
        id="modal-box"
        className={classnames("pos-relative", fullHeight && "full-height")}
      >
        <div id="modal-close-container" onClick={close}>
          <div id="close" />
        </div>
        <div id="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
