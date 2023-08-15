import React, { useState } from "react";
import {GoTriangleDown} from 'react-icons/go'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">Your Logo</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <div className="relative group">
                <button
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  <span>Services<GoTriangleDown/></span>
                </button>
                <div
                  className={`${
                    isServicesOpen ? "block" : "hidden"
                  } absolute z-10 mt-2 transform px-2 w-screen max-w-xs sm:px-0 sm:ml-4 sm:max-w-sm lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white p-7">
                      <a
                        href="#"
                        className="text-gray-900 hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"
                      >
                        Service 1
                      </a>
                      <a
                        href="#"
                        className="text-gray-900 hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"
                      >
                        Service 2
                      </a>
                      {/* Add more service links as needed */}
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* Button icon */}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        {/* Mobile menu content */}
      </div>
    </nav>
  );
};

export default Navbar;
