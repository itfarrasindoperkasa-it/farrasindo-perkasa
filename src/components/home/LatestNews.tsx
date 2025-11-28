"use client";

import Image from "next/image";
import Link from "next/link";

import messages from "@/messages/id.json";
import LatestNewsData from "@/lib/datas/latest_news";

type LatestNewsItemFromJson = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  link?: string;
  author: string;
  slug: string;
};

type FeaturedNewsFromJson = {
  id: number;
  title: string;
  label: string;
  excerpt: string;
  extra: string;
  link: string;
  author: string;
};

type LatestNewsConfig = {
  eyebrow: string;
  title: string;
  buttonText: string;
  list: LatestNewsItemFromJson[];
  featured: FeaturedNewsFromJson;
};

type NewsItem = LatestNewsItemFromJson & {
  image: string;
  slug: string; // tambahkan slug pada tipe NewsItem
};

type FeaturedNews = FeaturedNewsFromJson & {
  image: string;
};

export function LatestNews() {
  const latestNewsConfig = messages.home
    .latest_news as unknown as LatestNewsConfig;

  const { eyebrow, title, buttonText, list, featured } = latestNewsConfig;

  // gabungkan JSON + image utk list
  const listNews: NewsItem[] = list.map((item, idx) => ({
    ...item,
    image: LatestNewsData[idx]?.src ?? LatestNewsData[0]?.src ?? "",
    slug: item.slug, // tambahkan slug agar Link fallback tidak error
  }));

  // image untuk featured → ambil index setelah list
  const featuredImageIndex = list.length;
  const featuredNews: FeaturedNews = {
    ...featured,
    image:
      LatestNewsData[featuredImageIndex]?.src ?? LatestNewsData[0]?.src ?? "",
  };

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-orange-400">{eyebrow}</p>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              {title}
            </h2>
          </div>

          <Link
            href="/news"
            className="rounded-full border border-orange-400 px-5 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-400 hover:text-white"
          >
            {buttonText}
          </Link>
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[1.1fr_minmax(0,1.2fr)]">
          {/* Left - list */}
          {/* Left - list */}
          <div className="space-y-6">
            {listNews.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col-reverse md:flex-row md:items-center gap-4 rounded-3xl bg-white/60 p-4 shadow-sm ring-1  ring-neutral-100 transition hover:shadow-lg"
              >
                {/* Mobile: text di bawah, Desktop: text di kiri */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold leading-snug text-neutral-900 group-hover:text-orange-500">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 italic">
                    {item.author}
                  </p>
                  <p className="text-xs text-neutral-400">{item.date}</p>
                  <p className="text-sm text-neutral-500 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <Link
                    href={
                      item.link ? item.link : `/news-and-event/${item.slug}`
                    }
                    className="mt-2 inline-flex rounded-full bg-orange-400 px-5 py-2 text-xs font-semibold text-white shadow-sm transition group-hover:bg-orange-500"
                  >
                    {buttonText}
                  </Link>
                </div>

                {/* Mobile: gambar di atas, Desktop: gambar di kanan */}
                <div className="relative h-48 w-full overflow-hidden rounded-2xl md:h-32 md:w-40 lg:h-40 lg:w-52">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Right - featured */}
          <article className="flex flex-col gap-5 rounded-3xl bg-white/60 p-4 shadow-sm ring-1 ring-neutral-100 lg:p-6">
            <div className="relative h-52 w-full overflow-hidden rounded-3xl sm:h-64 lg:h-72">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                {featuredNews.label}
              </p>
              <h3 className="text-2xl font-bold leading-snug text-neutral-900">
                {featuredNews.title}
              </h3>
              <p className="text-xs text-neutral-400 italic">
                {featuredNews.author}
              </p>
              <p className="text-sm text-neutral-500">{featuredNews.excerpt}</p>
              <p className="text-sm text-neutral-500">{featuredNews.extra}</p>
              <Link
                href={featuredNews.link}
                className="mt-2 inline-flex rounded-full bg-orange-400 px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-500"
              >
                {buttonText}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
