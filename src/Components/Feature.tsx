import React from "react";
import secureIcon from "../assets/Secure-icon.png"

const PricingSection:React.FC=()=>{ 


  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-10 bg-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Features</h2>
        <p className="text-gray-600 max-w-xl mx-auto font-semibold text-2xl">
         Everything you need for quick and easy printing
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
          <img src={secureIcon} alt="secure-icon" className="w-6 h-6"/>
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Secure Upload</h3>
          <p className="text-gray-600 mb-4">Your files are encrypted and securely processor for printing</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Real-Time Tracking</h3>
          <p className="text-gray-600 mb-4">Track your print order’s status live from upload to delivery.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Easy Payment</h3>
          <p className="text-gray-600 mb-4">Multiple payment options for a hassle-free transaction experience.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Location Services</h3>
          <p className="text-gray-600 mb-4">Find the nearest printing center for quick and easy pickup.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Chat Support</h3>
          <p className="text-gray-600 mb-4">Instantly connect with shop owners or support for queries.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Automatic Reformating</h3>
          <p className="text-gray-600 mb-4">Your files are auto-adjusted to match print requirements perfectly.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
