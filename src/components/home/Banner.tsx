"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeBannerData from "@/lib/datas/home_banner";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute right-5 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-black/40 hover:scale-110 active:scale-95"
      onClick={onClick}
    >
      <ChevronRight size={32} />
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute left-5 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-black/40 hover:scale-110 active:scale-95"
      onClick={onClick}
    >
      <ChevronLeft size={32} />
    </button>
  );
}

function Banner({
  height,
  className,
  messages,
  ...props
}: {
  height: string;
  className?: string;
  messages: any[];
}) {
  const banners = HomeBannerData;
  const [mounted, setMounted] = React.useState(false);
  const [showArrows, setShowArrows] = React.useState(true);

  React.useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setShowArrows(window.innerWidth >= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-full ${className ?? ""}`} {...props}>
        <div className={`relative w-full ${height} bg-gray-900`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse text-white">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  var settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: showArrows,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div style={{ bottom: "30px" }}>
        <ul className="m-0 flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-3 h-3 bg-white/50 rounded-full transition-all duration-300 hover:bg-white slick-dot-inner" />
    ),
  };
  return (
    <div className={`w-full ${className ?? ""}`} {...props}>
      <Slider {...settings} className="bg-white">
        {banners.map((banner: any, idx: number) => (
          <div key={idx}>
            <div className={`relative w-full ${height}`}>
              {/* Background image */}
              <Image
                src={banner}
                fill
                alt={`Home Banner ${idx}`}
                className="object-cover"
                priority={idx === 0}
              />

              {/* Overlay gelap biar text kebaca */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Text */}
              {/* Text */}
              <div
                className="
    absolute inset-0 
    flex items-center 
    z-20 px-4 sm:px-[70px]
  "
              >
                <h2
                  className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl
      max-w-full sm:max-w-[70vw] md:max-w-[60vw]"
                >
                  {messages[idx]?.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
