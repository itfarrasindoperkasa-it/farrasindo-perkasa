"use client";

import Image, { StaticImageData } from "next/image";
import { Fragment, JSX, useState } from "react";
import CompanyCards, { CompanyEntry, resolveRef } from "../CompanyCards";
import {
  Award,
  Building,
  ClipboardCheck,
  Cpu,
  Factory,
  FolderOpen,
  LucideIcon,
  Star,
  Truck,
  UserCheck,
} from "lucide-react";
import AboutData from "@/lib/datas/about";

type Tab = {
  id: string;
  label: string;
};

type WhyItem = {
  id: number;
  title: string;
  description: string;
  icon?: string;
};

type Vision = {
  title: string;
  description: string;
};

type VisionMission = {
  title: string;
  vision: Vision;
  mission: Vision;
};

type FounderMessage = {
  title: string;
  signature: {
    name: string;
    title: string;
  };
  paragraphs: string[];
};

type TimelineEntry = {
  id?: number;
  year?: number | string;
  title: string;
  description: string;
  image?: string | StaticImageData;
};

type History = {
  title: string;
  timeline: TimelineEntry[];
};

type HistoryDetail = {
  title: string;
  paragraphs: string[];
  text?: string;
};

type AboutPage = {
  tabs: Tab[];
  overview?: {
    title?: string;
    company?: string;
    description?: string;
  };
  groupOverview?: {
    title?: string;
    description?: string;
  };
  companies?: CompanyEntry[];
  whyChooseUs?: {
    title?: string;
    items?: WhyItem[];
  };
  visionMission?: VisionMission;
  founderMessage?: FounderMessage;
  history?: History;
  historyDetail?: HistoryDetail;
};

/* ============================
   Icon map
   ============================ */

const ICON_MAP: Record<string, LucideIcon> = {
  UserCheck,
  Cpu,
  Factory,
  FolderOpen,
  Award,
  Truck,
  Building,
  ClipboardCheck,
  Star,
};

/** pilih icon berdasarkan judul sebagai fallback */
function pickIconByTitle(title: string): LucideIcon {
  const t = title.toLowerCase();
  if (t.includes("ahli")) return UserCheck;
  if (t.includes("teknologi")) return Cpu;
  if (t.includes("mesin") || t.includes("beton") || t.includes("pompa"))
    return Factory;
  if (t.includes("portofolio") || t.includes("proyek")) return FolderOpen;
  if (t.includes("tahun") || t.includes("pengalaman")) return Award;
  if (t.includes("armada") || t.includes("truck")) return Truck;
  return Star;
}

/* ============================
   Small UI components
   ============================ */

function TabButton({
  id,
  label,
  active,
  onClick,
}: {
  id: string;
  label: string;
  active: boolean;
  onClick: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onClick(id)}
      aria-pressed={active}
      className={`px-4 py-3 border-b-2 md:text-lg md:text-base ${active
        ? "border-orange-500 text-orange-500 font-semibold"
        : "border-transparent hover:border-orange-300 hover:text-orange-500 transition-colors"
        }`}
    >
      {label}
    </button>
  );
}

function TimelineCard({ item }: { item: TimelineEntry }) {
  const image = resolveRef(item.image);

  // Try to extract date and year if possible, removing "Tahun" prefix
  const dateStr = (item.year?.toString() || "").replace(/tahun/gi, "").trim();
  const match = dateStr.match(/^(\d+\s+\w+)?\s*(\d{4})$/);
  const dayMonth = match ? match[1] || "" : "";
  const year = match ? match[2] : dateStr;

  return (
    <div className="bg-white rounded-none shadow-xl border border-gray-100 overflow-hidden w-full max-w-[380px] flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {image && typeof image !== "string" ? (
          <Image
            src={image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : image && typeof image === "string" ? (
          <img
            src={image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <Factory className="text-gray-300" size={48} />
          </div>
        )}
      </div>

      <div className="flex min-h-[140px]">
        <div className="bg-[#FF8A00] text-white p-4 flex flex-col items-center justify-center min-w-[85px] text-center">
          {dayMonth && (
            <span className="text-[10px] font-bold uppercase tracking-tighter mb-1 border-b border-white/30 pb-1 w-full">
              {dayMonth}
            </span>
          )}
          <span className={`${dayMonth ? 'text-2xl' : 'text-3xl'} font-bold leading-none tracking-tight`}>
            {year}
          </span>
        </div>
        <div className="p-5 flex-1 bg-white flex flex-col justify-center">
          <h4 className="text-sm md:text-base font-bold uppercase tracking-wide text-gray-900 mb-2 leading-tight">
            {item.title}
          </h4>
          <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed line-clamp-4">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================
   Main Page Component
   ============================ */

export default function AboutUsClient({
  aboutJson,
}: {
  aboutJson: any;
}): JSX.Element {
  const about = aboutJson;

  const tabs: Tab[] = about.tabs ?? [
    { id: "group", label: "Kelompok" },
    { id: "why_us", label: "Mengapa Memilih Kami" },
    { id: "vision_mission", label: "Visi & Misi" },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? "group");

  const companies: CompanyEntry[] = (about.companies ?? []).map((c: any) => ({
    ...c,
    logo: c.logo ? resolveRef(c.logo) : undefined,
  }));

  const whyItems: WhyItem[] = (about.whyChooseUs?.items ?? []).map(
    (it: any) => ({
      ...it,
    })
  );

  const timeline: TimelineEntry[] = (about.history?.timeline ?? []).map(
    (t: any) => ({
      ...t,
      image: (t as any).image ? resolveRef((t as any).image) : undefined,
    })
  );

  return (
    <main className="w-full bg-white mx-auto max-w-[2500px]">
      {/* HERO */}
      <section className="relative w-full h-[220px] sm:h-[260px] md:h-[500px] overflow-hidden">
        <Image
          src={AboutData[0]}
          alt="Farrasindo Group"
          fill
          className="object-cover"
        />
        {/* Overlay for better menu visibility */}
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* TITLE */}
      <div className="flex justify-center items-center my-10 gap-x-2">
        <h1 className="text-lg sm:text-xl md:text-4xl uppercase tracking-wide font-semibold">
          {about.overview?.title}
        </h1>
      </div>

      {/* OVERVIEW */}
      <section
        id="company-overview"
        className="w-full pb-16 sm:pb-20 md:pb-24 px-6 md:px-15 max-w-7xl mx-auto"
      >
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center md:items-stretch">
            <div className="relative w-full md:w-[70%] h-[240px] sm:h-[350px] md:h-[500px] group overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={AboutData[1]}
                alt={about.overview?.company ?? "PT Farrasindo Perkasa"}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="w-full md:w-[500px] bg-white/95 backdrop-blur-md border border-white/20 p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-sm sm:text-base leading-relaxed md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex flex-col gap-1">
                <span className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-1 block">
                  Profile
                </span>
                {about.overview?.company}
                <span className="w-16 h-1.5 bg-orange-500 rounded-full mt-2"></span>
              </h2>

              <div className="text-gray-600 space-y-4 text-justify">
                <p>
                  <span className="font-bold text-gray-800 border-b-2 border-orange-200">
                    {about.overview?.company}
                  </span>{" "}
                  {about.overview?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAB HEADER */}
      <section className="border-t border-b border-gray-200 px-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between md:flex-row flex-col">
            {tabs.map((t) => (
              <TabButton
                key={t.id}
                id={t.id}
                label={t.label}
                active={activeTab === t.id}
                onClick={setActiveTab}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TAB CONTENT (HANYA 3 BAGIAN) */}
      <section id="our-group" className="w-full py-8 sm:py-10 md:px-18">
        <div className="max-w-7xl mx-auto px-6">
          {/* GROUP */}
          {activeTab === "group" && (
            <Fragment>
              <div className="flex justify-center mb-5 gap-x-2">
                <span className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide font-semibold">
                  {about.groupOverview?.title ?? "Farrasindo"}
                </span>
              </div>

              <p className="md:text-lg mb-6 text-gray-600 text-justify">
                {about.groupOverview?.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                <CompanyCards companies={companies} />
              </div>
            </Fragment>
          )}

          {/* WHY US */}
          {activeTab === "why_us" && (
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
                {about.whyChooseUs?.title ?? "Mengapa Memilih Kami?"}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {whyItems.map((item) => {
                  const IconComp = item.icon
                    ? ICON_MAP[item.icon] ?? pickIconByTitle(item.title)
                    : pickIconByTitle(item.title);

                  return (
                    <div
                      key={item.id}
                      className="
            flex flex-col items-center text-center 
            bg-white p-10 rounded-3xl
            transition-all duration-500
            hover:shadow-[0_20px_50px_rgba(255,138,0,0.1)] hover:-translate-y-2 border border-gray-50 shadow-sm
            group
          "
                    >
                      {/* icon */}
                      <div className="mb-8 flex items-center justify-center w-24 h-24 bg-orange-50 rounded-full text-orange-500 transition-colors duration-500 group-hover:bg-orange-500 group-hover:text-white">
                        <IconComp size={48} strokeWidth={1.5} />
                      </div>

                      {/* title */}
                      <h4 className="font-bold mb-4 text-gray-900 text-xl tracking-tight">
                        {item.title}
                      </h4>

                      {/* description */}
                      <p className="text-gray-500 text-sm leading-relaxed max-w-[460px]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* VISION & MISSION */}
          {activeTab === "vision_mission" && (
            <div>
              {/* VISI */}
              <div className="flex flex-col items-center text-center mb-16 group">
                <div className="flex flex-col items-center gap-3 mb-8">
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.4em] mb-2">Visi</span>
                  <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                    {about.visionMission?.vision?.title}
                    <div className="w-12 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full transition-all duration-500 group-hover:w-24" />
                  </h3>
                </div>

                <p className="text-gray-600 max-w-3xl leading-relaxed md:text-xl font-light italic">
                  "{about.visionMission?.vision?.description}"
                </p>
              </div>

              {/* GARIS PEMISAH */}
              <div className="w-full flex justify-center my-8">
                <div className="w-2/3 h-px bg-gray-400" />
              </div>

              {/* MISI */}
              <div className="flex flex-col items-center text-center group">
                <div className="flex flex-col items-center gap-3 mb-8">
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.4em] mb-2">Misi</span>
                  <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                    {about.visionMission?.mission?.title}
                    <div className="w-12 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full transition-all duration-500 group-hover:w-24" />
                  </h3>
                </div>

                <p className="text-gray-600 max-w-3xl leading-relaxed md:text-xl font-light">
                  {about.visionMission?.mission?.description}
                </p>
              </div>
            </div>
          )}
          {/* Sejarah */}
          {activeTab === "history" && (
            <div>
              <div className="flex flex-col items-center text-justify mb-12">
                <h2 className="bg-orange-500 text-white font-semibold p-3 rounded-md md:text-lg mb-4">
                  {about.historyDetail?.title}
                </h2>
                {about.historyDetail?.paragraphs?.map(
                  (p: string, i: number) => (
                    <p
                      key={i}
                      className="text-black/60 max-w-5xl leading-relaxed md:text-lg mb-4"
                    >
                      {p}
                    </p>
                  )
                )}
                <div className="w-full h-px bg-gray-300 my-10"></div>
                <p className="text-gray-800 max-w-5xl leading-relaxed md:text-lg mb-4 text-center">
                  {about.historyDetail?.text}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOUNDER MESSAGE (SELALU TAMPIL) */}
      <section className="w-full bg-[#FFB056] py-12 md:py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
            {/* Content Side */}
            <div className="w-full md:w-[60%] p-8 sm:p-12 md:p-20 flex flex-col justify-center">
              <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 leading-tight">
                {about.founderMessage?.title}
              </h3>

              <div className="space-y-6 text-sm md:text-base leading-relaxed">
                {about.founderMessage?.paragraphs?.map((p: any, i: number) => {
                  const isFirst = i === 0;
                  const isLast = i === (about.founderMessage?.paragraphs?.length ?? 0) - 1;

                  return (
                    <p key={i} className={`
                      ${isFirst ? "font-bold text-gray-800" : ""}
                      ${isLast ? "font-bold text-gray-900" : "text-gray-600"}
                      text-justify
                    `}>
                      {p}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12">
                <p className="font-bold text-[#0056B3] text-lg mb-1">
                  {about.founderMessage?.signature?.name}
                </p>
                <p className="text-blue-400/80 font-medium text-sm md:text-base">
                  Founder of Farrasindo Group
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-[40%] relative flex items-center justify-center p-8 md:p-0 bg-gray-50/30">
              {/* Dot Pattern Wrapper */}
              <div className="relative group">

                {/* Founder Image */}
                <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] z-10 overflow-hidden">
                  <Image
                    src={AboutData[2]}
                    alt="Pendiri"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY (SELALU TAMPIL) */}
      <section id="company-history" className="w-full py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-20">
            <span className="text-[#FF8A00] font-bold text-sm md:text-base tracking-[0.3em] uppercase mb-4">
              2001 - 2024
            </span>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <h3 className="text-2xl md:text-4xl font-bold bg-orange-500 text-white px-6 py-2 rounded-lg shadow-lg">
                {about.history?.title?.replace(/^\w+\s/, "") ?? "Farrasindo Group"}
              </h3>
            </div>
            <div className="w-24 h-1 bg-orange-200 mt-8 rounded-full" />
          </div>

          <div className="relative mt-20">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-16 md:space-y-0 relative">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={item.id ?? index}
                    className="relative flex flex-col md:flex-row items-stretch md:items-center min-h-[300px]"
                  >
                    {/* Desktop Layout: Left Side */}
                    <div className="hidden md:flex w-1/2 justify-end items-center pr-16 lg:pr-24">
                      {isLeft && <TimelineCard item={item} />}
                    </div>

                    {/* Desktop Layout: Middle Dot & Arrows */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 hidden md:flex items-center justify-center z-10">
                      <div className="relative h-full flex flex-col items-center justify-center">
                        {/* Dot */}
                        <div className="w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-md ring-4 ring-orange-50 z-20 group-hover:scale-125 transition-transform duration-300" />

                        {/* Arrows */}
                        {isLeft ? (
                          <div className="absolute right-6 w-12 lg:w-16 h-1 bg-orange-400 flex items-center justify-start">
                            <div className="w-2 h-2 border-t border-l border-orange-400 rotate-[-45deg] -ml-0.5" />
                          </div>
                        ) : (
                          <div className="absolute left-6 w-12 lg:w-16 h-1 bg-orange-400 flex items-center justify-end">
                            <div className="w-2 h-2 border-t border-r border-orange-400 rotate-[45deg] -mr-0.5" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Desktop Layout: Right Side */}
                    <div className="hidden md:flex w-1/2 justify-start items-center pl-16 lg:pl-24">
                      {!isLeft && <TimelineCard item={item} />}
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex flex-col items-center w-full px-4 mb-16">
                      <div className="flex items-center gap-4 mb-6 w-full">
                        <div className="h-1 flex-1 bg-gray-200" />
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                        <div className="h-1 flex-1 bg-gray-200" />
                      </div>
                      <TimelineCard item={item} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
