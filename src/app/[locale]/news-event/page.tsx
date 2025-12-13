import Image from "next/image";
import { Locale } from "@/lib/datas/global";
import bannerPort5 from "@/asset/images/homes/bannerPort.jpeg";
import NewsEventLayout from "@/components/news-event/NewsEventLayout";
import { getUniqueCategory, paginationArticle } from "@/lib/datas/latest_news";

export default async function NewsandEvent({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const banner = bannerPort5;
  const itemsPerPage = 6;

  // Server-side data fetching
  const initialData = paginationArticle(1, itemsPerPage, locale);
  const categories = getUniqueCategory();
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
