import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10">
      <div className="text-center bg-blue-800 py-14 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Ready to Start Printing?</h1>
        <p className="py-6 md:py-10 text-lg font-semibold text-gray-400">Upload your files now and get your prints in minutes.it's that simple</p>
        <button className="text-blue-800 font-semibold py-3 rounded-lg bg-white px-6 hover:scale-105 transition-transform duration-150 ease-in-out">Get Started</button>
        </div>
        
           <hr className="border-t-2 border-gray-200 my-10 w-full mx-auto"/>
        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-10 p-6 mx-auto max-w-7xl">
          
            <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4">Printify</h1>
          <p className="mt-2 text-gray-500 text-sm md:text-base leading-relaxed">"Printify offers fast, reliable, and hassle-free printing services<br /> 
          for all your needs.From documents to custom designs, we deliver <br />
          professional quality at affordable prices.Upload your files now and <br />
          experience printing made simple, quick, and convenient."
          </p>
          </div>
          
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col items-start gap-3">
            <h1 className="font-semibold mb-3">COMPANY</h1>
             <a href="#aboutus" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-800 hover:decoration-2 hover:underline-offset-10 ">About us</a>
             <a href="#carrear" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-800 hover:decoration-2 hover:underline-offset-10 ">Carrear</a>
            <a href="#services" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-800 hover:decoration-2 hover:underline-offset-10">Services</a>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold mb-3">SERVICES</h1>
            <a href="#normal" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-800 hover:decoration-2 hover:underline-offset-10">Normal xerox</a>
            <a href="#color" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-800 hover:decoration-2 hover:underline-offset-10">Color xerox</a>
            <a href="#uplaod" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-800 hover:decoration-2 hover:underline-offset-10">Upload and print</a>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold mb-3">SUPPORT</h1>
             <a href="#help" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-800 hover:decoration-2 hover:underline-offset-10">Help center</a>
             <a href="#contact" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-800 hover:decoration-2 hover:underline-offset-10">Contact us</a>
             <a href="#tarmandpolicy" className="text-gray-600 font-semibold no-underline hover:underline hover:decoration-blue-800 hover:decoration-2 hover:underline-offset-10">Term and policies</a>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200 w-full mx-auto mt-5"/>
  <div className="text-center py-4 bg-blue-950 text-gray-400 text-sm">
    © 2024 Ace Printify. All rights reserved.
    </div>
    </footer>
  );
};

export default Footer;

// © 2024 Ace Printify
