import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-14 text-white">
      <Link to="/" className="pl-8">
        Alex Laursen
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
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
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/codingPortfolio">
          Coding Portfolio
        </Link>
        <Link className="p-4" to="/resume">
          Resume
        </Link>
        <Link className="p-4" to="/videoProduction">
          Video Production
        </Link>
        <Link className="p-4" to="/contactMe">
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
