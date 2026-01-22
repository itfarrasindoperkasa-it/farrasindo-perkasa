import type { Metadata } from "next";

const baseUrl = "https://farrasindo-cp.co.id";
export const metadata: Metadata = {
  title: "Farrasindo Group - Solusi Industri Beton & Alat Berat",
  description:
    "Farrasindo Group adalah perusahaan terkemuka di Indonesia yang menyediakan solusi terpadu industri beton: penyewaan concrete pump & alat berat, beton pracetak, ready mix, sparepart, dan layanan purna jual dengan 17+ cabang di seluruh Indonesia sejak 2001.",
  keywords: [
    "farrasindo",
    "concrete pump indonesia",
    "sewa alat berat",
    "penyewaan concrete pump",
    "beton pracetak",
    "ready mix",
    "truck mixer",
    "pompa beton",
    "farracon precast",
    "intijaya industri",
    "fresh beton indonesia",
    "sparepart concrete pump",
    "service alat beton",
    "alat konstruksi",
    "rental concrete pump jakarta",
    "concrete pump surabaya",
    "pompa beton jakarta",
    "beton cor",
    "solusi beton terpadu",
    "industri konstruksi indonesia",
    "concrete pump rental",
    "boom pump indonesia",
    "line pump",
    "concrete batching plant",
    "pompa stasioner",
    "sewa pompa beton",
    "harga sewa concrete pump",
    "jasa pemompaan beton",
  ],
  openGraph: {
    title: "Farrasindo Group - Solusi Terpadu Industri Beton Indonesia",
    description:
      "Penyewaan concrete pump & alat berat, beton pracetak, ready mix, sparepart, dan layanan purna jual terlengkap. 17+ cabang di Indonesia, pengalaman 20+ tahun sejak 2001.",
    url: `${baseUrl}/id`,
    siteName: "Farrasindo Group",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Farrasindo Group - Solusi Industri Beton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farrasindo Group - Solusi Terpadu Industri Beton",
    description:
      "Penyewaan concrete pump, beton pracetak, ready mix, sparepart & service. 17+ cabang di Indonesia.",
    images: [`${baseUrl}/twitter-image.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/id`,
    languages: {
      "id-ID": `${baseUrl}/id`,
      "en-US": `${baseUrl}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
