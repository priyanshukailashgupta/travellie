import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      <img
        src="https://via.placeholder.com/1200x600"
        alt="Scenic view"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
      <div className="absolute top-1/4 left-4 sm:left-12 space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Discover the most engaging places
        </h2>
        <p className="text-orange-500 text-sm sm:text-lg font-medium">
          Natural beauty
        </p>
        <button className="px-4 sm:px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
