import React, { useState } from "react";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-4 md:px-8 py-4 border-b">
        <div className="text-2xl font-bold text-orange-600">triply</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-orange-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-orange-600">Tours</a>
          <a href="#" className="text-gray-700 hover:text-orange-600">Destination</a>
          <a href="#" className="text-gray-700 hover:text-orange-600">Blog</a>
          <a href="#" className="text-gray-700 hover:text-orange-600">Page</a>
          <a href="#" className="text-gray-700 hover:text-orange-600">Contact</a>
        </nav>
        <div className="text-gray-700 hidden md:block">1800 - 333 5578</div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <a href="#" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">Tours</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">Destination</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">Blog</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">Page</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">Contact</a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/1200x600" // Replace with the actual image URL
          alt="Scenic view"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>

        <div className="absolute top-1/4 left-4 sm:left-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Discover the most engaging places
          </h2>
          <p className="text-orange-500 text-sm sm:text-lg font-medium">Natural beauty</p>
          <button className="px-4 sm:px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
            Explore Now
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 max-w-6xl mx-auto -mt-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Destination Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="destination">
              Destinations
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Where are you going?"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          {/* Activity Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="activity">
              Activity
            </label>
            <select
              id="activity"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              <option>All Activity</option>
              <option>Hiking</option>
              <option>Sightseeing</option>
              <option>Relaxing</option>
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
              When
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="guests">
              Guests
            </label>
            <input
              type="number"
              id="guests"
              placeholder="0"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-4 text-right">
          <button className="px-6 sm:px-8 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            Search
          </button>
        </div>
      </div>

      {/* Special Offers Section */}
      <section className="mt-12 max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          <span className="text-orange-500 font-medium">Don’t miss</span> Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Weekly Flash Deals */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Weekly Flash Deals</h3>
            <p className="text-gray-700 mb-4">Up to 30% off</p>
            <button className="text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg">
              View Deals
            </button>
          </div>
          {/* Summer Escapes */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Summer Escapes</h3>
            <p className="text-gray-700 mb-4">Plan your next trip</p>
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>
          {/* Exclusive Deals */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Exclusive Deals</h3>
            <p className="text-gray-700 mb-4">Want to save up to 50%</p>
            <button className="text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg">
              Subscribe Us
            </button>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-2xl font-bold">Not a Member Yet?</h3>
            <p className="text-gray-700">Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Register
            </button>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="mt-12 max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          <span className="text-orange-500 font-medium">What’s new</span> Popular Tours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tour 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/400x200" // Replace with actual image
              alt="Tour 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Caño Cristales River Trip</h3>
            <p className="text-gray-700 mb-2">Bryce Canyon National Park, USA</p>
            <p className="text-gray-500 text-sm mb-4">Caño Cristales Tour is an exceptional and surprising natural beauty. Its unique ecosystem is very fragile and belongs to the Sierra...</p>
            <div className="flex justify-between items-center">
              <span className="text-orange-600 font-bold">From $124.20</span>
              <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                Explore
              </button>
            </div>
          </div>
          {/* Tour 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/400x200" // Replace with actual image
              alt="Tour 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Waterfalls, Geysers and Glacier</h3>
            <p className="text-gray-700 mb-2">Bryce Canyon National Park, USA</p>
            <div className="flex justify-between items-center">
              <span className="text-orange-600 font-bold">From $100</span>
              <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                Explore
              </button>
            </div>
          </div>
          {/* Tour 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/400x200" // Replace with actual image
              alt="Tour 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Mount Kilimanjaro, Machame Route</h3>
            <p className="text-gray-700 mb-2">Bryce Canyon National Park, USA</p>
            <div className="flex justify-between items-center">
              <span className="text-orange-600 font-bold">From $161</span>
              <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
       {/* Hero Section */}
       <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">Perfect Destinations</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { location: "Africa", img: "#" },
              { location: "Americas", img: "#" },
              { location: "Argentina", img: "#" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden bg-white"
              >
                <img
                  src={item.img}
                  alt={item.location}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{item.location}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Competitive Pricing",
              "Worldwide Coverage",
              "Fast Booking",
              "Guided Tours",
            ].map((feature, index) => (
              <div key={index} className="text-center p-4 w-60">
                <div className="text-4xl text-blue-500 mb-4">🎯</div>
                <h3 className="text-xl font-medium">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Save an Extra $500 on Cyprus Holidays
          </h2>
          <p className="mb-6">This limited offer expires in:</p>
          <div className="text-3xl font-mono flex justify-center gap-4">
            <div>288</div>
            <span>:</span>
            <div>17</div>
            <span>:</span>
            <div>59</div>
            <span>:</span>
            <div>37</div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
          <div className="text-center max-w-2xl mx-auto">
            <blockquote className="text-lg font-medium italic">
              “This was an amazing trip! There were so many highlights... our
              outstanding, kind, patient, amazing leader Claudia!”
            </blockquote>
            <div className="mt-4 font-medium">- Helen Smith</div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Travel Tips and Advice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Stunning Things to Do in Switzerland",
                img: "#",
              },
              {
                title: "See the Oil-Powered Floating Gardens",
                img: "#",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden bg-white"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2024 Company Name. All rights reserved.</p>
            <p>Contact: support@example.com | Phone: +1800-383-5578</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
