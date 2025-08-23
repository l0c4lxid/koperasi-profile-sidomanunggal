export type SimulationDefaults = {
  principal: number; // Pokok pinjaman (Rp)
  tenorMonths: number; // Tenor (bulan)
  interestPercent: number; // Bunga per angsuran (% dari pokok awal)
  swpPercent: number; // Potongan awal SWP (% dari pokok)
};

export const defaultSimulation: SimulationDefaults = {
  principal: 1_000_000,
  tenorMonths: 10,
  interestPercent: 2.0, // contohmu: 2% tetap
  swpPercent: 2.5, // contohmu: SWP 2.5%
};
