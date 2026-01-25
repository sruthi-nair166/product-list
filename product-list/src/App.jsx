import "./App.css";
import Categories from "./components/Categories";
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

        <Categories />
      </main>
    </>
  );
}

export default App;
