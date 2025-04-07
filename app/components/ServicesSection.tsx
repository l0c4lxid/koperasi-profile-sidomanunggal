import { services } from "../data/data"; // Import data layanan dari file data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faHandshake,
  faUserCheck,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons"; // Import ikon yang diperlukan

// Contoh ikon yang digunakan
const icons = [
  // eslint-disable-next-line react/jsx-key
  <FontAwesomeIcon icon={faDollarSign} className="h-8 w-8 text-blue-600" />,
  // eslint-disable-next-line react/jsx-key
  <FontAwesomeIcon icon={faHandshake} className="h-8 w-8 text-blue-600" />,
  // eslint-disable-next-line react/jsx-key
  <FontAwesomeIcon icon={faUserCheck} className="h-8 w-8 text-blue-600" />,
  // eslint-disable-next-line react/jsx-key
  <FontAwesomeIcon icon={faChartLine} className="h-8 w-8 text-blue-600" />,
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2 block">
          Layanan Unggulan
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Solusi Keuangan untuk Anda
        </h2>
        <p className="text-gray-700 mb-12 md:mb-16 max-w-2xl mx-auto text-base leading-relaxed">
          Kami menyediakan berbagai produk simpanan dan pinjaman yang dirancang
          khusus untuk memenuhi kebutuhan finansial anggota kami.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-left hover:shadow-xl transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="mb-5">{icons[index % icons.length]}</div>{" "}
              {/* Menggunakan ikon dari array */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base flex-grow">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-5 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group text-sm"
              >
                Info Detail
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
