import "./App.css";
import { useEffect, useState } from "react";
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
import SocialLinks from "./Components/SocialLinks";

function App() {
  const [show, setShow] = useState(false);
  const windowSize = Resize();

  useEffect(() => {
    AOS.init();
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
        <Githubcalendar />
        <Resume />
        <Certifications />
        <Arsenal />
        <SocialLinks />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
