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
  const categories = getUniqueCategory(locale);
  const newsTitle =
    locale === "id" ? "Berita & Artikel Terbaru" : "Latest News & Articles";

  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner */}
      <section className="relative w-full h-[60vh] md:h-[500px] overflow-hidden">
        <Image
          src={banner}
          alt="Portfolio Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* News & Event Content */}
      <section className="max-w-7xl mx-auto md:px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {newsTitle}
        </h2>
        <NewsEventLayout
          initialArticles={initialData.articles}
          initialTotalPages={initialData.totalPages}
          categories={categories}
          locale={locale}
        />
      </section>
    </div>
  );
}
