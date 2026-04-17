import LatestNewsData, {
  articles,
  paginationArticle,
} from "@/lib/datas/latest_news";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/datas/global";
import { Metadata } from "next";
import NewsDetailClient from "./NewsDetailClient";

interface NewsDetailParams {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export async function generateStaticParams() {
  const params = [];
  const locales: Locale[] = ["id", "en"];

  for (const locale of locales) {
    const articlesList = articles[locale as Locale] || articles.id;
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
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const baseUrl = "https://farrasindo-cp.co.id";

  const articlesList = articles[locale as Locale] || articles.id;
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

export default async function NewsDetailPage({ params }: NewsDetailParams) {
  const { slug, locale } = await params;

  const articlesList = articles[locale as Locale] || articles.id;
  const news = articlesList.find((item) => item.slug === slug);
  const articleLatests = paginationArticle(1, 3, locale);

  if (!news) {
    notFound();
  }

  const categories = Array.from(
    new Set(articlesList.map((news) => news.author)),
  );

  return (
    <NewsDetailClient 
      news={news} 
      locale={locale} 
      articleLatests={articleLatests.articles} 
      categories={categories} 
    />
  );
}
