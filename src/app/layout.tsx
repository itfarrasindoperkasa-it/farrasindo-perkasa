import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Locale } from "@/lib/datas/global";

export const metadata: Metadata = {
  metadataBase: new URL("https://farrasindo-cp.co.id"),
  title:
    "Farrasindo Group - Solusi Terpadu Industri Beton & Alat Berat Indonesia",
  description:
    "Farrasindo Group adalah perusahaan terkemuka di Indonesia yang menyediakan solusi terpadu industri beton: penyewaan concrete pump & alat berat, beton pracetak, ready mix, sparepart, dan layanan purna jual dengan 17+ cabang di seluruh Indonesia sejak 2001.",
  authors: [{ name: "Farrasindo Group" }],
  creator: "Farrasindo Group",
  publisher: "PT Farrasindo",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    siteName: "Farrasindo Group",
    url: "https://farrasindo-cp.co.id",
    title:
      "Farrasindo Group - Solusi Terpadu Industri Beton & Alat Berat Indonesia",
    description:
      "Penyewaan concrete pump & alat berat, beton pracetak, ready mix, sparepart, dan layanan purna jual terlengkap. 17+ cabang di Indonesia, pengalaman 20+ tahun sejak 2001.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Farrasindo Group - Solusi Industri Beton",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@farrasindo",
    creator: "@farrasindo",
    title: "Farrasindo Group - Solusi Terpadu Industri Beton",
    description:
      "Penyewaan concrete pump, beton pracetak, ready mix, sparepart & service. 17+ cabang di Indonesia.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "/id",
    languages: {
      "id-ID": "/id",
      "en-US": "/en",
    },
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    notranslate: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "your-google-search-console-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },
  category: "construction",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a4d2e" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
});

export interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
