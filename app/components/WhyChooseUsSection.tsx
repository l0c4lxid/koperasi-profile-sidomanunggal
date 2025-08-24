export default function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 md:mb-16 text-center">
          Mengapa Memilih Koperasi Sido Manunggal?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="flex justify-center items-center mb-4 bg-blue-100 rounded-full w-16 h-16 mx-auto">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Berbasis Komunitas
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Prinsip kekeluargaan, dari anggota untuk anggota.
            </p>
          </div>
          <div className="p-6">
            <div className="flex justify-center items-center mb-4 bg-green-100 rounded-full w-16 h-16 mx-auto">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0c-1.657 0-3-.895-3-2s1.343-2 3-2 3-.895 3-2 1.343-2 3-2m0 8c1.11 0 2.08-.402 2.599-1M12 16v1m0-1v-8"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Bunga Kompetitif
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Suku bunga simpanan dan pinjaman yang bersaing.
            </p>
          </div>
          <div className="p-6">
            <div className="flex justify-center items-center mb-4 bg-yellow-100 rounded-full w-16 h-16 mx-auto">
              <svg
                className="w-8 h-8 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Proses Cepat & Mudah
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Layanan efisien tanpa birokrasi yang rumit.
            </p>
          </div>
          <div className="p-6">
            <div className="flex justify-center items-center mb-4 bg-red-100 rounded-full w-16 h-16 mx-auto">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Aman & Terpercaya
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dikelola secara profesional, transparan, dan akuntabel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
