import React from "react";

const DropDown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 w-screen mt-14 text-center items-center cool-bg fixed "
          : "hidden"
      }
      onClick={toggle}
    >
      <a href="#about" className="p-4 hover:text-gray-200" to="/">
        About
      </a>
      <a
        href="#coding"
        className="p-4 hover:text-gray-200"
        to="/codingPortfolio"
      >
        Coding Portfolio
      </a>
      <a href="#resume" className="p-4 hover:text-gray-200" to="/resume">
        Resume
      </a>
      <a href="#contact" className="p-4 hover:text-gray-200" to="/contactMe">
        Contact Me
      </a>
    </div>
  );
};

export default DropDown;
