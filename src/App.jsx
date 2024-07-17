import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Model from "./components/Model";
import Features from "./components/Features";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Highlight />
        {/* <Model/> */}
        <Features />
      </main>
    </>
  );
}

export default App;
