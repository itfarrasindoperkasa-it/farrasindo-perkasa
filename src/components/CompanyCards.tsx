"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import OurPartnerData from "@/lib/datas/our_partner";
import AboutData from "@/lib/datas/about";

export type CompanyEntry = {
  name: string;
  logo?: string | StaticImageData | any;
  link?: string;
  description?: string;
};

/**
 * Helper function to resolve logo references from data files
 */
export function resolveRef(
  value?: unknown
): StaticImageData | string | undefined {
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

export default function CompanyCards({
  companies,
}: {
  companies: CompanyEntry[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      {companies.map((c, idx) => {
        const logo = resolveRef(c.logo);
        return (
          <div
            key={`${c.name}-${idx}`}
            className="flex flex-col items-center justify-between p-2 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <a
              href={c.link ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center h-[160px]"
            >
              <div className="w-full h-full flex items-center justify-center">
                {logo && typeof logo !== "string" ? (
                  <div className="relative w-[90%] h-[90%] flex items-center justify-center">
                    <Image
                      src={logo}
                      alt={c.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : logo && typeof logo === "string" ? (
                  <img
                    src={logo}
                    alt={c.name}
                    className="max-h-[90%] max-w-[90%]"
                  />
                ) : (
                  <div className="w-32 h-10 bg-gray-100 flex items-center justify-center text-xs text-gray-500">
                    No Logo
                  </div>
                )}
              </div>
            </a>

            {openIdx === idx && c.description && (
              <p className="text-[10px] sm:text-[11px] text-justify text-gray-600 mb-2">
                {c.description}
              </p>
            )}

            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="mt-1 w-5 h-5 flex items-center justify-center rounded border border-gray-300 bg-white text-orange-400 hover:bg-orange-100 text-xs"
              aria-label={
                openIdx === idx ? "Tutup deskripsi" : "Lihat deskripsi"
              }
            >
              {openIdx === idx ? "▲" : "▼"}
            </button>
          </div>
        );
      })}
    </>
  );
}
