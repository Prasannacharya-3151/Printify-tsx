import React, { useState } from "react";
import printifyLogo from "../assets/printify-logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState("false");

  return (
    <div>
      <div className="bg-blue-400 text-white text-center py-3 text-xs">
        Fast and Reliable Printing Services
      </div>

      <nav className="flex justify-between items-center px-8 md:px-16 lg:px-24 py-4 flex-wrap bg-white shadow">
        {/* Left side logo + title */}
        <div className="flex items-center space-x-3">
          <img src={printifyLogo} alt="printify-Logo.png" className="w-14 h-14" />
          <h1 className="text-2xl font-bold text-gray-800">Printify</h1>
        </div>

        {/* Hamburger for mobile */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-400 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-8 text-base font-medium">
          {["Home", "Services", "Pricing", "Order Now"].map((item) => (
            <button
              key={item}
              className="hover:bg-blue-400 hover:text-white text-gray-600 px-4 py-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              {item}
            </button>
          ))}
        </ul>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md py-3 px-5 space-y-4 absolute w-full z-10">
          {["Home", "Services", "Pricing", "Order Now"].map((item) => (
            <button
              key={item}
              className="block w-full text-left hover:bg-blue-400 hover:text-white text-gray-700 px-4 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
