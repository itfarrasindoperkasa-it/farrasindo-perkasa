"use client";

import dynamic from "next/dynamic";
import OurPartnerData from "@/lib/datas/our_partner";
import Image from "next/image";

// react-slick harus di dynamic import supaya aman untuk Next.js (no-SSR)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const groups = OurPartnerData.map((logo, idx) => ({
  id: idx + 1,
  name: `Partner ${idx + 1}`,
  logo,
}));

export function OurGroup() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // 0 + cssEase linear = jalan terus
    speed: 8000, // makin besar makin pelan
    cssEase: "linear" as const,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="w-full bg-[#cfcfcf] py-6">
      <div className="mx-auto container px-4">
        <Slider {...settings}>
          {groups.map((group) => (
            <div key={group.id}>
              <div className="flex items-center justify-center">
                <div className="relative h-16 w-56 md:h-40 md:w-64">
                  <Image
                    src={group.logo}
                    alt={group.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
