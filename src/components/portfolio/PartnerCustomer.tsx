"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
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
    speed: 10000,
    cssEase: "linear",
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: false,
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
