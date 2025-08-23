export type Method = "anuitas" | "flat";

export const defaultSimulation = {
  principal: 5_000_000, // pokok (Rp)
  tenorMonths: 12, // bulan
  ratePercent: 1.5, // % per bulan
  method: "anuitas" as Method,
  noInterest: false,
};

export const methodOptions: { value: Method; label: string }[] = [
  { value: "anuitas", label: "Anuitas (angsuran tetap)" },
  { value: "flat", label: "Flat (bunga dari pokok awal)" },
];
