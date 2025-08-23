"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // helper: close mobile menu saat klik link
  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent" : ""
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/75 backdrop-blur-md shadow-md"
            : "bg-white shadow-md"
        }`}
      >
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center space-x-2 text-xl font-bold text-blue-700 hover:text-blue-800"
          >
            <Image
              src="/favicon.ico"
              alt="Logo Koperasi"
              width={30}
              height={30}
              className="rounded-sm"
            />
            <span>Koperasi</span>
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

            {/* === Tambahan baru === */}
            <a
              href="#loan"
              className="text-gray-600 hover:text-blue-700 transition duration-150"
            >
              Syarat Meminjam
            </a>
            <a
              href="#membership"
              className="text-gray-600 hover:text-blue-700 transition duration-150"
            >
              Syarat Anggota
            </a>
            <a
              href="#simulasi"
              className="text-gray-600 hover:text-blue-700 transition duration-150"
            >
              Simulasi
            </a>
            {/* === /Tambahan baru === */}

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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden py-3 px-6 border-t border-gray-200/50 transition-all duration-300 ${
            isScrolled ? "bg-white/75 backdrop-blur-md" : "bg-white"
          }`}
        >
          <a
            href="#home"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={handleNavClick}
          >
            Beranda
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={handleNavClick}
          >
            Tentang Kami
          </a>
          <a
            href="#services"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={handleNavClick}
          >
            Layanan
          </a>

          {/* === Tambahan baru === */}
          <a
            href="#loan"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={handleNavClick}
          >
            Syarat Meminjam
          </a>
          <a
            href="#membership"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={handleNavClick}
          >
            Syarat Anggota
          </a>
          <a
            href="#simulasi"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={handleNavClick}
          >
            Simulasi
          </a>
          {/* === /Tambahan baru === */}

          <a
            href="#contact"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium"
            onClick={handleNavClick}
          >
            Kontak
          </a>
          <a
            href="#join"
            className="block mt-3 bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md text-sm font-medium transition duration-300 shadow-sm"
            onClick={handleNavClick}
          >
            Gabung Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
