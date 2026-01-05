"use client";

import React from "react";
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
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear" as const,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="w-full bg-[#cfcfcf]">
      <div className="mx-auto container px-4">
        <Slider {...settings}>
          {groups.slice(0, 6).map((group) => (
            <div key={group.id}>
              <div className="flex items-center justify-center">
                <div className="">
                  <Image
                    src={group.logo}
                    alt={group.name}
                    className="object-contain w-full md:max-h-[150px] max-h-[100px]"
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
