export type Step = { title: string; desc: string };
export type Requirement = string;

export const loanSteps: Step[] = [
  { title: "Pokok pinjaman", desc: "Jumlah pinjaman yang diambil." },
  {
    title: "Tagihan angsuran pokok per bulan",
    desc: "Cicilan dari pokok pinjaman.",
  },
  {
    title: "Jasa (bunga) pinjaman",
    desc: "Ada bunga tetap 2% per bulan.",
  },
  {
    title: "Tagihan jasa per bulan",
    desc: "Tambahan jasa/bunga rutin.",
  },
  {
    title: "Denda 0,5% dari tunggakan",
    desc: "Jika ada cicilan yang belum dibayar.",
  },
  {
    title: "Denda 1% setelah jatuh tempo",
    desc: "Tambahan denda jika melewati batas waktu yang disepakati.",
  },
];

export const loanRequirements: Requirement[] = [
  "Menjadi anggota koperasi",
  "Mengajukan permohonan pinjaman",
  "Disetujui oleh pengurus",
  "Menyepakati perjanjian pinjaman",
  "Membayar kewajiban sesuai perjanjian",
];
