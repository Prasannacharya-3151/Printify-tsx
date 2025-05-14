import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import WhyChoosePrintify from "./Components/WhyChoosePrintify";
import Aspects from "./Components/Aspects";
import Feature from "./Components/Feature";

const App:React.FC = () => {
  return(
    <>
    <Navbar />
    <HeroSection />
    <WhyChoosePrintify />
    <Aspects />
    <Feature />
    
    </>
  );
};

export default App;