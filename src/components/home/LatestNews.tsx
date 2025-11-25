// components/latest-news.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

const listNews: NewsItem[] = [
  {
    id: 1,
    title: "One Package Concrete Pump and Ready Mix Concrete",
    date: "August 25, 2025",
    excerpt:
      "Dalam dunia konstruksi, waktu adalah aset berharga. Namun, banyak proyek pengecoran sering menghadapi tantangan.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title:
      "Farrasindo Perkasa Gelar Aksi Donor Darah Bersama PMI Tangerang, Wujud Nyata Kepedulian Sosial",
    date: "July 15, 2025",
    excerpt:
      "Dalam semangat kebersamaan dan kepedulian terhadap sesama, Farrasindo Perkasa menggelar kegiatan aksi donor darah.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Kenalan Sama Wheel Loader",
    date: "June 13, 2025",
    excerpt:
      "Wheel loader merupakan salah satu alat berat yang sangat populer dan banyak digunakan di berbagai sektor.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
];

const featured: NewsItem = {
  id: 99,
  title: "Pengecoran Hotel & Resort 500 Kamar",
  date: "Project Highlight",
  excerpt:
    "Proyek pengecoran lantai untuk pembangunan Hotel & Resort di Bogor membutuhkan beton dengan total volume 229 m³. Proses pengecoran berlangsung cepat dan lebih efisien karena menggunakan pompa beton tipe long boom dari Farrasindo Perkasa yang dapat memastikan kualitas dan ketepatan waktu dalam pembangunan proyek ini.",
  image:
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
};

export function LatestNews() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto container px-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-orange-400">Latest News</p>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              News and Activities
            </h2>
          </div>

          <Link
            href="/news"
            className="rounded-full border border-orange-400 px-5 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-400 hover:text-white"
          >
            More Detail
          </Link>
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[1.1fr_minmax(0,1.2fr)]">
          {/* Left - list */}
          <div className="space-y-6">
            {listNews.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col gap-4 rounded-3xl bg-white/60 p-4 shadow-sm ring-1 ring-neutral-100 transition hover:shadow-lg md:flex-row md:items-center"
              >
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold leading-snug text-neutral-900 group-hover:text-orange-500">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400">{item.date}</p>
                  <p className="text-sm text-neutral-500 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <button className="mt-2 inline-flex rounded-full bg-orange-400 px-5 py-2 text-xs font-semibold text-white shadow-sm transition group-hover:bg-orange-500">
                    Read More...
                  </button>
                </div>

                <div className="relative h-40 w-full overflow-hidden rounded-2xl md:h-32 md:w-40 lg:h-40 lg:w-52">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Right - featured */}
          <article className="flex flex-col gap-5 rounded-3xl bg-white/60 p-4 shadow-sm ring-1 ring-neutral-100 lg:p-6">
            <div className="relative h-52 w-full overflow-hidden rounded-3xl sm:h-64 lg:h-72">
              <img
                src={featured.image}
                alt={featured.title}
                className="object-cover"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold leading-snug text-neutral-900">
                {featured.title}
              </h3>
              <p className="text-sm text-neutral-500">{featured.excerpt}</p>
              <p className="text-sm text-neutral-500">
                Selain jumlah kamar yang banyak, pemandangan yang ditawarkan
                hotel ini juga sangat bagus karena akan terlihat view kota yang
                indah. Jadi cocok banget kan buat kamu yang mau healing.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
