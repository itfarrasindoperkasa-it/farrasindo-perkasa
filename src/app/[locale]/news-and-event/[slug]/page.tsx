import idMessages from "@/messages/id.json";
import LatestNewsData from "@/lib/datas/latest_news";
import Image from "next/image";
import { notFound } from "next/navigation";

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
  const news = idMessages.home.latest_news.list.find(
    (item) => item.slug === slug
  );
  const imgIdx = idMessages.home.latest_news.list.findIndex(
    (item) => item.slug === slug
  );

  if (!news) {
    notFound();
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner Gambar per slug */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden mb-8">
        <Image
          src={LatestNewsData[imgIdx]}
          alt={news.title}
          fill
          className="object-cover"
          priority
        />
      </section>
      <section className="max-w-360 mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-4">Search Keyword</h3>
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
              <h3 className="font-bold text-lg mb-4">Our Category</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex justify-between items-center">
                  Ready Mix <span className="text-xs">(1)</span>
                </li>
                <li className="flex justify-between items-center">
                  Fresh Beton Indonesia <span className="text-xs">(1)</span>
                </li>
                <li className="flex justify-between items-center">
                  Farrasindo Group <span className="text-xs">(10)</span>
                </li>
                <li className="flex justify-between items-center">
                  Construction <span className="text-xs">(1)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-4">Recent Post</h3>
              <ul className="text-sm text-gray-700 space-y-4">
                {idMessages.home.latest_news.list
                  .slice(0, 3)
                  .map((item, idx) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <Image
                        src={LatestNewsData[idx]}
                        alt={item.title}
                        width={56}
                        height={40}
                        className="rounded object-cover w-14 h-10"
                      />
                      <div>
                        <span className="block text-xs text-gray-400 mb-1">
                          {item.date}
                        </span>
                        <span className="font-semibold">{item.title}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="bg-orange-500 text-white rounded-xl shadow p-6 text-center font-bold text-lg mt-2">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={LatestNewsData[13]}
                  alt="Any Question"
                  width={550}
                  height={120}
                  className="mb-4 rounded-lg object-cover"
                />
                <span>Any Question About Industry</span>
                <br />
                <span className="text-2xl">021 – 587 0525</span>
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
              <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line">
                {news.description}
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
