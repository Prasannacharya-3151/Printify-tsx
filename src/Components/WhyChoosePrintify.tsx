import React from "react";
import fastDelivary from "../assets/Fast-delivary.png"
import affordablePricing from "../assets/affordable-pricing.png"
import customizeOption from "../assets/customize-option.png"
import upload from "../assets/upload.png"

const Features:React.FC = () =>{
    return(
        <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6 md:px-10">
            <h2 className="text-5xl font-bold text-blue-500 mb-10 text-center">Why Choose Printify?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    <div className="p-6 shadow-lg rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                        <img  src={upload} alt="upload.png" className="w-28 h-28 mx-auto mb-3"/>
                        <h3 className="text-2xl font-semibold mb-2">Easy Upload</h3>
                        <p>Upload your files in seconds</p>
                    </div>
                    <div className="p-6 shadow-lg rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                        <img src={fastDelivary} alt="Fast-delivary.png" className="w-28 h-28 mx-auto mb-3"/>
                        <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
                        <p>Get your prints delivered within hours of ordering.</p>
                    </div>
                    <div className="p-6 shadow-lg rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                    <img src={affordablePricing} alt="affordable-pricing.png" className="w-28 h-28 mx-auto mb-3"/>
                        <h3 className="text-2xl font-semibold mb-2">Affordable Pricing</h3>
                        <p>Competitive rates for all types of prints and services.</p>
                    </div>
                    <div className="p-6 shadow-lg rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                        <img src={customizeOption} alt="customize-pricing.png" className="w-28 h-28 mx-auto mb-3"/>
                        <h3 className="text-2xl font-semibold mb-2">Customize Options</h3>
                        <p>Choose paper type, size, color, and more with ease.</p>
                    </div>
                </div>
            
        </section>
    )
}

export default Features;