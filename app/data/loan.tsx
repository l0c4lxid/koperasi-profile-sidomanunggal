export type Step = { title: string; desc: string };
export type Requirement = string;

export const loanSteps: Step[] = [
  { title: "Cek Keanggotaan", desc: "Peminjam wajib merupakan anggota aktif." },
  {
    title: "Siapkan Dokumen",
    desc: "KTP, Kartu Anggota, slip gaji/bukti penghasilan, dan form pengajuan pinjaman.",
  },
  {
    title: "Pengajuan di Kantor",
    desc: "Verifikasi identitas & pengisian formulir oleh petugas koperasi.",
  },
  {
    title: "Survey & Analisis",
    desc: "Verifikasi data, analisis kemampuan bayar, dan penentuan plafon pinjaman.",
  },
  {
    title: "Persetujuan & Pencairan",
    desc: "Tanda tangan perjanjian pinjaman dan pencairan dana sesuai ketentuan.",
  },
  {
    title: "Pembayaran Angsuran",
    desc: "Bayar bulanan sesuai jadwal. Keterlambatan mengikuti kebijakan koperasi.",
  },
];

export const loanRequirements: Requirement[] = [
  "Menjadi anggota aktif minimal 1 bulan",
  "Fotokopi KTP dan Kartu Keluarga",
  "Kartu Anggota Koperasi",
  "Slip gaji / bukti penghasilan 1–3 bulan terakhir",
  "Rekening listrik/air (opsional untuk verifikasi alamat)",
];
