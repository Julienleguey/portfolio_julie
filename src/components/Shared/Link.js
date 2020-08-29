import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({
  className,
  isButton,
  size,
  fullWidth,
  color,
  outlined,
  textClassName,
  children,
  ...props
}) => {
  return (
    // <Link className={`link ${className}`} {...props}>
    <Link
      className={`${
        !isButton
          ? "link"
          : `btn ${size} ${
              fullWidth ? "full-width" : ""
            } text-${color} bg-${color} border-${color} ${
              outlined ? "outlined" : ""
            }`
      } ${className}`}
      {...props}
    >
      {!isButton ? children : <p className={textClassName}>{children}</p>}
    </Link>
  );
};

CustomLink.defaultProps = {
  isButton: false,
  size: "small", // small, large
  fullWidth: false, // width 100% if true
  color: "primary",
  outlined: false,
  textClassName: ""
};

export default CustomLink;
