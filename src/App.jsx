import React, { useEffect } from "react";
import "./App.css";
import { About } from "./Components/About";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
