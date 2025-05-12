import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import Aspects from "./Components/Aspects";

const App:React.FC = () => {
  return(
    <>
    <Navbar />
    <HeroSection />
    <Features />
    <Aspects />
    
    </>
  );
};

export default App;