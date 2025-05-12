import React from "react";
import Services from "../assets/services-image.png"

const Aspects:React.FC=()=>{
    return(
        <div className="min-h-screen bg-blue-400 py-20 px-30">
            <div className="flex flex-row gap-2">
            <img src={Services} alt="services-image" className="w-5 h-5"/>
            <span className="text-white font-semibold">Services</span>
            </div>
            <h2 className="text-5xl font-bold mb-2 text-white">
                Print <span className="text-yellow-300">Smarter</span> with Printify
                </h2>
                <p className="text-lg text-gray-200 mb-7">
                    Fast, reliable, and hassle-free document printing at your fingertips.
                    </p>
                    <div className="grid grid-row-1 grid-cols-4 gap-8 py-20">
                        <div className="p-6 shadow-lg rounded-lg text-center bg-white">
                            <h3>hi</h3>
                        </div>
                    </div>
                    </div>
                    
 )
}

export default Aspects;
// print Smarter with Printify