"use client"

import { useState } from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import OurPartnerData from "@/lib/datas/our_partner"
import AboutData from "@/lib/datas/about"

export type CompanyEntry = {
  name: string
  logo?: string | StaticImageData | any
  link?: string
  description?: string
}

/**
 * Helper function to resolve logo references from data files
 */
export function resolveRef(value?: unknown): StaticImageData | string | undefined {
  if (!value) return undefined

  if (typeof value === "object") return value as StaticImageData

  if (typeof value === "string") {
    const op = value.match(/^OurPartnerData\[(\d+)\]$/)
    if (op) {
      const idx = parseInt(op[1], 10)
      return (OurPartnerData as any)[idx] ?? value
    }
    const ad = value.match(/^AboutData\[(\d+)\]$/)
    if (ad) {
      const idx = parseInt(ad[1], 10)
      return (AboutData as any)[idx] ?? value
    }
    return value
  }

  return undefined
}

/**
 * Reusable CompanyCards component
 * Displays company logos with expandable descriptions
 * Note: Parent component should wrap this in a grid container
 */
export default function CompanyCards({ companies }: { companies: CompanyEntry[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <>
      {companies.map((c, idx) => {
        const logo = resolveRef(c.logo)
        return (
          <div
            key={`${c.name}-${idx}`}
            className="flex flex-col items-center justify-center rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <a
              href={c.link ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 w-full flex justify-center"
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
        )
      })}
    </>
  )
}
