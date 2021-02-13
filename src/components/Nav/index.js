import React from "react";

const Nav = ({ toggle }) => {
  return (
    <nav className="flex fixed w-screen justify-between items-center h-14 cool-bg">
      <a href="#top" to="/" className="pl-8">
        <b>Alex Laursen</b>
      </a>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
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
    </nav>
  );
};

export default Nav;
