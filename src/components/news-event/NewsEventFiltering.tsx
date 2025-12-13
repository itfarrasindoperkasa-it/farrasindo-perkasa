"use client";

import { Locale } from "@/lib/datas/global";
import LatestNewsData from "@/lib/datas/latest_news";
import { formatDate } from "@/lib/helper";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";

export default function NewsEventFiltering({
  latestArticle,
  handleFilter,
  selectedCategory,
  categories,
  keyword,
  lang,
}: {
  latestArticle: any;
  handleFilter: (keyword: string, key: "keyword" | "category") => void;
  selectedCategory: any;
  categories: any;
  keyword: string;
  lang: string;
}) {
  const searchTitle = "Kata Kunci Pencarian";
  const searchPlaceholder = "Search ...";
  const recentPostTitle = "Terbaru Posting";
  const anyQuestionTitle = "Ada Pertanyaan";
  const anyQuestionSubtitle = "Tentang Industri";
  const anyQuestionPhone = "Telepon: 021 – 587 0525";
  const sidebarTitle = "Kategori";
  const allCategoryLabel = "Semua";

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-bold text-lg mb-4">{searchTitle}</h3>
        <div className="flex">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="border rounded-md px-3 py-2 w-full"
            value={keyword}
            onChange={(e) => handleFilter(e.target.value, "keyword")}
          />
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
              onClick={() => handleFilter("", "category")}
            >
              {allCategoryLabel}
            </button>
          </li>
          {categories.map((cat: any) => {
            return (
              <li key={cat}>
                <button
                  className={`hover:text-orange-400 transition-colors border-b border-gray-200 pb-2 w-full text-left ${
                    selectedCategory === cat ? "font-bold text-orange-400" : ""
                  }`}
                  onClick={() => handleFilter(cat, "category")}
                >
                  {cat}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-bold text-lg mb-4">{recentPostTitle}</h3>
        <ul className="text-sm text-gray-700 space-y-4">
          {latestArticle.slice(0, 3).map((news: any, idx: any) => (
            <li key={idx} className="flex items-center gap-3">
              <Image
                src={news.image}
                alt={news.title}
                width={70}
                height={40}
                className="rounded object-cover"
              />
              <div>
                <span className="block text-xs text-gray-400 mb-1">
                  {formatDate(news.date, "")}
                </span>
                <Link href={`/id/news-event/${news.slug}`} passHref>
                  <span className="font-semibold hover:text-orange-400 transition-colors cursor-pointer">
                    {news.title}
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex flex-col items-center justify-center mt-2 hidden md:flex">
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
            <span className="text-2xl font-semibold">{anyQuestionPhone}</span>
          </div>
        </div>
      </div>
    </>
  );
}
