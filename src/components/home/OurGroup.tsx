"use client";

import React from "react";
import OurPartnerData from "@/lib/datas/our_partner";
import Image from "next/image";

const groups = OurPartnerData.map((logo, idx) => ({
  id: idx + 1,
  name: `Partner ${idx + 1}`,
  logo,
}));

// Split groups into 2 rows for mobile (4 per row)
const row1 = groups.slice(0, 4);
const row2 = groups.slice(4, 8);

export function OurGroup({ title }: { title: string }) {
  return (
    <section id="ourGroup" className="relative w-full py-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717]">
            {title}
          </h2>
        </div>
      </div>

      {/* Desktop: single row marquee */}
      <div className="hidden md:block w-full">
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Duplicate items 3x for seamless loop */}
            {[...groups, ...groups, ...groups].map((group, i) => (
              <div key={`desktop-${i}`} className="marquee-item">
                <Image
                  src={group.logo}
                  alt={group.name}
                  className="object-contain w-auto h-28"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: 2 rows, each scrolling in marquee */}
      <div className="md:hidden w-full space-y-4">
        {/* Row 1 - scrolls left */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...row1, ...row1, ...row1, ...row1, ...row1, ...row1].map((group, i) => (
              <div key={`m-r1-${i}`} className="marquee-item-mobile">
                <Image
                  src={group.logo}
                  alt={group.name}
                  className="object-contain w-auto h-20"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right (reverse) */}
        <div className="marquee-container">
          <div className="marquee-track marquee-reverse">
            {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((group, i) => (
              <div key={`m-r2-${i}`} className="marquee-item-mobile">
                <Image
                  src={group.logo}
                  alt={group.name}
                  className="object-contain w-auto h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }

        .marquee-reverse {
          animation: marquee-scroll-reverse 30s linear infinite;
        }

        .marquee-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
        }

        .marquee-item-mobile {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
          min-width: calc(50vw - 16px);
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-scroll-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 767px) {
          .marquee-track {
            animation-duration: 20s;
          }
          .marquee-reverse {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
}
