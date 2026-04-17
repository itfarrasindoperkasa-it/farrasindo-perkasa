import { Locale } from "@/lib/datas/global";
import { paginationArticle } from "@/lib/datas/latest_news";
import Image from "next/image";
import Link from "next/link";

export default function LatestNewsArticle({ lang }: { lang: string }) {
  const { articles } = paginationArticle(1, 4, lang);
  
  if (articles.length === 0) return null;

  const latestArticle = articles[0];
  const remainingArticles = articles.slice(1);

  const formatDate = (dateStr: string) => {
    return new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateStr));
  };

  return (
    <div className="py-20 px-5 md:px-10 bg-white font-sans">
      <section className="w-full max-w-7xl mx-auto mb-16">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-extrabold text-[#171717]">
            {lang == "id" ? "Artikel Berita" : "News Articles"}
          </h2>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          {/* Featured Latest Article - Full Width */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl group">
            <Link href={`/${lang}/news-event/${latestArticle.slug}`} className="flex flex-col lg:flex-row lg:items-stretch">
              <div className="lg:w-1/2 relative h-[250px] md:h-[350px] lg:h-auto overflow-hidden">
                <Image
                  src={latestArticle.image}
                  alt={latestArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {lang == "id" ? "Terbaru" : "Latest"}
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-gray-500 mb-4 text-sm">
                  <span className="font-medium">{formatDate(latestArticle.date)}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="font-medium">{latestArticle.author}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-orange-400 transition-colors">
                  {latestArticle.title}
                </h3>
                <p className="text-gray-600 text-base mb-6 line-clamp-3 leading-relaxed">
                  {latestArticle.excerpt}
                </p>
                <div>
                  <span className="inline-flex items-center gap-2 text-orange-400 font-bold text-lg group-hover:gap-4 transition-all">
                    {lang == "id" ? "Baca Selengkapnya" : "Read More"}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Remaining Articles - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingArticles.map((article, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Link href={`/${lang}/news-event/${article.slug}`} className="flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-4 line-clamp-2 leading-tight group-hover:text-orange-400 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-2 text-orange-400 font-bold text-sm transition-all group-hover:gap-3">
                        {lang == "id" ? "Baca Selengkapnya" : "Read More"}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* View All News Button - Bottom Centered */}
        <div className="mt-16 flex justify-center">
          <Link
            href={`/${lang}/news-event`}
            className="group flex items-center justify-center gap-2 rounded-full border-2 border-orange-400 px-8 py-3 font-bold text-orange-400 transition-all hover:bg-orange-400 hover:text-white shadow-sm hover:shadow-md"
          >
            {lang == "id" ? "Lihat Semua Berita" : "View All News"}
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>

  );
}
