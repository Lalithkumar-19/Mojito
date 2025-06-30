import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 

  return (
    <main>
      <Navbar />
      <Hero/>
      <div className="h-dvh bg-black"/>
    </main>
  );
};

export default App;
