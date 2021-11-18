import React from "react";
import logo from "../images/react.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="reactlogo" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
