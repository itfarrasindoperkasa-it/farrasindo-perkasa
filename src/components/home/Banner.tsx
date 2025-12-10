"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeBannerData from "@/lib/datas/home_banner";
import Image from "next/image";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: 20,
        zIndex: 10,
      }}
      onClick={onClick}
    />
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

  var settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
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
    z-20 px-4 sm:px-8
  "
              >
                <h2
                  className="text-white font-bold leading-tight
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl
      max-w-[90vw] sm:max-w-[70vw] md:max-w-[60vw]"
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
