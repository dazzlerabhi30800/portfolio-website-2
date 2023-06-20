import "./App.css";
import { About } from "./Components/About";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
      </main>
    </>
  );
}

export default App;
