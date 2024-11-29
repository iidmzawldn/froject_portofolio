import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Portfolio</h1>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden block focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute sm:relative sm:flex sm:space-x-4 bg-gray-800 sm:bg-transparent w-full sm:w-auto left-0 top-16 sm:top-auto sm:opacity-100 sm:translate-y-0 transform transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <li className="p-2 sm:p-0">
            <a href="#home" className="block hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="p-2 sm:p-0">
            <a href="#projects" className="block hover:text-gray-400">
              Projects
            </a>
          </li>
          <li className="p-2 sm:p-0">
            <a href="#skills" className="block hover:text-gray-400">
              Skills
            </a>
          </li>
          <li className="p-2 sm:p-0">
            <a href="#contact" className="block hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
