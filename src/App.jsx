import React, { useEffect } from "react";
import "./App.css";
import { About } from "./Components/About";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { Resume } from "./Components/Resume";
import { Arsenal } from "./Components/Arsenal";
import { Footer } from "./Components/Footer";
import Githubcalendar from "./Components/Githubcalendar";

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
        <Githubcalendar />
        <Resume />
        <Arsenal />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
