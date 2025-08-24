import { loanRequirements, loanSteps } from "../data/loan";

export default function LoanRequirementsSection() {
  return (
    <section id="loan" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2 block">
            Informasi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Syarat Meminjam (Prosedur)
          </h2>
          <p className="mt-3 text-gray-600">
            Berikut alur dan dokumen yang diperlukan untuk pengajuan pinjaman.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">kewajiban Peminjam</h3>
            <ol className="space-y-4 list-decimal list-inside">
              {loanSteps.map((s, i) => (
                <li key={i} className="leading-relaxed">
                  <span className="font-medium">{s.title}:</span>{" "}
                  <span className="text-gray-700">{s.desc}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Syarat Peminjaman</h3>
            <ul className="space-y-3">
              {loanRequirements.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                  <span className="text-gray-700">{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl text-blue-800 text-sm">
              Catatan: Koperasi dapat meminta dokumen tambahan bila diperlukan.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
