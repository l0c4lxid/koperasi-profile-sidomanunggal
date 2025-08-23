export type Fee = { name: string; value: string };

export const memberRequirements: string[] = [
  "WNI berusia ≥ 17 tahun atau sudah menikah",
  "Domisili/aktivitas ekonomi di wilayah layanan koperasi",
  "Mengisi formulir pendaftaran dan menyetujui AD/ART",
  "Setoran simpanan pokok & simpanan wajib sesuai ketentuan",
  "Fotokopi KTP & pas foto (jika diminta)",
];

export const memberBenefits: string[] = [
  "Akses produk simpanan & pinjaman dengan bunga kompetitif",
  "Bagi hasil (SHU) sesuai ketentuan",
  "Edukasi keuangan & pelatihan anggota",
  "Transparansi laporan keuangan",
];

export const memberFees: Fee[] = [
  { name: "Simpanan Pokok (sekali bayar)", value: "Rp100.000" },
  { name: "Simpanan Wajib (bulanan)", value: "Rp25.000" },
  { name: "Biaya pendaftaran (jika ada)", value: "Rp10.000" },
];
