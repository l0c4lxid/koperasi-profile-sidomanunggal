import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koperasi Sidomanunggal - Mitra Keuangan Terpercaya",
  description:
    "Koperasi Sidomanunggal menyediakan solusi simpan pinjam dan kredit untuk kesejahteraan bersama anggota.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
