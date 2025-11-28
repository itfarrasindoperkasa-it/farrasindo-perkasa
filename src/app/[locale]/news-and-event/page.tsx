import HomeBannerData from "@/lib/datas/home_banner";
import idMessages from "@/messages/id.json";
import LatestNewsData from "@/lib/datas/latest_news";
import Image from "next/image";
import Link from "next/link";

export default function NewsandEvent() {
  const banner = HomeBannerData[5];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        <Image
          src={banner}
          alt="Portfolio Banner"
          fill
          className="object-contain"
          priority
        />
      </section>

      {/* News & Event Content */}
      <section className="max-w-360 mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          News and Event
        </h2>
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
                  .map((news, idx) => (
                    <li key={news.id} className="flex items-center gap-3">
                      <Image
                        src={LatestNewsData[idx].src}
                        alt={news.title}
                        width={56}
                        height={40}
                        className="rounded object-cover w-14 h-10"
                      />
                      <div>
                        <span className="block text-xs text-gray-400 mb-1">
                          {news.date}
                        </span>
                        <span className="font-semibold">{news.title}</span>
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
            {/* Featured News */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {idMessages.home.latest_news.list.slice(0, 2).map((news, idx) => (
                <div
                  key={news.id}
                  className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
                >
                  <Image
                    src={LatestNewsData[idx].src}
                    alt={news.title}
                    width={320}
                    height={180}
                    className="rounded-lg object-cover mb-4 w-full h-[180px]"
                  />
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="bg-orange-400 text-white font-bold text-xs px-3 py-1 rounded">
                      {news.author}
                    </span>
                    <span className="text-xs text-gray-500">{news.date}</span>
                  </div>
                  <Link href={`/id/news-and-event/${news.slug}`} passHref>
                    <div className="text-lg font-bold mb-2 hover:text-orange-400 transition-colors duration-200">
                      {news.title}
                    </div>
                  </Link>
                  {/* <span className="text-xs text-gray-500">{news.author}</span> */}
                </div>
              ))}
            </div>
            {/* News List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {idMessages.home.latest_news.list.slice(2).map((news, idx) => (
                <div
                  key={news.id}
                  className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
                >
                  <Image
                    src={LatestNewsData[idx + 2].src}
                    alt={news.title}
                    width={320}
                    height={180}
                    className="rounded-lg object-cover mb-4 w-full h-[180px]"
                  />
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="bg-orange-400 text-white font-bold text-xs px-3 py-1 rounded">
                      {news.author}
                    </span>
                    <span className="text-xs text-gray-500">{news.date}</span>
                  </div>
                  <Link href={`/id/news-and-event/${news.slug}`} passHref>
                    <div className="text-lg font-bold mb-2 hover:text-orange-400 transition-colors duration-200">
                      {news.title}
                    </div>
                  </Link>
                  {/* <span className="text-xs text-gray-500">{news.author}</span> */}
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
