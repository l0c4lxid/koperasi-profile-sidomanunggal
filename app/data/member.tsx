export type Fee = { name: string; value: string };

export const memberRequirements: string[] = [
  "Nama lengkap",
  "Alamat",
  "Pekerjaan",
  "Kantor Kerja",
  "Tempat & Tanggal Lahir",
  "Nama Istri/Suami",
  "NIK (Nomor Induk Kependudukan)",
];

export const memberBenefits: string[] = [
  "Calon anggota mengisi formulir ini dengan lengkap.",
  "Membayar setoran awal sesuai rincian di atas.",
  "Formulir ditandatangani oleh pemohon dan pengurus koperasi.",
  "Setelah diterima, resmi menjadi anggota koperasi.",
];

export const memberFees: Fee[] = [
  { name: "Uang Pangkal", value: "Rp10.000" },
  { name: "Uang Penyertaan", value: "Rp75.000" },
  { name: "Simpanan Pokok (sekali bayar)", value: "Rp10.000" },
  { name: "Simpanan Sukarela", value: " " },
  { name: "Simpanan Wajib (bulanan)", value: "Rp5.000" },
];
