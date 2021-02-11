import React from 'react';
import {Link} from 'react-router-dom'

const DropDown = ({isOpen, toggle }) => {
    return (
<div className={isOpen ? "grid grid-rows-4 text-center items-center cool-bg text-white" : "hidden"} onClick={toggle}>
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
    )
}

export default DropDown