import "./App.css";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </>
  );
}

export default App;
