import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 border-b">
      <div className="text-2xl font-bold text-orange-600">triply</div>
      <nav className="hidden md:flex space-x-6">
        {["Home", "Tours", "Destination", "Blog", "Page", "Contact"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 hover:text-orange-600"
            >
              {item}
            </a>
          )
        )}
      </nav>
      <div className="text-gray-700 hidden md:block">1800 - 333 5578</div>
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {["Home", "Tours", "Destination", "Blog", "Page", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-orange-600"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
