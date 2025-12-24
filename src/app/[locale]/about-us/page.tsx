import AboutUsClient from "@/components/about-us/AboutUsClient";
import { Locale } from "@/lib/datas/global";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://farrasindo-cp.co.id";

  if (locale === "id") {
    return {
      title: "Tentang Kami - Sejarah & Visi Misi Farrasindo Group",
      description:
        "Mengenal Farrasindo Group: Sejarah 20+ tahun, visi misi perusahaan, struktur grup, dan komitmen kami dalam menyediakan solusi terpadu industri beton di Indonesia sejak 2001.",
      openGraph: {
        title: "Tentang Kami - Farrasindo Group",
        description:
          "Sejarah, visi misi, dan komitmen Farrasindo Group sebagai pemimpin industri beton Indonesia sejak 2001.",
        url: `${baseUrl}/id/about-us`,
      },
      alternates: {
        canonical: `${baseUrl}/id/about-us`,
      },
    };
  }

  return {
    title: "About Us - History & Vision Mission Farrasindo Group",
    description:
      "Discover Farrasindo Group: 20+ years of history, company vision mission, group structure, and our commitment to providing integrated concrete industry solutions in Indonesia since 2001.",
    openGraph: {
      title: "About Us - Farrasindo Group",
      description:
        "History, vision mission, and commitment of Farrasindo Group as Indonesia's concrete industry leader since 2001.",
      url: `${baseUrl}/en/about-us`,
    },
    alternates: {
      canonical: `${baseUrl}/en/about-us`,
    },
  };
}

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const aboutJson = await import(`@/messages/${locale}.json`);

  return <AboutUsClient aboutJson={aboutJson.aboutPage} />;
}
