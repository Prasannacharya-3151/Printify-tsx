import React from "react";
import printifyLogo from "../assets/printify-logo.png"

const Navbar : React.FC = () =>{
    return (
        <div>
            <div className="bg-blue-400 text-white text-center py-3 text-xs">
                Fast and Reliable Printing Services 
                </div>
                <nav className="flex justify-between items-center p-2 mr-50">
            <div className="flex items-center ml-45">
             <img src={printifyLogo} alt="printify Logo" className="w-16 h-16" />
             <h1 className="text-3xl font-bold">Printify</h1>
            </div>
            <ul className="flex gap-6 text-base font-medium">
                <button className="hover:bg-blue-400 hover:text-white text-gray-500 px-4 py-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Home</button>
                <button className="hover:bg-blue-400 hover:text-white text-gray-500 px-4 py-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Services</button>
                <button className="hover:bg-blue-400 hover:text-white text-gray-500 px-4 py-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Pricing</button>
                <button className="hover:bg-blue-400 hover:text-white text-gray-500 px-4 py-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Order Now</button>
            </ul>
            </nav>
            </div>

    );
};

export default Navbar;