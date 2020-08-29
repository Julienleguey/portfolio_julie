import React from "react";
import classnames from "classnames";

const Button = ({
  type,
  onClick,
  link,
  color,
  size,
  fullWidth,
  outlined,
  btnClassName,
  textClassName,
  disabled,
  children,
  loading
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classnames(
        "d-flex",
        link ? "btn-link" : "btn",
        size,
        fullWidth && "full-width",
        `text-${color} bg-${color} border-${color}`,
        outlined && "outlined",
        btnClassName
      )}
      disabled={loading || disabled}
    >
      <p className={classnames(textClassName, loading && "text-gray")}>
        {children}
      </p>
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  link: false,
  size: "small", // small, large
  fullWidth: false, // width 100% if true
  color: "primary",
  outlined: false,
  textClassName: ""
};

export default Button;
