"use client";

import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-blue-700 hover:text-blue-800"
        >
          Koperasi Sidomanunggal
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-700 transition duration-150"
          >
            Beranda
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-blue-700 transition duration-150"
          >
            Tentang Kami
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-blue-700 transition duration-150"
          >
            Layanan
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-700 transition duration-150"
          >
            Kontak
          </a>
          <a
            href="#join"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition duration-300 shadow-sm"
          >
            Gabung Sekarang
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-blue-700 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-3 px-6 border-t border-gray-200">
          <a
            href="#home"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Beranda
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tentang Kami
          </a>
          <a
            href="#services"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Layanan
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontak
          </a>
          <a
            href="#join"
            className="block mt-3 bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md text-sm font-medium transition duration-300 shadow-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gabung Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
