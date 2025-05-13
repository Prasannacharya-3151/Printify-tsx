import React from "react";


const HeroSection:React.FC =()=>{
    return(
        <section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 bg-blue-400 realtive overflow-hidden">
            <div className="mb-8 md:mb-0 md:ml-20 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">Your Print, <br />
            Delivered Fast!
            </h2>
           
            <p className="text-2xl md:text-4xl mb-6 text-white font-bold leading-snug">Save time, skip the line <br />order prints{" "}
            <span className="inline-flex items-center px-2 py-0.5 bg-white text-yellow-400 rounded-lg align-middle font-serif">online.</span>
            </p>
             <p className="text-base md:text-lg mb-7 text-white">Upload, Customize, Print  all in one place.</p>
            <button className="bg-white px-6 py-3 rounded-xl w-32 h-12 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Get Started</button>
            </div>

            <div className="flex justify-center md:mr-20">
                <img alt="printify-image" className="w-64 md:w-[500px] h-auto" />
            </div>
            
        </section>
    )
}

export default HeroSection;