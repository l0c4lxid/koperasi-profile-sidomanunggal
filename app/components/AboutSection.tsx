import { PlaceholderImage } from "../data/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2 block">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Mengenal Koperasi Sidomanunggal
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              Koperasi Sidomanunggal adalah lembaga keuangan mikro yang
              berlandaskan asas kekeluargaan dan gotong royong. Kami hadir sejak
              [Tahun Berdiri - Ganti jika tahu] untuk melayani kebutuhan simpan
              pinjam dan kredit bagi anggota kami di wilayah [Wilayah
              Pelayanan].
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base">
              Visi kami adalah menjadi koperasi yang sehat, mandiri, tangguh,
              dan terpercaya dalam meningkatkan kesejahteraan ekonomi anggota.
              Misi kami adalah memberikan pelayanan prima, produk keuangan yang
              kompetitif, dan edukasi keuangan kepada anggota.
            </p>
            <a
              href="#contact"
              className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center group text-base"
            >
              Pelajari Lebih Lanjut
              <svg
                className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
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
          <div className="order-1 md:order-2">
            <PlaceholderImage className="w-full h-80 lg:h-96 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
