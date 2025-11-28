"use client";

import HomeBannerData from "@/lib/datas/home_banner";
import idMessages from "@/messages/id.json";
import LatestNewsData from "@/lib/datas/latest_news";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Calendar } from "lucide-react";

export default function NewsandEvent() {
  const banner = HomeBannerData[5];
  // Pagination setup
  const newsList = idMessages.home.latest_news.list;
  const totalNews = newsList.length;
  const itemsPerPage = 12;
  const [page, setPage] = React.useState(1);
  const totalPages = Math.ceil(totalNews / itemsPerPage);
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  // Slice news data for current page
  const [keyword, setKeyword] = useState("");
  const [filteredNews, setFilteredNews] = useState(newsList);
  const paginatedNews = filteredNews.slice(startIdx, endIdx);
  // Slice image data for main content (max 13 images)
  const slicedImages = LatestNewsData;

  // Ambil title dari idMessages.home.latest_news.title
  const newsTitle = idMessages.home.latest_news.title;
  // Ambil kategori unik dari newsList
  const categories = Array.from(new Set(newsList.map((news) => news.author)));
  const [selectedCategory, setSelectedCategory] = useState("");

  // Ambil title dan label kategori dari id.json
  const sidebarTitle = idMessages.home.latest_news.sidebarTitle || "Kategori";
  const allCategoryLabel =
    idMessages.home.latest_news.allCategoryLabel || "Semua";

  const searchTitle =
    idMessages.home.latest_news.searchTitle || "Kata Kunci Pencarian";
  const searchPlaceholder =
    idMessages.home.latest_news.searchPlaceholder || "Search ...";
  const searchButton = idMessages.home.latest_news.searchButton || "🔍";
  const recentPostTitle =
    idMessages.home.latest_news.recentPostTitle || "Terbaru Posting";
  const anyQuestionTitle =
    idMessages.home.latest_news.anyQuestionTitle || "Ada Pertanyaan";
  const anyQuestionSubtitle =
    idMessages.home.latest_news.anyQuestionSubtitle || "Tentang Industri";
  const anyQuestionPhone =
    idMessages.home.latest_news.anyQuestionPhone || "Telepon: 021 – 587 0525";
  const paginationNext = idMessages.home.latest_news.paginationNext || "Next";
  const paginationPrevious =
    idMessages.home.latest_news.paginationPrevious || "Previous";

  const handleSearch = () => {
    setPage(1);
    if (keyword.trim() === "") {
      setFilteredNews(newsList);
    } else {
      setFilteredNews(
        newsList.filter(
          (news) =>
            news.title.toLowerCase().includes(keyword.toLowerCase()) ||
            news.excerpt.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    }
  };

  // Filter kategori
  const handleCategory = (cat: React.SetStateAction<string>) => {
    setSelectedCategory(cat);
    setPage(1);
    if (cat === "") {
      setFilteredNews(newsList);
    } else {
      setFilteredNews(newsList.filter((news) => news.author === cat));
    }
  };

  // Fungsi untuk mendapatkan gambar sesuai id/slug
  const getImageByNews = (
    news:
      | {
          id: number;
          title: string;
          date: string;
          excerpt: string;
          link: string;
          slug: string;
          author: string;
          description: string;
          image?: undefined;
        }
      | {
          id: number;
          title: string;
          date: string;
          excerpt: string;
          link: string;
          slug: string;
          author: string;
          image: string;
          description: string;
        }
      | {
          id: number;
          title: string;
          date: string;
          excerpt: string;
          slug: string;
          author: string;
          description: string;
          link?: undefined;
          image?: undefined;
        }
  ) => {
    // Cari index di newsList asli
    const idx = newsList.findIndex((item) => item.id === news.id);
    return LatestNewsData[idx] || LatestNewsData[0];
  };

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
          {newsTitle}
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-4">{searchTitle}</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="border rounded-l px-3 py-2 w-full"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-r"
                  onClick={handleSearch}
                >
                  {searchButton}
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-4">{sidebarTitle}</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <button
                    className={`hover:text-orange-400 transition-colors border-b border-gray-200 pb-2 w-full text-left ${
                      selectedCategory === "" ? "font-bold text-orange-400" : ""
                    }`}
                    onClick={() => handleCategory("")}
                  >
                    {allCategoryLabel}
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className={`hover:text-orange-400 transition-colors border-b border-gray-200 pb-2 w-full text-left ${
                        selectedCategory === cat
                          ? "font-bold text-orange-400"
                          : ""
                      }`}
                      onClick={() => handleCategory(cat)}
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
            {/* News List with Pagination */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {paginatedNews.map((news) => {
                return (
                  <div
                    key={news.id}
                    className="bg-white rounded-xl shadow p-6 flex flex-col "
                  >
                    <Image
                      src={getImageByNews(news)}
                      alt={news.title}
                      width={360}
                      height={250}
                      className="rounded-lg object-cover mb-4 w-full h-[250px]"
                    />
                    <div className="flex justify-between items-center w-full mb-2">
                      <span className="bg-orange-400 text-white font-bold text-xs px-3 py-1 rounded">
                        {news.author}
                      </span>
                      <span className="text-xs text-orange-500 flex items-center gap-1">
                        <Calendar size={16} className="inline-block" />
                        {news.date}
                      </span>
                    </div>
                    <Link href={`/id/news-and-event/${news.slug}`} passHref>
                      <div className="text-lg font-bold mb-2 hover:text-orange-400 transition-colors duration-200">
                        {news.title}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-orange-400 hover:text-white"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  {paginationPrevious}
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      className={`px-3 py-1 rounded-lg ${
                        page === i + 1
                          ? "bg-orange-400 text-white"
                          : "bg-gray-200 hover:bg-orange-400 hover:text-white"
                      }`}
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-orange-400 hover:text-white"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  {paginationNext}
                </button>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
