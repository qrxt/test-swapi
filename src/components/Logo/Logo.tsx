import React from "react";
import logoImage from "assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

function LogoImage() {
  return <img src={logoImage} width="150" height="80" alt="Application logo" />;
}

function Logo() {
  const { pathname } = useLocation();

  return pathname === "/" ? (
    <LogoImage />
  ) : (
    <Link to="/">
      <LogoImage />
    </Link>
  );
}

export default Logo;
