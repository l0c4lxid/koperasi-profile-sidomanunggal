// app/data/data.tsx (or wherever you prefer to place it)

import React from "react";

// Placeholder components
export const PlaceholderIcon = () => (
  <div className="bg-blue-100 border-2 border-dashed border-blue-300 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 font-medium text-xs">
    Icon
  </div>
);

export const PlaceholderImage = ({
  className = "w-full h-64",
}: {
  className?: string;
}) => (
  <div
    className={`bg-gray-200 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-500 ${className}`}
  >
    Placeholder Image
  </div>
);

// Data
export const services = [
  {
    title: "Simpanan Anggota",
    description:
      "Simpanan aman, terjamin, dan menguntungkan untuk masa depan Anda bersama kami.",
    icon: <PlaceholderIcon />,
  },
  {
    title: "Pinjaman Produktif",
    description:
      "Dapatkan dukungan modal usaha dengan suku bunga bersaing dan proses yang mudah.",
    icon: <PlaceholderIcon />,
  },
  {
    title: "Kredit Konsumtif",
    description:
      "Solusi cepat untuk kebutuhan dana mendesak Anda dengan persyaratan yang ringan.",
    icon: <PlaceholderIcon />,
  },
];

export const testimonials = [
  {
    quote:
      "Bergabung dengan Koperasi Sidomanunggal sangat membantu perekonomian keluarga saya. Prosesnya mudah dan pelayanannya ramah.",
    name: "Budi Santoso",
    role: "Anggota Sejak 2018",
  },
  {
    quote:
      "Proses pinjaman modal usaha saya cepat disetujui. Terima kasih Koperasi Sidomanunggal!",
    name: "Siti Aminah",
    role: "Anggota Sejak 2020",
  },
  {
    quote:
      "Saya merasa tenang menyimpan dana di sini. Koperasinya terpercaya dan dikelola dengan baik.",
    name: "Agus Wibowo",
    role: "Anggota Sejak 2015",
  },
];
