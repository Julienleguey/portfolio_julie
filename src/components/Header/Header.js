import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <div className="w-100">
      <div className="d-none d-lg-flex">
        <HeaderDesktop />
      </div>
      <div className="d-flex d-lg-none">
        <HeaderMobile />
      </div>
    </div>
  );
};

export default Header;
