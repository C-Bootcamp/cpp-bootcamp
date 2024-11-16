import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-lg z-[10] py-10">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              className="z-[3] h-32 mix-blend-screen filter saturate-150 contrast-125"
              src="https://i.redd.it/3d-rendered-the-cyberpunk-logo-using-blender-v0-khopj82wqee91.png?width=1920&format=png&auto=webp&s=f42dbd8f5c04aedb9ba9291c1ba4d679029cc1f3"
              alt="Logo"
            />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none z-[20]"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6 z-[20]" />
              ) : (
                <FaBars className="h-6 w-6 z-[20]" />
              )}
            </button>
          </div>

          <div className="hidden md:flex space-x-4 text-2xl text-white">
            <a href="#home" className="z-[12] hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="z-[12] hover:text-blue-500">
              About
            </a>
            <a href="#services" className="z-[12] hover:text-blue-500">
              Services
            </a>
            <a href="#contact" className="z-[12] hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li>
              <a
                href="#home"
                className="block z-[10] text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block z-[10] text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block z-[10] text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block z-[10] text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
