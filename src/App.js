import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import NestedCheckbox from "./components/NestedCheckbox";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <div className="py-10">
        <NestedCheckbox />
      </div>
       <Footer />
    </div>
  );
}

export default App;
