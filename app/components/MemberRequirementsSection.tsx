import { memberBenefits, memberFees, memberRequirements } from "../data/member";
import Link from "next/link";

export default function MemberRequirementsSection() {
  return (
    <section id="membership" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Judul dan Deskripsi */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm mb-2 block">
            Informasi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Syarat Jadi Anggota
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Bergabunglah untuk menikmati layanan koperasi yang aman, transparan,
            dan saling menguntungkan bagi kesejahteraan bersama.
          </p>
        </div>

        {/* Grid Utama */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Kolom Kiri */}
          <div className="bg-gray-50 rounded-2xl p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Persyaratan Umum</h3>
            <ul className="space-y-3">
              {memberRequirements.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                  <span className="text-gray-700">{r}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">
              Manfaat Keanggotaan
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {memberBenefits.map((b, i) => (
                <li
                  key={i}
                  className="p-3 rounded-xl bg-emerald-50 text-emerald-800"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Kanan */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Setoran & Biaya</h3>
            <dl className="space-y-3">
              {memberFees.map((f, i) => (
                <div key={i} className="flex items-center justify-between">
                  <dt className="text-gray-700">{f.name}</dt>
                  <dd className="font-medium text-gray-900">{f.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-medium"
            >
              Daftar Jadi Anggota
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
