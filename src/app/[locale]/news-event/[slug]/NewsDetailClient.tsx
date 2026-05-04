"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/helper";
import NewsEventFiltering from "@/components/news-event/NewsEventFiltering";

export default function NewsDetailClient({ 
  news, 
  locale, 
  articleLatests, 
  categories 
}: { 
  news: any; 
  locale: string; 
  articleLatests: any[]; 
  categories: string[] 
}) {
  const router = useRouter();

  const handleFilter = (value: string, key: "keyword" | "category") => {
    const searchParams = new URLSearchParams();
    if (key === "keyword") searchParams.set("q", value);
    if (key === "category") searchParams.set("cat", value);
    router.push(`/${locale}/news-event?${searchParams.toString()}`);
  };

  return (
    <div className="w-full overflow-x-hidden bg-[#fcfcfc]">
      {/* Banner */}
      <section className="relative w-full h-[40vh] md:h-[500px] overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content - Articles First on Mobile */}
            <main className="lg:w-3/4 w-full flex flex-col gap-8 order-1 lg:order-2">
              <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 overflow-hidden">
                <div className="flex items-center gap-6 mb-8">
                  <span className="bg-[#f97d00] text-white font-bold text-xs px-4 py-2 uppercase tracking-widest rounded-xl">
                    {news.author}
                  </span>
                  <span className="text-sm font-semibold text-gray-400">
                    {formatDate(news.date, locale)}
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 leading-tight">
                  {news.title}
                </h1>

                <p className="text-lg text-gray-600 mb-10 font-medium leading-relaxed italic border-l-4 border-[#f97d00] pl-6">
                  {news.excerpt}
                </p>

                <div 
                  className="article-content prose prose-lg max-w-none text-gray-700 whitespace-pre-line leading-loose text-lg"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                  dangerouslySetInnerHTML={{ __html: news.description }}
                />
              </article>
            </main>

            {/* Sidebar - Second on Mobile */}
            <aside className="lg:w-1/4 w-full order-2 lg:order-1">
              <NewsEventFiltering
                latestArticle={articleLatests}
                handleFilter={handleFilter}
                selectedCategory={news.author}
                categories={categories}
                keyword=""
                locale={locale}
              />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
