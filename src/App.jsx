import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Service2 from "./components/Service2";
import Service3 from "./components/Service3";
import Service4 from "./components/Service4";
import NewIdea from "./components/NewIdea";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <About/>
      <Services/>
      <Service2/>
      <Service3/>
      <Service4/>
      <NewIdea/>
      <TechStack/>
      {/* Your other components and content */}
    </div>
  );
};

export default App;
