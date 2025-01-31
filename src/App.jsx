import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Certification from "./components/Certification";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <PortFolio />
        <About />
        <Experience/>
        <Certification />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
