"use client";

import { Locale } from "@/lib/datas/global";
import { formatDate } from "@/lib/helper";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsEventCard({
  paginatedNews,
  page,
  setPage,
  totalPages,
  locale,
}: {
  paginatedNews: any;
  setPage: (page: number) => void;
  page: number;
  totalPages: number;
  locale: string;
}) {
  return (
    <>
      {/* News List with Pagination */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {paginatedNews.map((news: any) => {
          return (
            <div key={news.slug} className="p-6 flex flex-col ">
              <Image
                src={news.image}
                alt={news.title}
                width={360}
                height={250}
                className="rounded-lg object-cover mb-4 w-full h-[250px] shadow-lg/20"
                style={{ height: "auto", width: "auto" }}
              />
              <div className="flex justify-between items-center w-full mb-2">
                <span className="bg-orange-400 text-white font-bold text-xs px-3 py-1 rounded">
                  {news.author}
                </span>
                <span className="text-xs text-orange-500 flex items-center gap-1">
                  <Calendar size={16} className="inline-block" />
                  {formatDate(news.date, locale)}
                </span>
              </div>
              <Link href={`/${locale}/news-event/${news.slug}`} passHref>
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
            Previous
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
            Next
          </button>
        </div>
      )}
    </>
  );
}
