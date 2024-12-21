import React from "react";

const OfferBanner = () => {
  return (
    <div className="relative bg-orange-600 text-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Limited-Time Offer!</h2>
        <p className="text-lg mb-6">
          Book your dream vacation today and save up to 30%. Don't miss out on this exclusive deal!
        </p>
        <button className="px-6 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100">
          Book Now
        </button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-500 opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default OfferBanner;
