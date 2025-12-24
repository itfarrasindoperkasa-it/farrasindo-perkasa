"'use client';";
import LatestNewsData, { articles } from "@/lib/datas/latest_news";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Locale } from "@/lib/datas/global";
import { Metadata } from "next";
import { formatDate } from "@/lib/helper";

interface NewsDetailParams {
  params: Promise<{
    slug: string;
    locale: Locale;
  }>;
}

export async function generateStaticParams() {
  // Generate static params for both locales
  const params = [];
  const locales: Locale[] = ["id", "en"];

  for (const locale of locales) {
    const articlesList = articles[locale] || articles.id;
    for (const news of articlesList) {
      params.push({
        locale,
        slug: news.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const baseUrl = "https://farrasindo-cp.co.id";

  const articlesList = articles[locale] || articles.id;
  const news = articlesList.find((item) => item.slug === slug);

  if (!news) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: `${news.title} - Farrasindo Group`,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      url: `${baseUrl}/${locale}/news-event/${slug}`,
      type: "article",
      publishedTime: news.date,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/news-event/${slug}`,
    },
  };
}

export default async function NewsDetail({ params }: NewsDetailParams) {
  const { slug, locale } = await params;

  // Ambil data news dari articles berdasarkan locale dan slug
  const articlesList = articles[locale] || articles.id;
  const news = articlesList.find((item) => item.slug === slug);

  // Get image index from news.image field
  let imgIdx = 0; // default
  if (news?.image) {
    // Find the index of the image in LatestNewsData array
    imgIdx = LatestNewsData.findIndex((img) => img.src === news.image.src);
    if (imgIdx === -1) {
      imgIdx = 0; // fallback to default if not found
    }
  } else {
    // Fallback: find by slug in articles list
    imgIdx = articlesList.findIndex((item) => item.slug === slug);
    if (imgIdx === -1) {
      imgIdx = 0;
    }
  }

  if (!news) {
    notFound();
  }
  const categories = Array.from(
    new Set(articlesList.map((news) => news.author))
  );
  const searchTitle = "Search Keyword";
  const sidebarTitle = "Kategori";
  const recentPostTitle = "Recent Post";
  const anyQuestionTitle = "Ada Pertanyaan";
  const anyQuestionSubtitle = "Tentang Industri";
  const anyQuestionPhone = "Telepon: 021 – 587 0525";

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
                {articlesList.slice(0, 3).map((news, idx) => (
                  <li key={news.slug} className="flex items-center gap-3">
                    <Image
                      src={LatestNewsData[idx].src}
                      alt={news.title}
                      width={70}
                      height={40}
                      className="rounded object-cover"
                    />
                    <div>
                      <span className="block text-xs text-gray-400 mb-1">
                        {formatDate(news.date, locale)}
                      </span>
                      <Link
                        href={`/${locale}/news-event/${news.slug}`}
                        passHref
                      >
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
                <span className="text-xs text-gray-500">
                  {formatDate(news.date, locale)}
                </span>
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
