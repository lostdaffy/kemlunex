import React, { useState } from "react";
import { Car, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/home" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#e7e4e3] top-0 left-0">
      <div className="max-w-8xl flex items-center justify-between h-16 sm:h-20 mx-auto px-4 sm:px-6 lg:px-20">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img
            src="/images/logo.jpeg"
            className="w-32 sm:w-32 lg:w-32 rounded-lg"
            alt="Company Logo"
          />{" "}
          <span className="text-2xl pt-4 text-[#4355ac] font-semibold">Pharma</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="relative px-3 xl:px-4 py-2 text-gray-900 hover:text-[#b71540] text-sm xl:text-base font-medium tracking-wider transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b71540] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Call Button - Desktop */}
        <div className="hidden lg:flex items-center">
          <Link
            to="tel:+919988086762"
            className="group bg-[#b71540] px-6 xl:px-10 py-2.5 xl:py-3 text-white text-sm xl:text-base rounded-full hover:bg-[#9c1232] transition-all duration-300 flex items-center"
          >
            <i className="ri-phone-fill mr-2"></i> Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 hover:text-[#b71540] transition-colors duration-300 p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#e7e4e3] border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="block px-3 py-2 text-gray-900 hover:text-[#b71540] hover:bg-gray-100 rounded-md font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Call Button */}
              <div className="pt-4 border-t border-gray-300 mt-4">
                <Link
                  to=""
                  className="w-full bg-[#b71540] text-white px-6 py-3 rounded-full hover:bg-[#9c1232] transition-all duration-300 flex items-center justify-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
