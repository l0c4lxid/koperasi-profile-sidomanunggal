"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  defaultSimulation,
  methodOptions,
  type Method,
} from "../data/simulation";

function formatIDR(n: number) {
  return n.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

export default function SimulationSection() {
  const [pokok, setPokok] = useState(defaultSimulation.principal);
  const [tenor, setTenor] = useState(defaultSimulation.tenorMonths);
  const [rate, setRate] = useState(defaultSimulation.ratePercent);
  const [tanpaBunga, setTanpaBunga] = useState(defaultSimulation.noInterest);
  const [method, setMethod] = useState<Method>(defaultSimulation.method);

  const hasil = useMemo(() => {
    const i = tanpaBunga ? 0 : rate / 100; // per bulan
    const n = Math.max(1, Number(tenor));
    const P = Math.max(0, Number(pokok));

    if (!P || !n) return null;

    if (method === "anuitas") {
      // A = P * i / (1 - (1+i)^-n)
      const A = i === 0 ? P / n : (P * i) / (1 - Math.pow(1 + i, -n));
      const total = A * n;
      const bungaTotal = Math.max(0, total - P);
      return { cicilan: A, total, bungaTotal };
    } else {
      // Flat: bunga = P * i * n; angsuran/bulan = (P/n) + (P*i)
      const bungaTotal = P * i * n;
      const cicilan = P / n + P * i;
      const total = P + bungaTotal;
      return { cicilan, total, bungaTotal };
    }
  }, [pokok, tenor, rate, tanpaBunga, method]);

  return (
    <section id="simulasi" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2 block">
            Informasi Simulasi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simulasi Angsuran & Bunga
          </h2>
          <p className="mt-3 text-gray-600">
            Estimasi angsuran berdasarkan pokok, tenor, dan suku bunga per
            bulan. Aktifkan <span className="font-semibold">Tanpa Bunga</span>{" "}
            jika kebijakan pinjaman tidak mengenakan bunga.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Input Simulasi</h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-sm text-gray-600">
                  Pokok Pinjaman (Rp)
                </span>
                <input
                  type="number"
                  value={pokok}
                  onChange={(e) => setPokok(Number(e.target.value))}
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  min={0}
                  step={100000}
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-600">Tenor (bulan)</span>
                <input
                  type="number"
                  value={tenor}
                  onChange={(e) => setTenor(Number(e.target.value))}
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  min={1}
                  step={1}
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-600">
                  Suku Bunga per Bulan (%)
                </span>
                <input
                  type="number"
                  value={tanpaBunga ? 0 : rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  disabled={tanpaBunga}
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  min={0}
                  step={0.1}
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-600">
                  Metode Perhitungan
                </span>
                <select
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  value={method}
                  onChange={(e) => setMethod(e.target.value as Method)}
                >
                  {methodOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-5 flex items-center gap-3">
              <input
                type="checkbox"
                checked={tanpaBunga}
                onChange={(e) => setTanpaBunga(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">Tanpa Bunga (0%)</span>
            </label>

            <div className="mt-6 p-4 rounded-xl bg-blue-50 text-blue-800 text-sm">
              Hasil simulasi hanya estimasi dan tidak mengikat. Besaran final
              mengikuti keputusan koperasi.
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Hasil</h3>
            {hasil ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cicilan / bulan</span>
                  <span className="text-lg font-semibold">
                    {formatIDR(hasil.cicilan)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Bunga</span>
                  <span className="font-medium">
                    {formatIDR(hasil.bungaTotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t pt-3">
                  <span className="text-gray-600">Total Pembayaran</span>
                  <span className="text-lg font-semibold">
                    {formatIDR(hasil.total)}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">Masukkan nilai yang valid.</p>
            )}

            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-medium"
            >
              Konsultasi Pengajuan
            </Link>

            <div className="mt-4 p-3 rounded-xl bg-yellow-50 text-yellow-800 text-sm">
              Saat ini tidak menerima pengajuan online. Silakan datang ke kantor
              koperasi untuk verifikasi dan pengajuan.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
