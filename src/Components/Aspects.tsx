import React from "react";


const Aspects:React.FC=()=>{
    return(
        <div className="min-h-screen bg-blue-400 py-20 px-10">
            <div className="flex flex-col items-center justify-center gap-3 mb-6">
            <h1 className="text-white font-bold text-5xl">How It Works</h1>
            <p className="font-semibold text-white text-3xl">Get your documents printed on four steps</p>
            </div>
           
                {/* <p className="text-lg text-gray-200 mb-12 max-w-2xl">
                    Fast, reliable, and hassle-free document printing at your fingertips.
                    Customize your printing preferences and get exactly what you need.
                    </p> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-xl mb-3 text-blue-600">Upload Files</h3>
                            <p className="text-gray-600">Upload your document, image, or take a picture on your camera.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-xl mb-3 text-blue-600">Choose Options</h3>
                            <p className="text-gray-600">Select the print preferences like color, size, and single/double-sided.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-xl mb-3 text-blue-600">Find Location</h3>
                            <p className="text-gray-600">Get matched with the nearest print shops based on your location.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-xl mb-3 text-blue-600">Print and Pick Up</h3>
                            <p className="text-gray-600">Pay online and get your prints immediately or schedule pickup.</p>
                        </div>
                        <button className="">Start Printing Now</button>
                        </div>
                </div>
                    
 )
}

export default Aspects;


//  <h2 className="text-5xl font-bold mb-2 text-white">
//                 Print <span className="text-yellow-300">Smarter</span> with Printify
//                 </h2>
