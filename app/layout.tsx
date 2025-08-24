import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://www.koperasikredit-sidomanunggal.my.id";
const siteName = "Koperasi Sidomanunggal";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Mitra Keuangan Terpercaya`,
    template: `%s | ${siteName}`,
  },
  description:
    "Koperasi Sido Manunggal: layanan simpan pinjam & kredit berbasis asas kekeluargaan dan gotong royong di Kulon Progo.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} — Mitra Keuangan Terpercaya`,
    description:
      "Solusi simpan pinjam untuk kesejahteraan anggota. Transparan, aman, dan akuntabel.",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Mitra Keuangan Terpercaya`,
    description:
      "Solusi simpan pinjam untuk kesejahteraan anggota. Transparan, aman, dan akuntabel.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  // (opsional) verifikasi GSC: taruh tokenmu di sini
  // verification: { google: "GOOGLE_SITE_VERIFICATION_TOKEN" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body>
        {/* JSON-LD: Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreditUnion", // atau "FinancialService"
              name: siteName,
              url: siteUrl,
              telephone: "+62-856-4786-8154",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Balai Desa No.3, Ledok, Sidorejo",
                addressLocality: "Lendah",
                addressRegion: "Daerah Istimewa Yogyakarta",
                postalCode: "55663",
                addressCountry: "ID",
              },
              image: `${siteUrl}/og-cover.jpg`,
              // Sesuaikan jam operasionalmu:
              // openingHours: "Mo-Sa 08:00-17:00",
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
