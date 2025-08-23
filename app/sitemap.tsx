import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.koperasikredit-sidomanunggal.my.id";
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Jika nanti kamu buat halaman terpisah (bukan sekadar #section), tambahkan di sini:
    // { url: `${base}/syarat-meminjam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // { url: `${base}/syarat-anggota`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // { url: `${base}/simulasi-bunga`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
