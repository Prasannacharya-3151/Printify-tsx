import React from "react";
import oneImage from "../assets/one-image.png";
import twoImage from "../assets/two-image.png";
import threeImage from "../assets/three-image.png";
import fourImage from"../assets/four-image.png";


const Aspects:React.FC=()=>{
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-400 py-20 px-10">
            <div className="flex flex-col items-center justify-center gap-3 mb-16">
            <h1 className="text-white font-bold text-4xl md:text-5xl">How It Works</h1>
            <p className="font-semibold text-white text-2xl md:text-3xl mb-10">Get your documents printed on four steps</p>
            </div>
           
                {/* <p className="text-lg text-gray-200 mb-12 max-w-2xl">
                    Fast, reliable, and hassle-free document printing at your fingertips.
                    Customize your printing preferences and get exactly what you need.
                    </p> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <img src={oneImage} alt="one-image" className="w-18 h-18 mx-auto mb-5"/>
                            <h3 className="font-bold text-xl mb-3 text-blue-400">Upload Files</h3>
                            <p className="text-gray-600">Upload your document, image, or take a picture on your camera.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                             <img src={twoImage} alt="two-image" className="w-18 h-18 mx-auto mb-5"/>
                            <h3 className="font-bold text-xl mb-3 text-blue-400">Choose Options</h3>
                            <p className="text-gray-600">Select the print preferences like color, size, and single/double-sided.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                             <img src={threeImage} alt="three-image" className="w-18 h-18 mx-auto mb-5"/>
                            <h3 className="font-bold text-xl mb-3 text-blue-400">Find Location</h3>
                            <p className="text-gray-600">Get matched with the nearest print shops based on your location.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                             <img src={fourImage} alt="four-image" className="w-18 h-18 mx-auto mb-5"/>
                            <h3 className="font-bold text-xl mb-3 text-blue-400">Print and Pick Up</h3>
                            <p className="text-gray-600">Pay online and get your prints immediately or schedule pickup.</p>
                        </div>
                        </div>
                          <button className="bg-white text-blue-500 px-6 py-3 rounded-xl h-12 font-semibold transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex justify-center mx-auto mt-14">Start Printing Now</button>
                </div>
                    
 )
}

export default Aspects;


//  <h2 className="text-5xl font-bold mb-2 text-white">
//                 Print <span className="text-yellow-300">Smarter</span> with Printify
//                 </h2>
