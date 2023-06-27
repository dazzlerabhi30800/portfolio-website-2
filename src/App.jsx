import "./App.css";
import { About } from "./Components/About";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import { Projects } from "./Components/Projects";

function App() {
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
