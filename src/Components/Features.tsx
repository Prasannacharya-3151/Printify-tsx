import React from "react";

const Features:React.FC = () =>{
    return(
        <section className="min-h-screen flex flex-col items-center justify-center bg-white px-10">
            <h2 className="text-4xl font-bold text-blue-500 mb-10">Why Choose Printify?</h2>
                <div className="grid grid-row-1 grid-cols-3 gap-8">
                    <div className="p-6 shadow-lg rounded-2xl text-center">
                        <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
                        <p>Get your prints delivered within hours of ordering.</p>
                    </div>
                    <div className="p-6 shadow-lg rounded-2xl text-center">
                        <h3 className="text-2xl font-semibold mb-2">Affordable Pricing</h3>
                        <p>Competitive rates for all types of prints and services.</p>
                    </div>
                    <div className="p-6 shadow-lg rounded-2xl text-center">
                        <h3 className="text-2xl font-semibold mb-2">Customizable Options</h3>
                        <p>Choose paper type, size, color, and more with ease.</p>

                    </div>
                </div>
            
        </section>
    )
}

export default Features;