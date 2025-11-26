"use client";

import { PartnerCustomer } from "@/components/portfolio/PartnerCustomer";
import HomeBannerData from "@/lib/datas/home_banner";
import PortfolioData from "@/lib/datas/portofolio";
import Image from "next/image";

export default function PortfolioPage() {
  const banner = HomeBannerData[4];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        <Image
          src={banner}
          alt="Portfolio Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
          <div className="flex justify-center gap-4 mt-5">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">
              ALL
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm">
              Batch Pump
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm">
              Concrete Pump
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-360 mx-auto">
          {PortfolioData.map((item, i) => (
            <div
              key={i}
              className="relative w-full h-[260px] group overflow-hidden rounded-lg"
            >
              <Image
                src={item}
                alt={`Portfolio ${i + 1}`}
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Partner & Customer */}
      <section>
        <PartnerCustomer />
      </section>
    </div>
  );
}
