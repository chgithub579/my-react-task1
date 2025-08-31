import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to MyApp
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A modern React + Tailwind CSS project setup.
        </p>
        <a
          href="/get-started"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
