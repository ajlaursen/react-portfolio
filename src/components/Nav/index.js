import React from "react";
import { Link } from "react-router-dom";

const Nav = ({toggle}) => {
  return (
    <nav className="flex fixed w-screen justify-between items-center h-14 text-white cool-bg">
      <Link to="/" className="pl-8">
        Alex Laursen
      </Link>
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
        <Link className="p-4 hover:text-gray-200" to="/">
          Home
        </Link>
        <Link className="p-4 hover:text-gray-200" to="/codingPortfolio">
          Coding Portfolio
        </Link>
        <Link className="p-4 hover:text-gray-200" to="/resume">
          Resume
        </Link>
        <Link className="p-4 hover:text-gray-200" to="/videoProduction">
          Video Production
        </Link>
        <Link className="p-4 hover:text-gray-200" to="/contactMe">
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
