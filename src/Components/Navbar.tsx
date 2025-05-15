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
     
        <div className="flex items-center space-x-3">
          <img src={printifyLogo} alt="printify-Logo.png" className="w-14 h-14" />
          <h1 className="text-2xl font-bold text-gray-800">Printify</h1>
        </div>

        <div className="hidden lg:flex items-center gap-15">
          <a href="#home" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-400 hover:decoration-2 hover:underline-offset-20">Home</a>
          <a href="#Services" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-400 hover:decoration-2 hover:underline-offset-20">Services</a>
          <a href="#Pricing" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-400 hover:decoration-2 hover:underline-offset-20">Pricing</a>
          <a href="#Order Now" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-400 hover:decoration-2 hover:underline-offset-20">Order Now</a>
          <div className="ml-30 space-x-4">
          <button 
          onClick={()=>window.open("https://www.xerofy.net/signup","_self")} className="text-gray-600 rounded border border-gray-500 px-6 py-2 hover:bg-gray-100">Sign Up</button>
          <button 
          onClick={()=>window.open("https://www.xerofy.net/signin","_self")} className="bg-blue-400 text-white px-8 py-2 rounded hover:bg-blue-500">Login</button>
        </div>
        </div>

        <div className="lg:hidden">
          <button
          onClick={()=> setIsOpen(!isOpen)}>
            <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        </nav>
           {isOpen && (
        <div className="lg:hidden bg-white shadow p-3 px-5 space-y-5">
          <a href="#home" className="block text-gray-600 hover:text-blue-400">Home</a>
          <a href="#services" className="block text-gray-600 hover:text-blue-400">Services</a>
          <a href="#pricing" className="block text-gray-600 hover:text-blue-400">Pricing</a>
          <a href="#order" className="block text-gray-600 hover:text-blue-400">Order Now</a>
          <button 
          onClick={()=>window.open("https://www.xerofy.net/signup","_self")} 
          className="block w-full text-left text-gray-600 px-4 py-2 rounded hover:bg-gray-100">Sign Up</button>
          <button
          onClick={()=> window.open("https://www.xerofy.net/signin","_self")}
          className="block w-full text-left bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">Login</button>
        </div>
      )}
       </div>
  );
};

export default Navbar;
