import React from "react";

const SearchSection = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 max-w-6xl mx-auto -mt-12 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Destinations
          </label>
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Activity</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600">
            <option>All Activity</option>
            <option>Hiking</option>
            <option>Sightseeing</option>
            <option>Relaxing</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">When</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Guests</label>
          <input
            type="number"
            placeholder="0"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
      </div>
      <div className="mt-4 text-right">
        <button className="px-6 sm:px-8 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
