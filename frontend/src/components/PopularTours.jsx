import React from "react";

const PopularTours = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Popular Tours
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((tour) => (
            <div
              key={tour}
              className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=Tour+${tour}`}
                alt={`Popular Tour ${tour}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Tour {tour} Name
                </h3>
                <p className="text-gray-600 mt-2">
                  Explore breathtaking locations with guided tours and activities.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
