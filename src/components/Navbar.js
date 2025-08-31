import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyApp</div>

        {/* Menu Links */}
        <div className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="/services" className="text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <a
            href="/login"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
