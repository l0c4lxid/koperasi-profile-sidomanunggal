export default function CTASection() {
  return (
    <section
      id="join"
      className="py-20 md:py-24 bg-gradient-to-r from-blue-700 to-green-600 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Mari Bergabung dan Tumbuh Bersama Kami!
        </h2>
        <p className="text-lg mb-10 text-blue-100 max-w-2xl mx-auto font-light">
          Jadilah bagian dari Koperasi Sido Manunggal. Nikmati berbagai manfaat
          dan kemudahan layanan keuangan untuk mencapai tujuan finansial Anda.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-md text-lg transition duration-300 shadow-md"
        >
          Daftar Menjadi Anggota
        </a>
      </div>
    </section>
  );
}
