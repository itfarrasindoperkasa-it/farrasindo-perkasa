"'use client';";
import idMessages from "@/messages/id.json";
import LatestNewsData from "@/lib/datas/latest_news";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return idMessages.home.latest_news.list.map((news) => ({
    slug: news.slug,
  }));
}

interface NewsDetailParams {
  params: {
    slug: string;
  };
}

export default async function NewsDetail({ params }: NewsDetailParams) {
  const { slug } = await params;
  // Ambil data news dari id.json berdasarkan slug
  const news = idMessages.home.latest_news.list.find(
    (item) => item.slug === slug
  );
  const imgIdx = idMessages.home.latest_news.list.findIndex(
    (item) => item.slug === slug
  );

  if (!news) {
    notFound();
  }
  const categories = Array.from(
    new Set(idMessages.home.latest_news.list.map((news) => news.author))
  );
  const searchTitle =
    idMessages.home.latest_news.searchTitle || "Search Keyword";
  const sidebarTitle = idMessages.home.latest_news.sidebarTitle || "Kategori";
  const recentPostTitle =
    idMessages.home.latest_news.recentPostTitle || "Recent Post";
  const anyQuestionTitle =
    idMessages.home.latest_news.anyQuestionTitle || "Ada Pertanyaan";
  const anyQuestionSubtitle =
    idMessages.home.latest_news.anyQuestionSubtitle || "Tentang Industri";
  const anyQuestionPhone =
    idMessages.home.latest_news.anyQuestionPhone || "Telepon: 021 – 587 0525";

  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner Gambar per slug */}
      <section className="relative w-full h-[300px] md:h-[500px] overflow-hidden mb-8 ">
        <Image
          src={LatestNewsData[imgIdx]}
          alt={news.title}
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </section>
      <section className="max-w-360 mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-4">{searchTitle}</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="border rounded-l px-3 py-2 w-full"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-r">
                  🔍
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-4">{sidebarTitle}</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className={`hover:text-orange-400 transition-colors border-b border-gray-200 pb-2 w-full text-left ${
                        cat === news.author ? "font-bold text-orange-400" : ""
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-4">{recentPostTitle}</h3>
              <ul className="text-sm text-gray-700 space-y-4">
                {idMessages.home.latest_news.list
                  .slice(0, 3)
                  .map((news, idx) => (
                    <li key={news.id} className="flex items-center gap-3">
                      <Image
                        src={LatestNewsData[idx].src}
                        alt={news.title}
                        width={70}
                        height={40}
                        className="rounded object-cover"
                      />
                      <div>
                        <span className="block text-xs text-gray-400 mb-1">
                          {news.date}
                        </span>
                        <Link href={`/id/news-and-event/${news.slug}`} passHref>
                          <span className="font-semibold hover:text-orange-400 transition-colors cursor-pointer">
                            {news.title}
                          </span>
                        </Link>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="relative flex flex-col items-center justify-center mt-2">
              <Image
                src={LatestNewsData[13]}
                alt="Any Question"
                width={400}
                height={180}
                className="rounded-xl object-cover z-0"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
              />
              <div
                className="bg-orange-500 text-white rounded-xl shadow-lg px-8 py-6 text-center font-bold text-lg z-10 relative"
                style={{ marginTop: "-40px", minWidth: "320px" }}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="mb-2">
                    {anyQuestionTitle}
                    <br />
                    {anyQuestionSubtitle}
                  </span>
                  <span className="text-2xl font-semibold">
                    {anyQuestionPhone}
                  </span>
                </div>
              </div>
            </div>
          </aside>
          {/* Main Content */}
          <main className="lg:w-3/4 w-full flex flex-col gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-orange-400 text-white font-bold text-xs px-3 py-1 rounded">
                  {news.author}
                </span>
                <span className="text-xs text-gray-500">{news.date}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">
                {news.title}
              </h1>
              <p className="text-gray-700 mb-6">{news.excerpt}</p>
              <div className="prose prose-lg max-w-none text-justify text-gray-800 whitespace-pre-line">
                {news.description}
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
