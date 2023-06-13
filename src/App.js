import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Banner from "./Components/banner/Banner";
import Features from "./Components/features/Features";
import Projects from "./Components/projects/Projects";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
    <div className="max-w-screen-2xl mx-auto px-16">
    <Navbar/>
    <Banner/>
    <Features/>
    <Projects/>
    </div>
  </div>
  );
}

export default App;
