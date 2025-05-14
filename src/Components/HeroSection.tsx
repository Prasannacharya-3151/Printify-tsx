import React from "react";


const HeroSection:React.FC = () => {
    return(
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between py-20 px-6 bg-blue-400 realtive overflow-hidden">
            <div className="mb-8 md:mb-0 md:ml-20 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">Print Documents<br />
            <span className="inline-flex items-center px-2 py-1 bg-white text-yellow-400 rounded-lg align-middle font-serif text-3xl">Instantly</span> Near You
            </h2>
           
            <p className="text-2xl md:text-4xl mb-6 text-white font-bold leading-snug">Save time, skip the line <br />order prints{" "}
            <span className="inline-flex items-center px-2 py-0.5 bg-white text-yellow-400 rounded-lg align-middle font-serif text-3xl">online.</span>
            </p>
             <p className="text-base md:text-lg mb-7 text-white">Upload, Customize, Print  all in one place.</p>
            <button className="bg-white px-6 py-3 rounded-xl h-12 font-semibold transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-blue-400">Start Printing</button>
            </div>

            <div className="flex justify-center md:mr-20">
                <img alt="printify-image" className="w-64 md:w-[500px] h-auto" />
            </div>
            
        </section>
    )
}

export default HeroSection;