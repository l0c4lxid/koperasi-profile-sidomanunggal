export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-700 via-blue-600 to-green-500 text-white py-24 md:py-32"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
          Koperasi Sidomanunggal
        </h1>
        <p className="text-lg md:text-xl mb-10 text-blue-100 font-light max-w-3xl mx-auto">
          Mitra Keuangan Terpercaya Anda. Solusi Simpan Pinjam dan Kredit untuk
          Kesejahteraan Bersama Anggota.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services"
            className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-md text-lg transition duration-300 shadow-md"
          >
            Lihat Layanan Kami
          </a>
          <a
            href="#join"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-md text-lg transition duration-300 shadow-md"
          >
            Jadi Anggota
          </a>
        </div>
      </div>
    </section>
  );
}
