import { Locale } from "@/lib/datas/global";
import LatestNewsData from "@/lib/datas/latest_news";
import { formatDate } from "@/lib/helper";
import { Search, ChevronRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NewsEventLatest from "./NewsEventLatest";

export default function NewsEventFiltering({
  latestArticle,
  handleFilter,
  selectedCategory,
  categories,
  keyword,
  locale,
}: {
  latestArticle: any;
  handleFilter: (keyword: string, key: "keyword" | "category") => void;
  selectedCategory: any;
  categories: any;
  keyword: string;
  locale: string;
}) {
  const searchPlaceholder = locale === "id" ? "Search..." : "Search...";
  const recentPostTitle = locale === "id" ? "Recent Post" : "Recent Post";
  const catTitle = locale === "id" ? "Our Category" : "Our Category";


  const SidebarHeader = ({ title }: { title: string }) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="w-12 h-0.5 bg-[#f97d00]" />
    </div>
  );

  return (
    <div className="flex flex-col gap-12">
      {/* Search */}
      <div className="bg-white p-8 shadow-sm border border-gray-50 rounded-xl">
        <SidebarHeader title="Search" />
        <div className="relative flex items-center overflow-hidden rounded-xl">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full bg-gray-50 border-none px-6 py-4 text-sm focus:ring-1 focus:ring-[#f97d00] outline-none pr-16"
            value={keyword}
            onChange={(e) => handleFilter(e.target.value, "keyword")}
          />
          <button className="absolute right-0 bg-[#f97d00] p-4 text-white hover:bg-orange-600 transition-colors h-full">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-8 shadow-sm border border-gray-50 rounded-xl">
        <SidebarHeader title={catTitle} />
        <ul className="flex flex-col gap-0">
          <li className="border-b border-gray-100 last:border-none">
            <button
              className={`w-full flex items-center justify-between py-4 text-sm transition-all group ${
                selectedCategory === "" ? "text-[#f97d00] font-bold" : "text-gray-600 hover:text-[#f97d00]"
              }`}
              onClick={() => handleFilter("", "category")}
            >
              <div className="flex items-center gap-2">
                {selectedCategory === "" && <span className="text-xs">»</span>}
                <span>All Categories</span>
              </div>
              <span className="text-gray-400 group-hover:text-[#f97d00]">(12)</span>
            </button>
          </li>
          {categories.map((cat: any) => (
            <li key={cat} className="border-b border-gray-100 last:border-none">
              <button
                className={`w-full flex items-center justify-between py-4 text-sm transition-all group ${
                  selectedCategory === cat ? "text-[#f97d00] font-bold" : "text-gray-600 hover:text-[#f97d00]"
                }`}
                onClick={() => handleFilter(cat, "category")}
              >
                <div className="flex items-center gap-2">
                  {selectedCategory === cat && <span className="text-xs">»</span>}
                  <span>{cat}</span>
                </div>
                <span className="text-gray-400 group-hover:text-[#f97d00]">(08)</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-8 shadow-sm border border-gray-50 rounded-xl">
        <SidebarHeader title={recentPostTitle} />
        <NewsEventLatest
          recentPostTitle=""
          latestArticle={latestArticle}
          locale={locale}
        />
      </div>

      {/* CTA Box */}
      <div className="relative group overflow-hidden bg-gray-900 aspect-[4/5] rounded-xl">
        <Image
          src={LatestNewsData[13]}
          alt="Any Question"
          fill
          className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center text-white">
          <h4 className="text-3xl font-bold mb-8">Any Questions?</h4>
          <div className="w-full h-px bg-white/20 mb-8" />
          <p className="text-sm font-medium mb-2 opacity-80 uppercase tracking-widest">Call Us</p>
          <a href="tel:+0215870525" className="text-xl font-bold mb-10 hover:text-[#f97d00] transition-colors tracking-tight">
            +021 – 587 0525
          </a>
          <Link
            href={`/${locale}/contact-us`}
            className="bg-[#f97d00] text-white px-8 py-4 font-bold text-sm flex items-center gap-2 hover:bg-white hover:text-[#f97d00] transition-all group rounded-xl"
          >
            <span>Contact Us</span>
            <span className="group-hover:translate-x-1 transition-transform">»</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
