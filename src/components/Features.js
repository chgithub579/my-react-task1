import React from "react";

const Features = () => {
  const features = [
    {
      title: "Fast Performance",
      description: "Experience lightning-fast load times and seamless navigation.",
    },
    {
      title: "Responsive Design",
      description: "Our layout adapts perfectly to mobile, tablet, and desktop.",
    },
    {
      title: "Easy to Use",
      description: "Simple, clean, and intuitive UI for everyone.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Features
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
