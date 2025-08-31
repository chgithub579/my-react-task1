import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-500">MyApp</div>
      
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl">☰</span>
        </button>
      </div>
      <ul className={`md:flex md:space-x-6 ${isOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
        <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
        <li><a href="#features" className="hover:text-blue-500">Features</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
