"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Footer Column 1: About */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Koperasi Sidomanunggal
            </h5>
            <p className="text-sm leading-relaxed">
              Menyediakan solusi simpan pinjam dan kredit yang amanah dan
              terpercaya untuk kesejahteraan bersama.
            </p>
          </div>
          {/* Footer Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Tautan Cepat
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition duration-150 text-sm"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition duration-150 text-sm"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition duration-150 text-sm"
                >
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition duration-150 text-sm"
                >
                  Kontak
                </a>
              </li>
              <li>
                <a
                  href="#join"
                  className="hover:text-white transition duration-150 text-sm"
                >
                  Cara Bergabung
                </a>
              </li>
            </ul>
          </div>
          {/* Footer Column 3: Contact */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Kontak</h5>
            <ul className="space-y-2 text-sm">
              <li>Jl. Balai Desa No.3, Ledok, Sidorejo, Kec. Lendah</li>
              <li>Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta 55663</li>
              <li>Email: cs@koperasikredit-sidomanunggal.my.id</li>
              <li>Telp: 0856-4786-8154</li>
            </ul>
          </div>
          {/* Footer Column 4: Social Media */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Ikuti Kami
            </h5>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-150"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-150"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-150"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-150"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Koperasi Sidomanunggal. Semua Hak
            Cipta Dilindungi Undang-Undang.
          </p>
        </div>
      </div>
    </footer>
  );
}
