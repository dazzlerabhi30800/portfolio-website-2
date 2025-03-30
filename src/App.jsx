import "./App.css";
import { useEffect, useRef, useState } from "react";
import { About } from "./Components/About";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Resume } from "./Components/Resume";
import { Arsenal } from "./Components/Arsenal";
import { Footer } from "./Components/Footer";
import Githubcalendar from "./Components/Githubcalendar";
import Spinner from "./Components/Spinner";
import FollowingDot from "./Components/FollowingDot";
import { Resize } from "./Components/Resize";
import Certifications from "./Components/Certfications";
import SocialLinks from "./Components/SocialLinks";
import Lenis from "@studio-freight/lenis";

function App() {
  const [show, setShow] = useState(false);
  const windowSize = Resize();
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.4, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 2), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then((res) => {
        setTimeout(() => {
          if (res.status === "loaded") {
            setShow(true);
          } else {
            setShow(false);
          }
        }, 500);
      });
    }
  }, []);

  if (!show) return <Spinner />;
  return (
    <>
      {windowSize >= 700 && show && <FollowingDot />}
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Resume />
        <Arsenal />
        <Certifications />
        <SocialLinks />
        <Githubcalendar />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
