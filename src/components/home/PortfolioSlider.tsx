"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  src: string;
  title: string;
  location?: string;
  lang: string;
  className?: string;
};

const Card = ({ src, title, location, lang, className = "" }: CardProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl bg-gray-50 p-1.5 ${className} mx-1.5 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10`}>
      <div className="relative h-[300px] sm:h-[350px] md:h-[480px] lg:h-[550px] overflow-hidden rounded-[10px]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Black Opacity Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
          {/* Orange Box for Text */}
          <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
            <div className="bg-[#f97d00] p-4 rounded-xl shadow-xl border border-white/20">
              <p className="text-white text-lg font-bold leading-tight mb-1">{title}</p>
              {location && (
                <p className="text-white/90 text-xs font-medium flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/50" />
                  {location}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button - Now as a Link */}
      <Link
        href={`/${lang}/portfolio`}
        className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#f97d00] hover:scale-110 active:scale-95 z-20"
      >
        <Search className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default function PortfolioSlider({ items, lang }: { items: any[], lang: string }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    cssEase: "cubic-bezier(0.23, 1, 0.32, 1)",
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className="portfolio-slider-container relative px-2">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="pb-20 pt-4">
            <Card src={item.image} title={item.title} location={item.location} lang={lang} />
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .portfolio-slider-container .slick-dots.custom-dots {
          bottom: 20px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 0 !important;
          width: 100% !important;
          list-style: none !important;
        }
        .portfolio-slider-container .slick-dots.custom-dots li {
          margin: 0 !important;
          width: 10px !important;
          height: 10px !important;
          transition: all 0.4s ease;
          position: relative !important;
          display: inline-block !important;
        }
        .portfolio-slider-container .slick-dots.custom-dots li.slick-active {
          width: 35px !important;
        }
        .portfolio-slider-container .slick-dots.custom-dots li button {
          width: 100% !important;
          height: 100% !important;
          padding: 0 !important;
          cursor: pointer !important;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          display: block !important;
        }
        .portfolio-slider-container .slick-dots.custom-dots li button:before {
          content: '' !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 10px !important;
          height: 10px !important;
          background: #e2e8f0 !important;
          border-radius: 999px !important;
          opacity: 1 !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }
        .portfolio-slider-container .slick-dots.custom-dots li.slick-active button:before {
          background: #f97d00 !important;
          width: 35px !important;
        }
      `}</style>
    </div>
  );
}
