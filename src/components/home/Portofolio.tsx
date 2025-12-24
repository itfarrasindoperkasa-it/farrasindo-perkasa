import { Search } from "lucide-react";
import PortfolioData, { PortfolioConfig } from "@/lib/datas/portofolio";
import { Locale } from "@/lib/datas/global";
import Link from "next/link";

type CardProps = {
  src: string;
  title: string;
  tall?: boolean;
  location?: string;
  className?: string;
};

const Card = ({
  src,
  title,
  location,
  tall = false,
  className = "",
}: CardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-white/10 p-1 ${className}`}
    >
      <div
        className={`overflow-hidden rounded-[22px] ${
          tall ? "h-72 md:h-[480px]" : "h-40 md:h-52 lg:h-56"
        } relative`}
      >
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay title + location on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center px-4 space-y-1">
            <p className="text-white text-lg font-semibold">{title}</p>
            {location && <p className="text-sm text-white/80">{location}</p>}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-orange-400 text-white shadow-md transition-transform duration-300 group-hover:scale-110"
      >
        <Search className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export async function Portfolio({ lang }: { lang: string }) {
  const messages = (await import(`../../messages/${lang}.json`)).default;
  // ambil config dari JSON
  const portfolioConfig = messages.home.portfolio as PortfolioConfig;

  const { title, buttonText, subtitle, projects } = portfolioConfig;

  // gabungkan project JSON + gambar berdasarkan index
  const portfolioItems = projects
    .map((project, index) => ({
      ...project,
      image: PortfolioData[index],
    }))
    // filter kalau ada gambar yang kurang
    .filter((item) => !!item.image);

  // aman-amanin: pastikan minimal 7 item
  const [p0, p1, p2, p3, p4, p5, p6] = portfolioItems;

  return (
    <section className="bg-orange-400 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 px-4">
          <div>
            <h2 className="text-3xl font-bold text-white text-center md:text-start">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-sm md:text-base text-white/80 max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
          <div className="self-center md:self-start md:self-auto">
            <Link
              href={`/${lang}/portfolio`}
              className=" rounded-full border border-white/90 bg-transparent px-5 py-2 font-medium text-white transition hover:bg-white hover:text-orange-400 cursor-pointer"
            >
              {buttonText}
            </Link>
          </div>
        </div>

        {/* SECTION 1 */}
        {p0 && p1 && p2 && (
          <div className="grid gap-5 md:grid-cols-[1.1fr_2fr]">
            <div className="flex flex-col gap-5">
              <Card src={p0.image} title={p0.title} location={p0.location} />
              <Card src={p1.image} title={p1.title} location={p1.location} />
            </div>
            <Card
              src={p2.image}
              title={p2.title}
              location={p2.location}
              tall
              className="hidden md:block"
            />
          </div>
        )}

        {/* SECTION 2 */}
        {p3 && p4 && p5 && p6 && (
          <div className="grid gap-5 md:grid-cols-3 md:auto-rows-[1fr]">
            <Card
              src={p3.image}
              title={p3.title}
              location={p3.location}
              className="md:col-span-2 md:row-start-1 md:col-start-1"
            />

            <Card
              src={p4.image}
              title={p4.title}
              location={p4.location}
              tall
              className="hidden md:block md:row-span-2 md:row-start-1 md:col-start-3"
            />

            <Card
              src={p5.image}
              title={p5.title}
              location={p5.location}
              className="md:row-start-2 md:col-start-1"
            />

            <Card
              src={p6.image}
              title={p6.title}
              location={p6.location}
              className="md:row-start-2 md:col-start-2"
            />
          </div>
        )}
      </div>
    </section>
  );
}
