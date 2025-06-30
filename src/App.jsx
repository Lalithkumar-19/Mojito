import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Cocktails from "./components/Cocktails";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 

  return (
    <main>
      <Navbar />
      <Hero/>
      <Cocktails/>
    </main>
  );
};

export default App;
