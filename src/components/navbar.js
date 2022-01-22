import React from "react";
import logo from "../images/logo.png";
export default function NavBar() {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </nav>
  );
}
