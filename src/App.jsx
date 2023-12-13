import { useEffect, useState } from "react";
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
import Spinner from "./Components/Spinner";
import FollowingDot from "./Components/FollowingDot";
import { Resize } from "./Components/Resize";
import Certifications from "./Components/Certfications";

function App() {
  const [show, setShow] = useState(false);
  const windowSize = Resize();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setShow(true);
    });
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
        <Githubcalendar />
        <Resume />
        <Certifications />
        <Arsenal />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
