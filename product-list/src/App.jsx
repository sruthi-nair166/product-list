import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <HeroSection />
      </main>
    </>
  );
}

export default App;
