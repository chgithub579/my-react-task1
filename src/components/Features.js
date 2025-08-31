import React from "react";

function Features() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Features</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
          <p>Short description of feature 1.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
          <p>Short description of feature 2.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
          <p>Short description of feature 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
