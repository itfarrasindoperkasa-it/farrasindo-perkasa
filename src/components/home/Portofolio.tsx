import { projects } from "@/lib/datas/portofolio";
import { Search } from "lucide-react";

export function Portfolio() {
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

  return (
    <section className="bg-orange-400 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg md:text-2xl font-semibold text-white">
            PortfolioKami
          </h2>
          <button className="rounded-full border border-white/90 bg-transparent px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-orange-400">
            More Detail
          </button>
        </div>

        {/* SECTION 1 – (atas, kiri 2, kanan 1 besar) */}
        {/* SECTION 1 */}
        <div className="grid gap-5 md:grid-cols-[1.1fr_2fr]">
          <div className="flex flex-col gap-5">
            <Card
              src={projects[0].image}
              title={projects[0].title}
              location={projects[0].location}
            />
            <Card
              src={projects[1].image}
              title={projects[1].title}
              location={projects[1].location}
            />
          </div>
          <Card
            src={projects[2].image}
            title={projects[2].title}
            location={projects[2].location}
            tall
            className="hidden md:block"
          />
        </div>

        {/* SECTION 2 */}
        <div className="grid gap-5 md:grid-cols-3 md:auto-rows-[1fr]">
          <Card
            src={projects[3].image}
            title={projects[3].title}
            location={projects[3].location}
            className="md:col-span-2 md:row-start-1 md:col-start-1"
          />

          <Card
            src={projects[4].image}
            title={projects[4].title}
            location={projects[4].location}
            tall
            className="hidden md:block md:row-span-2 md:row-start-1 md:col-start-3"
          />

          <Card
            src={projects[5].image}
            title={projects[5].title}
            location={projects[5].location}
            className="md:row-start-2 md:col-start-1"
          />

          <Card
            src={projects[6].image}
            title={projects[6].title}
            location={projects[6].location}
            className="md:row-start-2 md:col-start-2"
          />
        </div>
      </div>
    </section>
  );
}
