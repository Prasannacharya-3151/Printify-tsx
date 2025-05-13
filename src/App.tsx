import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import Aspects from "./Components/Aspects";
import PricingTable from "./Components/PricingTable";

const App:React.FC = () => {
  return(
    <>
    <Navbar />
    <HeroSection />
    <Features />
    <Aspects />
    <PricingTable />
    
    </>
  );
};

export default App;