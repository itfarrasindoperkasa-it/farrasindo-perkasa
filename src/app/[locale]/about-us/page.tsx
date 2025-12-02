"use client";

import React, { Fragment, JSX, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import aboutJson from "@/messages/id.json";
import AboutData from "@/lib/datas/about";
import OurPartnerData from "@/lib/datas/our_partner";

import {
  UserCheck,
  Cpu,
  Factory,
  FolderOpen,
  Award,
  Truck,
  Building,
  ClipboardCheck,
  Star,
  type LucideIcon,
} from "lucide-react";

/* ============================
   Types (sesuaikan jika perlu)
   ============================ */

type Tab = {
  id: string;
  label: string;
};

type CompanyEntry = {
  name: string;
  logo?: string | StaticImageData;
  link?: string;
  description?: string;
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

/* ============================
   Helpers
   ============================ */

/**
 * resolveRef:
 * - kalau JSON berisi string "OurPartnerData[2]" -> kembalikan OurPartnerData[2]
 * - kalau JSON berisi string "AboutData[3]" -> kembalikan AboutData[3]
 * - kalau sudah StaticImageData/objek -> kembalikan langsung
 * - kalau string path -> kembalikan string (untuk <img/> fallback)
 */
function resolveRef(value?: unknown): StaticImageData | string | undefined {
  if (!value) return undefined;

  if (typeof value === "object") return value as StaticImageData;

  if (typeof value === "string") {
    const op = value.match(/^OurPartnerData\[(\d+)\]$/);
    if (op) {
      const idx = parseInt(op[1], 10);
      return (OurPartnerData as any)[idx] ?? value;
    }
    const ad = value.match(/^AboutData\[(\d+)\]$/);
    if (ad) {
      const idx = parseInt(ad[1], 10);
      return (AboutData as any)[idx] ?? value;
    }
    return value;
  }

  return undefined;
}

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
      className={`px-4 py-3 border-b-2 text-xs sm:text-sm md:text-base ${
        active
          ? "border-orange-500 text-orange-500 font-semibold"
          : "border-transparent hover:border-orange-300 hover:text-orange-500 transition-colors"
      }`}
    >
      {label}
    </button>
  );
}

function CompanyCards({ companies }: { companies: CompanyEntry[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
      {companies.map((c, idx) => {
        const logo = resolveRef(c.logo);
        return (
          <div
            key={`${c.name}-${idx}`}
            className="flex flex-col items-center justify-center rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <a
              href={c.link ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3  w-full flex justify-center"
            >
              {logo && typeof logo !== "string" ? (
                <Image
                  src={logo}
                  alt={c.name}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              ) : logo && typeof logo === "string" ? (
                <img
                  src={logo}
                  alt={c.name}
                  className="object-contain max-h-20"
                />
              ) : (
                <div className="w-40 h-12 bg-gray-100 flex items-center justify-center text-xs text-gray-500">
                  No Logo
                </div>
              )}
            </a>

            {openIdx === idx && c.description && (
              <p className="text-[11px] sm:text-xs text-justify text-gray-600 mb-2">
                {c.description}
              </p>
            )}

            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="mt-2 w-6 h-6 flex items-center justify-center rounded border border-gray-300 bg-white text-orange-400 hover:bg-orange-100"
              aria-label={
                openIdx === idx ? "Tutup deskripsi" : "Lihat deskripsi"
              }
            >
              {openIdx === idx ? "▲" : "▼"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineEntry }) {
  const image = resolveRef(item.image);
  return (
    <div className="bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-md transition-shadow overflow-hidden max-w-md">
      <div className="relative w-full md:h-48 h-36">
        {image && typeof image !== "string" ? (
          <Image src={image} alt={item.title} fill className="object-cover" />
        ) : image && typeof image === "string" ? (
          <img
            src={image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      <div className="p-3 sm:p-4">
        <p className="text-[11px] sm:text-xs font-semibold text-orange-500 mb-1 bg-white">
          {item.year}
        </p>
        <h4 className="text-xs sm:text-sm font-semibold mb-1">{item.title}</h4>
        <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

/* ============================
   Main Page Component
   ============================ */

export default function AboutUsPage(): JSX.Element {
  const about = (aboutJson as unknown as { aboutPage: AboutPage }).aboutPage;

  const tabs: Tab[] = about.tabs ?? [
    { id: "group", label: "Kelompok" },
    { id: "why_us", label: "Mengapa Memilih Kami" },
    { id: "vision_mission", label: "Visi & Misi" },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? "group");

  const companies: CompanyEntry[] = (about.companies ?? []).map((c) => ({
    ...c,
    logo: c.logo ? resolveRef(c.logo) : undefined,
  }));

  const whyItems: WhyItem[] = (about.whyChooseUs?.items ?? []).map((it) => ({
    ...it,
  }));

  const timeline: TimelineEntry[] = (about.history?.timeline ?? []).map(
    (t) => ({
      ...t,
      image: (t as any).image ? resolveRef((t as any).image) : undefined,
    })
  );

  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="relative w-full h-[220px] sm:h-[260px] md:h-[500px] overflow-hidden">
        <Image
          src={AboutData[0]}
          alt="Farrasindo Group"
          fill
          className="object-cover"
        />
      </section>

      {/* TITLE */}
      <div className="flex justify-center items-center my-10 gap-x-2">
        <h1 className="text-lg sm:text-xl md:text-4xl uppercase tracking-wide font-semibold">
          {about.overview?.title ?? "Gambaran Umum Perusahaan"}
        </h1>
      </div>

      {/* OVERVIEW */}
      <section id="company-overview" className="w-full py-10 sm:py-14 md:py-16">
        <section className="max-w-360 mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
            <div className="relative w-full md:w-2/3 h-[220px] sm:h-[300px] md:h-[430px]">
              <Image
                src={AboutData[1]}
                alt={about.overview?.company ?? "PT Farrasindo Perkasa"}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="w-full md:w-1/2 bg-slate-200 border border-slate-300 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm text-sm sm:text-base leading-relaxed md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500 mb-3">
                {about.overview?.company}
              </h2>

              <p className="mb-3">
                <span className="text-white bg-orange-400 w-fit mr-2 px-1 rounded">
                  {about.overview?.company}
                </span>
                {about.overview?.description}
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* TAB HEADER */}
      <section className="border-t border-b border-gray-200">
        <div className="max-w-360 mx-auto px-4 sm:px-6">
          <div className="flex justify-between">
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
      <section id="our-group" className="w-full py-8 sm:py-10">
        <div className="max-w-360 mx-auto px-4 sm:px-6">
          {/* GROUP */}
          {activeTab === "group" && (
            <Fragment>
              <div className="flex items-center mb-5 gap-x-2">
                <span className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide font-semibold">
                  {about.groupOverview?.title ?? "Farrasindo"}
                </span>
                <h3 className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-white p-2 rounded text-center bg-orange-400">
                  Group
                </h3>
              </div>

              <p className="text-xs sm:text-sm mb-6 text-gray-600">
                {about.groupOverview?.description}
              </p>

              <CompanyCards companies={companies} />
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
            bg-white p-8 rounded-2xl
            transition-all duration-300
            hover:bg-gray-200 hover:shadow-md hover:-translate-y-1 shadow-md  
          "
                    >
                      {/* icon */}
                      <div className="mb-6 flex items-center justify-center w-24 h-24">
                        <IconComp size={64} strokeWidth={1.6} />
                      </div>

                      {/* title */}
                      <h4 className="font-semibold mb-2 text-orange-400 text-xl">
                        {item.title}
                      </h4>

                      {/* description */}
                      <p className="text-gray-600 text-sm leading-relaxed max-w-[460px]">
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
              <div className="flex flex-col items-center text-center mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-500 text-white font-semibold px-4 py-1 rounded-md text-lg">
                    {about.visionMission?.vision?.title}
                  </span>
                </div>

                <p className="text-gray-800 max-w-3xl leading-relaxed text-lg">
                  {about.visionMission?.vision?.description}
                </p>
              </div>

              {/* GARIS PEMISAH */}
              <div className="w-full flex justify-center my-8">
                <div className="w-2/3 h-px bg-gray-400" />
              </div>

              {/* MISI */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-500 text-white font-semibold px-4 py-1 rounded-md text-lg">
                    {about.visionMission?.mission?.title}
                  </span>
                </div>

                <p className="text-gray-800 max-w-3xl leading-relaxed text-lg">
                  {about.visionMission?.mission?.description}
                </p>
              </div>
            </div>
          )}
          {/* Sejarah */}
          {activeTab === "history" && (
            <div>
              <div className="flex flex-col items-center text-justify mb-12">
                <h2 className="bg-orange-500 text-white font-semibold p-3 rounded-md text-lg mb-4">
                  {about.historyDetail?.title}
                </h2>
                {about.historyDetail?.paragraphs?.map(
                  (p: string, i: number) => (
                    <p
                      key={i}
                      className="text-black/60 max-w-5xl leading-relaxed text-lg mb-4"
                    >
                      {p}
                    </p>
                  )
                )}
                <div className="w-full h-px bg-gray-300 my-10"></div>
                <p className="text-gray-800 max-w-5xl leading-relaxed text-lg mb-4 text-center">
                  {about.historyDetail?.text}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOUNDER MESSAGE (SELALU TAMPIL) */}
      <section className="w-full bg-orange-400 py-10 sm:py-14">
        <div className="max-w-360 mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-10 bg-white p-6 sm:p-8 md:p-10 shadow-md">
            <div className="w-full md:w-3/5 text-sm sm:text-base leading-relaxed text-justify">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-orange-600">
                {about.founderMessage?.title}
              </h3>

              {about.founderMessage?.paragraphs?.map((p, i) => (
                <p key={i} className="mb-3 text-gray-700">
                  {p}
                </p>
              ))}

              <div className="mt-4">
                <p className="font-semibold">
                  {about.founderMessage?.signature?.name}
                </p>
                <p className="font-semibold text-orange-700">
                  {about.founderMessage?.signature?.title}
                </p>
                <p className="text-sm text-gray-700">
                  Direktur Utama Farrasindo Group
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src={AboutData[2]}
                alt="Pendiri"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY (SELALU TAMPIL) */}
      <section id="company-history" className="w-full py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center mb-10 gap-x-2">
            <span className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide font-semibold">
              {about.history?.title?.split(" ")[0] ?? "Sejarah"}
            </span>
            <h3 className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-white p-2 rounded text-center bg-orange-400">
              {about.history?.title?.replace(/^\w+\s/, "") ??
                "Farrasindo Group"}
            </h3>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-2">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={item.id ?? index}
                    className="flex flex-col md:flex-row md:items-center"
                  >
                    <div
                      className={`hidden md:flex md:w-1/2 ${
                        isLeft ? "justify-end pr-6" : "justify-start pl-6"
                      }`}
                    >
                      {isLeft && <TimelineCard item={item} />}
                    </div>

                    <div className="hidden md:flex w-0 md:w-auto">
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-orange-500 border-4 border-white shadow" />
                      </div>
                    </div>

                    <div className="md:w-1/2 md:flex md:justify-start md:pl-6">
                      <div className="w-full md:hidden">
                        <TimelineCard item={item} />
                      </div>

                      {!isLeft && (
                        <div className="hidden md:block w-full">
                          <TimelineCard item={item} />
                        </div>
                      )}
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
