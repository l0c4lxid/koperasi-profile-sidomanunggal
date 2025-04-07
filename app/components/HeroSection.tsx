// components/HeroSection.jsx
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative" id="home">
      {" "}
      {/* Menambahkan ID #home */}
      <div
        className="absolute inset-0 blur-xl h-screen" // Mengatur tinggi menjadi penuh layar
        style={{
          background:
            "linear-gradient(143.6deg, rgba(76, 175, 80, 0) 20.79%, rgba(139, 195, 74, 0.26) 40.92%, rgba(205, 220, 57, 0) 70.35%)", // Gradient hijau
        }}
      ></div>
      <div className="relative">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-40 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <h1 className="text-5xl text-gray-800 font-extrabold sm:text-6xl">
                Bergabunglah dengan Koperasi Sidomanunggal
              </h1>
              <p className="text-lg">
                Koperasi Sidomanunggal berkomitmen untuk meningkatkan
                kesejahteraan anggotanya melalui layanan yang berkualitas dan
                akses yang lebih baik terhadap sumber daya.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <Link
                  href="#join" // Tombol mengarah ke #join
                  className="flex items-center justify-center gap-x-1 py-3 px-6 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex text-lg transition-transform transform hover:scale-105" // Menambahkan animasi saat hover
                >
                  Daftar Sekarang
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#contact" // Tombol mengarah ke #contact
                  className="flex items-center justify-center gap-x-1 py-3 px-6 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex text-lg transition-transform transform hover:scale-105" // Menambahkan animasi saat hover
                >
                  Hubungi Kami
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <Image
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                alt="Ilustrasi Koperasi"
                width={500}
                height={400}
                className="max-w-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
