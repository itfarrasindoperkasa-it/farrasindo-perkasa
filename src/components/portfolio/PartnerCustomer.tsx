"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dynamic from "next/dynamic";
import OurPartnerData from "@/lib/datas/our_partner";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const groups = OurPartnerData.map((logo, idx) => ({
  id: idx + 1,
  name: `Partner ${idx + 1}`,
  logo,
}));

export function PartnerCustomer() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280, // < xl
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024, // < lg
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640, // < sm
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="w-full py-8">
      <div className="container mx-auto max-w-360 px-4">
        <Slider {...settings}>
          {groups.map((group) => (
            <div key={group.id} className="px-3">
              <div
                className="
                  bg-white rounded-2xl shadow-sm
                  border border-gray-100
                  flex items-center justify-center
                  h-24 md:h-40 
                  transition-all duration-300
                  hover:shadow-md hover:scale-[1.02]
                "
              >
                <Image
                  src={group.logo.src}
                  alt={group.name}
                  width={group.logo.width}
                  height={group.logo.height}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
