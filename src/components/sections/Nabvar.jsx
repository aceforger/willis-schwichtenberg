import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/icon.png" 
              alt="Willis Schwichtenberg" 
              className="h-8 w-8 object-contain"
            />
            <span className="ml-2 text-xl font-bold text-gray-800">Willis Schwichtenberg</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-amber-600 transition">Home</a>
            <a href="#about" className="text-gray-600 hover:text-amber-600 transition">About Willis</a>
            <a href="#features" className="text-gray-600 hover:text-amber-600 transition">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-amber-600 transition">Contact</a>
          </div>

          {/* Desktop Buy Button */}
          <button className="hidden md:block bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition text-base">
            Buy Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Close icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <a 
              href="#home" 
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition text-base"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition text-base"
            >
              About Willis
            </a>
            <a 
              href="#features" 
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition text-base"
            >
              Features
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition text-base"
            >
              Contact
            </a>
            <div className="pt-2 pb-1">
              <button className="w-full bg-amber-600 text-white px-4 py-3 rounded-full hover:bg-amber-700 transition text-base font-medium">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          button {
            min-height: 44px;
          }
          span {
            font-size: 1.125rem;
          }
        }
        @media (max-width: 480px) {
          button {
            min-height: 44px;
          }
          span {
            font-size: 1rem;
          }
          img {
            height: 1.75rem;
            width: 1.75rem;
          }
        }
        @media (max-width: 360px) {
          span {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;