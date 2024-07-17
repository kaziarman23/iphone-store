import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Highlight />
        {/* <Model/>  this component is not going to run because of my low graphice card */}
        <Features />
        <HowItWorks />
        <Footer />
      </main>
    </>
  );
}

export default App;
