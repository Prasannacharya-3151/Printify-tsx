import React from "react";
import Services from "../assets/services-image.png"

const Aspects:React.FC=()=>{
    return(
        <div className="min-h-screen bg-blue-400 py-20 px-10">
            <div className="flex flex-row items-center gap-3 mb-6">
            <img src={Services} alt="services-image" className="w-6 h-6"/>
            <span className="text-white font-semibold text-lg">Services</span>
            </div>
            <h2 className="text-5xl font-bold mb-2 text-white">
                Print <span className="text-yellow-300">Smarter</span> with Printify
                </h2>
                <p className="text-lg text-gray-200 mb-12 max-w-2xl">
                    Fast, reliable, and hassle-free document printing at your fingertips.
                    Customize your printing preferences and get exactly what you need.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-xl mb-3 text-blue-600">Paper Size</h3>
                            <p className="text-gray-600">Choose from A4, A3, Legal, and more.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-xl mb-3 text-blue-600">Color Options</h3>
                            <p className="text-gray-600">Print in Color or Black & White.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-xl mb-3 text-blue-600">Print Sides</h3>
                            <p className="text-gray-600">Single-sided or Double-sided prints.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-xl mb-3 text-blue-600">Binding Options</h3>
                            <p className="text-gray-600">Spiral bind, staple, or no binding.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-blue-600 text-xl mb-3">Document Type</h3>
                            <p className="text-gray-600">Print notes, resumes, or certificates.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-blue-600 text-xl mb-3">Cost Estimation</h3>
                            <p className="text-gray-600">Real-time price before placing order.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white text-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-blue-600 text-xl mb-3">Upload & Preview</h3>
                            <p className="text-gray-600">Upload files and check previews online.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-blue-600 text-xl mb-3">Pickup & Delivery</h3>
                            <p className="text-gray-600">Choose shop pickup or home delivery.</p>
                        </div>
                    </div>
                </div>
                    
 )
}

export default Aspects;
