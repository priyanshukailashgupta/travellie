import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p className="text-sm">
              We are passionate about creating unforgettable travel experiences
              for our customers. Let us help you discover the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <p className="text-sm">
              <strong>Email:</strong> support@travelcompany.com
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="text-sm">
              <strong>Address:</strong> 123 Travel Lane, Wanderlust City, USA
            </p>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-600 pt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Travel Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
