import React from "react";
import classnames from "classnames";

const Modal = ({ open, close, children, fullHeight }) => (
  <div id="modal-container" className={classnames(open ? "d-flex" : "d-none")}>
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

export default Modal;
