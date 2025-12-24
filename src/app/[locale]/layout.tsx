import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Locale } from "@/lib/datas/global";
import { RootLayoutProps } from "../layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://farrasindo-cp.co.id";

  if (locale === "id") {
    return {
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
  }

  // English metadata
  return {
    title: "Farrasindo Group - Concrete Solutions Indonesia",
    description:
      "Farrasindo Group is a leading company in Indonesia providing integrated concrete industry solutions: concrete pump & heavy equipment rental, precast concrete, ready mix, spare parts, and after-sales services with 17+ branches across Indonesia since 2001.",
    keywords: [
      "farrasindo",
      "concrete pump indonesia",
      "heavy equipment rental",
      "concrete pump rental",
      "precast concrete",
      "ready mix concrete",
      "truck mixer",
      "concrete pump",
      "farracon precast",
      "intijaya industri",
      "fresh beton indonesia",
      "concrete pump spare parts",
      "concrete equipment service",
      "construction equipment",
      "concrete pump rental jakarta",
      "concrete pump surabaya",
      "concrete pumping services",
      "boom pump",
      "line pump",
      "concrete batching plant",
      "stationary pump",
      "concrete pump hire",
      "concrete industry solutions",
      "construction industry indonesia",
    ],
    openGraph: {
      title:
        "Farrasindo Group - Integrated Concrete Industry Solutions in Indonesia",
      description:
        "Concrete pump & heavy equipment rental, precast concrete, ready mix, spare parts, and complete after-sales services. 17+ branches in Indonesia, 20+ years of experience since 2001.",
      url: `${baseUrl}/en`,
      siteName: "Farrasindo Group",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Farrasindo Group - Concrete Industry Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Farrasindo Group - Integrated Concrete Solutions",
      description:
        "Concrete pump rental, precast concrete, ready mix, spare parts & service. 17+ branches in Indonesia.",
      images: [`${baseUrl}/twitter-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/en`,
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
}

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const locale = (await params).locale;
  const localeContent = await import(`@/messages/${locale}.json`);
  const { organizationSchema, localBusinessSchema, serviceSchema } =
    await import("@/lib/structured-data");

  return (
    <html lang={locale}>
      <body>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <Navigation locale={locale} />
        {children}
        <Footer footer={localeContent.footer} locale={locale} />
      </body>
    </html>
  );
}
