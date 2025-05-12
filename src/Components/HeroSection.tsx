import React from "react";


const HeroSection:React.FC =()=>{
    return(
        <section className="flex flex-col md:flex-row items-center justify-between py-30 px-20 bg-blue-400 realtive overflow-hidden">
            <div className="mb-8 ml-30">
            <h2 className="text-5xl font-bold mb-2 text-white">Your Print, <br />
            Delivered Fast!
            </h2>
           
            <p className="text-4xl mb-4 text-white font-bold">Save time, skip the line <br />order prints{" "}
            <span className="inline-flex items-center px-2 py-0.5 bg-white text-yellow-400 rounded-lg align-middle font-serif">online.</span>
            </p>
             <p className="text-lg mb-7 text-white">Upload, Customize, Print  all in one place.</p>
            <button className="bg-white px-6 py-3 rounded-xl w-32 h-12 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Get Started</button>
            </div>

            <div className="mr-30 flex justify-center">
                <img alt="printify-image" className="w-100 h-100" />
            </div>
            
        </section>
    )
}

export default HeroSection;