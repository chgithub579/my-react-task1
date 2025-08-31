import React from "react";

function Services() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">Web Development</h3>
          <p className="text-gray-600">We build responsive and modern web apps.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">App Development</h3>
          <p className="text-gray-600">We create scalable and user-friendly mobile apps.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">UI/UX Design</h3>
          <p className="text-gray-600">We design clean, modern, and attractive interfaces.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
