"use client";

import { useState } from "react";
import { Article, paginationArticle } from "@/lib/datas/latest_news";
import { Locale } from "@/lib/datas/global";
import NewsEventFiltering from "./NewsEventFiltering";
import NewsEventCard from "./NewsEventCard";

interface NewsEventLayoutProps {
  initialArticles: Article[];
  initialTotalPages: number;
  categories: string[];
  locale: string;
}

export default function NewsEventLayout({
  initialArticles,
  initialTotalPages,
  categories,
  locale,
}: NewsEventLayoutProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [keyword, setKeyword] = useState("");
  const [paginatedNews, setPaginatedNews] =
    useState<Article[]>(initialArticles);
  const latestArticle = initialArticles;

  const globalFilterArticle = (value: string, key: "keyword" | "category") => {
    setPage(1);

    // Tentukan filter yang akan digunakan berdasarkan key yang diupdate
    const newKeyword = key === "keyword" ? value : keyword;
    const newCategory = key === "category" ? value : selectedCategory;

    // Update state
    if (key === "keyword") {
      setKeyword(value);
    } else if (key === "category") {
      setSelectedCategory(value);
    }

    // Apply filter dengan nilai yang baru
    const filtered = paginationArticle(1, itemsPerPage, locale, {
      author: newCategory.trim() === "" ? undefined : newCategory,
      title: newKeyword.trim() === "" ? undefined : newKeyword,
    });

    setPaginatedNews(filtered.articles);
    setTotalPages(filtered.totalPages);
  };

  const handlePageChange = (newPage: number) => {
    const result = paginationArticle(newPage, itemsPerPage, locale, {
      author: selectedCategory.trim() === "" ? undefined : selectedCategory,
      title: keyword.trim() === "" ? undefined : keyword,
    });
    setPaginatedNews(result.articles);
    setPage(newPage);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 md:px-10">
      {/* Sidebar */}
      <aside className="lg:w-1/4 w-full flex flex-col gap-6">
        <NewsEventFiltering
          latestArticle={latestArticle}
          handleFilter={globalFilterArticle}
          selectedCategory={selectedCategory}
          categories={categories}
          keyword={keyword}
          locale={locale}
        />
      </aside>
      {/* Main Content */}
      <main className="lg:w-3/4 w-full flex flex-col gap-8">
        <NewsEventCard
          paginatedNews={paginatedNews}
          page={page}
          setPage={handlePageChange}
          totalPages={totalPages}
          locale={locale}
        />
      </main>
    </div>
  );
}
