import React from "react";

const SpecialOffers = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Special Offers for You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((offer) => (
          <div
            key={offer}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={`https://via.placeholder.com/300x200?text=Offer+${offer}`}
              alt={`Special Offer ${offer}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">
                Offer {offer} Title
              </h3>
              <p className="text-gray-600 mt-2">
                Enjoy exclusive discounts and deals for your next adventure.
              </p>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
