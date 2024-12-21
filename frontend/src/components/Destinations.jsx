import React from "react";

const Destinations = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Perfect Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {["Bali", "Paris", "New York", "Tokyo"].map((destination) => (
          <div
            key={destination}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={`https://via.placeholder.com/300x200?text=${destination}`}
              alt={destination}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{destination}</h3>
              <p className="text-gray-600 mt-2">
                Discover the beauty of {destination} with our exclusive packages.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
