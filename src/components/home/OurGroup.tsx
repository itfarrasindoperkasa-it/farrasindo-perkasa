"use client";

import React from "react";
import dynamic from "next/dynamic";
import OurPartnerData from "@/lib/datas/our_partner";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// react-slick harus di dynamic import supaya aman untuk Next.js (no-SSR)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const groups = OurPartnerData.map((logo, idx) => ({
  id: idx + 1,
  name: `Partner ${idx + 1}`,
  logo,
}));

export function OurGroup({ title }: { title: string }) {
  const [slidesToShow, setSlidesToShow] = React.useState(5);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(4);
      } else if (window.innerWidth < 1536) {
        setSlidesToShow(5);
      } else {
        setSlidesToShow(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear" as const,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    dots: false,
  };

  return (
    <section id="ourGroup" className="relative w-full py-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header - Consistent with Testimonial but more compact margin */}
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717]">
            {title}
          </h2>
        </div>
      </div>

      <div className="w-full">
        <Slider {...settings}>
          {groups.map((group) => (
            <div key={group.id} className="px-2">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center p-2">
                  <Image
                    src={group.logo}
                    alt={group.name}
                    className="object-contain w-auto h-20 md:h-28"
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
