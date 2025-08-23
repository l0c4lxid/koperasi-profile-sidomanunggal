"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { defaultSimulation } from "../data/simulation";

function formatIDR(n: number) {
  return n.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

const roundRp = (x: number) => Math.round(x);

type Row = {
  month: number;
  principalPay: number;
  interestPay: number;
  totalPay: number;
  remaining: number;
};

export default function SimulationSection() {
  // input utama
  const [tenor, setTenor] = useState<number>(defaultSimulation.tenorMonths);
  const [principal, setPrincipal] = useState<number>(
    defaultSimulation.principal
  );
  const [interestPct, setInterestPct] = useState<number>(
    defaultSimulation.interestPercent
  );
  const [swpPct, setSwpPct] = useState<number>(defaultSimulation.swpPercent);

  const [showResult, setShowResult] = useState(false);

  const calc = useMemo(() => {
    const P = Math.max(0, Number(principal));
    const n = Math.max(1, Number(tenor));

    // SWP & jumlah diterima
    const swpAmount = roundRp(P * (Number(swpPct) / 100));
    const received = P - swpAmount;

    // bunga flat: % pokok awal
    const interestPerInstallment = roundRp(P * (Number(interestPct) / 100));

    // angsuran pokok per bulan
    const basePrincipalPay = P / n;

    // buat tabel angsuran
    let remaining = P;
    const rows: Row[] = [];
    for (let m = 1; m <= n; m++) {
      let principalPay = m < n ? roundRp(basePrincipalPay) : roundRp(remaining);
      principalPay = Math.min(principalPay, remaining);

      const interestPay = interestPerInstallment;
      const totalPay = principalPay + interestPay;
      remaining -= principalPay;
      if (remaining < 0) remaining = 0;

      rows.push({ month: m, principalPay, interestPay, totalPay, remaining });
    }

    const totalPrincipal = rows.reduce((s, r) => s + r.principalPay, 0);
    const totalInterest = rows.reduce((s, r) => s + r.interestPay, 0);
    const grandTotal = totalPrincipal + totalInterest;

    return {
      swpAmount,
      received,
      monthlyPrincipal: roundRp(P / n),
      interestPerInstallment,
      monthlyTotal: roundRp(P / n) + interestPerInstallment,
      rows,
      totalPrincipal,
      totalInterest,
      grandTotal,
    };
  }, [principal, tenor, interestPct, swpPct]);

  return (
    <section id="simulasi" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2 block">
            Simulasi Ringkas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simulasi Pembayaran Pinjaman (Flat)
          </h2>
          <p className="mt-2 text-gray-600">
            Masukkan pokok pinjaman, tenor, bunga, dan SWP, lalu klik tombol
            untuk menampilkan simulasi.
          </p>
        </div>

        {/* FORM INPUT */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <label className="block">
              <span className="text-sm text-gray-600">Pokok Pinjaman (Rp)</span>
              <input
                type="number"
                min={0}
                step={50000}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-600">Tenor (bulan)</span>
              <input
                type="number"
                min={1}
                step={1}
                value={tenor}
                onChange={(e) => setTenor(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-600">
                Bunga / Angsuran (%)
              </span>
              <input
                type="number"
                min={0}
                step={0.1}
                value={interestPct}
                onChange={(e) => setInterestPct(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-600">
                Simpanan Wajib Pinjam (%)
              </span>
              <input
                type="number"
                min={0}
                step={0.1}
                value={swpPct}
                onChange={(e) => setSwpPct(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>

          {/* tombol simulasi */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowResult(true)}
              className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-medium"
            >
              Tampilkan Simulasi
            </button>
            {showResult && (
              <button
                onClick={() => setShowResult(false)}
                className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 font-medium"
              >
                Sembunyikan
              </button>
            )}
          </div>
        </div>

        {/* HASIL SIMULASI */}
        {showResult && (
          <>
            {/* Ringkasan */}
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 shadow">
                <div className="text-xs text-gray-500">
                  Angsuran Pokok /bulan
                </div>
                <div className="text-lg font-semibold">
                  {formatIDR(calc.monthlyPrincipal)}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <div className="text-xs text-gray-500">Bunga / Angsuran</div>
                <div className="text-lg font-semibold">
                  {formatIDR(calc.interestPerInstallment)}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <div className="text-xs text-gray-500">
                  Total / bulan (Tetap)
                </div>
                <div className="text-lg font-semibold">
                  {formatIDR(calc.monthlyTotal)}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <div className="text-xs text-gray-500">Diterima Bersih</div>
                <div className="text-lg font-semibold">
                  {formatIDR(calc.received)}
                </div>
              </div>
            </div>

            {/* Tabel Angsuran */}
            <div className="mt-6 bg-white rounded-2xl shadow overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="text-left px-4 py-3">Bulan Ke-</th>
                    <th className="text-left px-4 py-3">Pokok</th>
                    <th className="text-left px-4 py-3">
                      Bunga ({interestPct}%)
                    </th>
                    <th className="text-left px-4 py-3">Total Bayar</th>
                    <th className="text-left px-4 py-3">Sisa Pinjaman</th>
                  </tr>
                </thead>
                <tbody>
                  {calc.rows.map((r) => (
                    <tr key={r.month} className="border-t">
                      <td className="px-4 py-3">{r.month}</td>
                      <td className="px-4 py-3">{formatIDR(r.principalPay)}</td>
                      <td className="px-4 py-3">{formatIDR(r.interestPay)}</td>
                      <td className="px-4 py-3">{formatIDR(r.totalPay)}</td>
                      <td className="px-4 py-3">{formatIDR(r.remaining)}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-medium border-t">
                    <td className="px-4 py-3">Total</td>
                    <td className="px-4 py-3">
                      {formatIDR(calc.totalPrincipal)}
                    </td>
                    <td className="px-4 py-3">
                      {formatIDR(calc.totalInterest)}
                    </td>
                    <td className="px-4 py-3">{formatIDR(calc.grandTotal)}</td>
                    <td className="px-4 py-3">—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tombol bawah */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Konsultasi Pengajuan
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 font-medium"
              >
                Kembali ke Atas
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
