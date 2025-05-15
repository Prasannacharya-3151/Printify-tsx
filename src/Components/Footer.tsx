import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="text-center bg-blue-800 py-15 mt-10">
        <h1 className="text-5xl font-bold text-white">Ready to Start Printing?</h1>
        <p className="py-10 text-2xl font-semibold text-gray-400">Upload your files now and get your prints in minutes.it's that simple</p>
        <button className="text-blue-800 font-semibold py-3 rounded-lg bg-white px-5 hover:scale-105 transition-transform duration-150 ease-in-out">Get Started</button>
        </div>
        
           <hr className="border-t-2 border-gray-200 my-10 w-full mx-auto"/>
        <div className="flex flex-wrap justify-center gap-20 p-6 mt-3">
          <div className="flex flex-col">
            <div className="">
          <h1 className="text-3xl font-semibold">Printify</h1>
          <p className="mt-2 text-gray-500 text-sm md:text-base leading-relaxed">"Printify offers fast, reliable, and hassle-free printing services<br /> 
          for all your needs.From documents to custom designs, we deliver <br />
          professional quality at affordable prices.Upload your files now and <br />
          experience printing made simple, quick, and convenient."</p>
          </div>
          </div>
          <div className="flex flex-col items-center gap-4">
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
          <hr className="border-t-2 border-gray-200 w-full mx-auto"/>
        </div>
        <div className="text-center py-4 bg-blue-950 text-gray-400 text-sm">
        © 2024 Ace Printify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// © 2024 Ace Printify
