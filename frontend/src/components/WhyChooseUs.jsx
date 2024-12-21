import React from "react";

const WhyChooseUs = () => {
  const benefits = [
    { title: "Expert Guides", description: "Travel with experienced guides who ensure safety and fun." },
    { title: "Affordable Prices", description: "Get the best deals without compromising on quality." },
    { title: "24/7 Support", description: "We’re here to assist you anytime, anywhere." },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
