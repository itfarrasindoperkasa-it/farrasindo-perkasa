import Image from "next/image";
import { Locale } from "@/lib/datas/global";
import bannerPort5 from "@/asset/images/homes/bannerPort.jpeg";
import NewsEventLayout from "@/components/news-event/NewsEventLayout";
import { getUniqueCategory, paginationArticle } from "@/lib/datas/latest_news";
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
      title: "Berita & Artikel - Update Terkini Industri Konstruksi",
      description:
        "Berita terbaru, artikel, dan update kegiatan Farrasindo Group. Informasi terkini seputar industri konstruksi, teknologi beton, dan perkembangan perusahaan.",
      openGraph: {
        title: "Berita & Artikel - Farrasindo Group",
        description:
          "Update terkini seputar Farrasindo Group dan industri konstruksi Indonesia.",
        url: `${baseUrl}/id/news-event`,
      },
      alternates: {
        canonical: `${baseUrl}/id/news-event`,
      },
    };
  }

  return {
    title: "News & Articles - Latest Construction Industry Updates",
    description:
      "Latest news, articles, and updates from Farrasindo Group. Current information about construction industry, concrete technology, and company developments.",
    openGraph: {
      title: "News & Articles - Farrasindo Group",
      description:
        "Latest updates about Farrasindo Group and Indonesia's construction industry.",
      url: `${baseUrl}/en/news-event`,
    },
    alternates: {
      canonical: `${baseUrl}/en/news-event`,
    },
  };
}

export default async function NewsandEvent({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const banner = bannerPort5;
  const itemsPerPage = 6;

  // Server-side data fetching
  const initialData = paginationArticle(1, itemsPerPage, locale);
  const categories = getUniqueCategory(locale as Locale);
  const newsTitle =
    locale === "id" ? "Berita & Artikel Terbaru" : "Latest News & Articles";

  return (
    <div className="w-full overflow-x-hidden max-w-[120rem] mx-auto">
      {/* Banner */}
      <section className="relative w-full h-[60vh] md:h-[500px] overflow-hidden">
        <Image
          src={banner}
          alt="Portfolio Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better menu visibility */}
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* News & Event Content */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-32 bg-[#fcfcfc]">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 tracking-wide">
            {newsTitle}
          </h2>
          <NewsEventLayout
            initialArticles={initialData.articles}
            initialTotalPages={initialData.totalPages}
            categories={categories}
            locale={locale}
          />
        </div>
      </section>
    </div>
  );
}
