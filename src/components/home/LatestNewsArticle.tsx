import { Locale } from "@/lib/datas/global";
import { paginationArticle } from "@/lib/datas/latest_news";
import Image from "next/image";
import Link from "next/link";

export default function LatestNewsArticle({ lang }: { lang: string }) {
  const articles = paginationArticle(1, 4, lang).articles;
  return (
    <div className="py-20 px-5 md:px-10 bg-white">
      <section className="w-full max-w-7xl mx-auto mb-10">
        <div className="header flex flex-col md:flex-row md:justify-between items-center gap-5 md:gap-0">
          <div>
            <span className="text-orange-400 font-semibold">
              {lang == "id" ? "Berita Terbaru" : "Latest News"}
            </span>
            <h2 className="text-4xl font-bold">
              {lang == "id" ? "Artikel Berita" : "News Articles"}
            </h2>
          </div>
          <div>
            <Link
              href={`/${lang}/news-event`}
              className="rounded-full border border-orange-400 px-4 py-3 font-semibold text-orange-400 hover:bg-orange-400 hover:text-white"
            >
              {lang == "id" ? "Baca Selengkapnya" : "Read More"}
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="articles flex gap-5 flex-col md:flex-row">
          <div className="md:order-last md:flex-3 ">
            <article className="border border-gray-200 rounded-xl p-5 group hover:shadow-lg/20">
              <div className="w-full mb-5">
                <Image
                  src={articles[0].image}
                  alt={`${articles[0].title}`}
                  className="object-contain w-full h-full rounded-xl shadow-lg/30"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400">
                {articles[0].title}
              </h3>
              <small className="text-gray-500">
                <i>
                  {new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(articles[0].date))}
                  - {articles[0].author}
                </i>
              </small>
              <p className="text-justify text-gray-700 mt-3 mb-5 text-sm">
                {articles[0].excerpt}
              </p>
              <Link
                href={`/${lang}/news-event/${articles[0].slug}`}
                className="hover:bg-orange-500 transition-color bg-orange-400 rounded-full text-white cursor-pointer px-4 py-2 text-sm"
              >
                {lang == "id" ? `Baca Selengkapnya` : `Read More`}
              </Link>
            </article>
          </div>
          <div className="flex flex-col flex-4 gap-3">
            {articles.length > 0 &&
              articles
                .filter((_, idx) => idx != 0)
                .map((article, idx) => (
                  <article
                    className="flex gap-8 md:flex-row-reverse flex-col md:flex-row border border-gray-200 rounded-xl p-5 hover:shadow-lg group"
                    key={idx}
                  >
                    <div className="flex-4 flex items-center justify-center">
                      <Image
                        src={article.image}
                        alt={`${article.title}`}
                        className="object-contain w-full rounded-xl shadow-lg/30 "
                      />
                    </div>
                    <div className="flex-4">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                        {article.title}
                      </h3>
                      <small className="text-gray-500">
                        <i>
                          {new Intl.DateTimeFormat(
                            lang === "id" ? "id-ID" : "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          ).format(new Date(article.date))}
                          - {article.author}
                        </i>
                      </small>
                      <p className="text-justify text-gray-700 mt-3 mb-5 text-sm">
                        {article.excerpt}
                      </p>
                      <Link
                        href={`/${lang}/news-event/${article.slug}`}
                        className="hover:bg-orange-500 transition-color bg-orange-400 rounded-full text-white cursor-pointer px-4 py-2 text-sm"
                      >
                        {lang == "id" ? `Baca Selengkapnya` : `Read More`}
                      </Link>
                    </div>
                  </article>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}
