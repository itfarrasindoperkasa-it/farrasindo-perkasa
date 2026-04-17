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
    <div className="flex flex-col gap-8">
      {/* News List with Pagination */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paginatedNews.map((news: any) => {
          return (
            <div
              key={news.slug}
              className="bg-[#fafafa] border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-6 mb-6">
                  <span className="bg-[#f97d00] text-white font-bold text-xs px-4 py-2 uppercase tracking-widest">
                    {news.author === "Farrasindo Group" ? "Farrasindo" : news.author}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 font-semibold">
                    <Calendar size={18} className="text-[#f97d00]" />
                    <span className="text-sm tracking-tight">
                      {formatDate(news.date, locale)}
                    </span>
                  </div>
                </div>

                <Link href={`/${locale}/news-event/${news.slug}`} passHref className="group">
                  <h3 className="text-lg md:text-xl font-bold mb-6 text-gray-900 line-clamp-2 group-hover:text-[#f97d00] transition-colors leading-snug">
                    {news.title}
                  </h3>
                </Link>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <Link 
                    href={`/${locale}/news-event/${news.slug}`}
                    className="inline-flex items-center text-gray-700 font-bold hover:text-[#f97d00] transition-colors gap-2 group"
                  >
                    <span className="text-base">Read More</span>
                    <span className="text-lg transition-transform group-hover:translate-x-1">»</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            className="px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-[#f97d00] hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-gray-600"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <div className="flex gap-2 text-sm font-medium">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                  page === i + 1
                    ? "bg-[#f97d00] text-white shadow-md shadow-orange-200"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#f97d00] hover:text-[#f97d00]"
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            className="px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-[#f97d00] hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-gray-600"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
