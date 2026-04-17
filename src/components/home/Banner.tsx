"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeBannerData from "@/lib/datas/home_banner";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-[#f97d00] hover:scale-110 active:scale-95 border border-white/20 hidden md:flex"
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
      className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-[#f97d00] hover:scale-110 active:scale-95 border border-white/20 hidden md:flex"
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

  React.useEffect(() => {
    setMounted(true);
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
    speed: 1500,
    autoplaySpeed: 8000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 0,
    arrows: true,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div className="absolute bottom-12 left-0 right-0 z-30">
        <ul className="m-0 flex justify-center gap-4"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-3 h-3 bg-white/40 rounded-full transition-all duration-300 hover:bg-white/80" />
    ),
  };

  return (
    <div className={`relative overflow-hidden w-full ${className ?? ""}`} {...props}>
      <Slider {...settings} className="z-10">
        {/* ... slides ... */}
        {banners.map((banner: any, idx: number) => (
          <div key={idx} className="outline-none">
            <div className={`relative w-full ${height} flex items-center`}>
              {/* Background image */}
              <Image
                src={banner}
                fill
                alt={`Home Banner ${idx}`}
                className="object-cover scale-105 animate-zoom-slow"
                priority={idx === 0}
              />

              {/* Enhanced Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Content Container */}
              <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-20">
                <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] space-y-6 md:space-y-8">

                  {/* HTML Title Support - Perkecil sedikit dari sebelumnya */}
                  <h2
                    className="text-white font-extrabold leading-[1.15] text-3xl md:text-5xl lg:text-6xl opacity-0 translate-y-4 animate-fade-in-up [animation-delay:200ms]"
                    dangerouslySetInnerHTML={{ __html: messages[idx]?.title || "" }}
                  />

                  {/* Description */}
                  <p className="text-white/90 text-sm md:text-lg lg:text-xl leading-relaxed max-w-2xl opacity-0 translate-y-4 animate-fade-in-up [animation-delay:400ms] font-medium">
                    {messages[idx]?.description}
                  </p>

                  {/* Action Button */}
                  {messages[idx]?.buttonText && (
                    <div className="pt-4 opacity-0 translate-y-4 animate-fade-in-up [animation-delay:600ms]">
                      <Link
                        href={messages[idx]?.link || "#"}
                        className="group inline-flex items-center gap-4 bg-[#f97d00] hover:bg-white text-white hover:text-[#f97d00] px-8 md:px-12 py-4 md:py-5 rounded-2xl font-extrabold text-sm md:text-xl transition-all duration-300 shadow-2xl shadow-orange-500/30 hover:shadow-white/20 hover:-translate-y-1"
                      >
                        {messages[idx]?.buttonText}
                        <FontAwesomeIcon 
                          icon={faAngleRight} 
                          className="group-hover:translate-x-2 transition-transform" 
                        />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        @keyframes zoom-slow {
          from { transform: scale(1.0); }
          to { transform: scale(1.1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-zoom-slow {
          animation: zoom-slow 20s linear infinite alternate;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .slick-active .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        /* Custom Dots Styling */
        .slick-dots {
          position: absolute !important;
          bottom: 35px !important;
          z-index: 30 !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .slick-dots li {
          margin: 0 4px !important;
          display: inline-block !important;
          width: auto !important;
          height: auto !important;
        }
        .slick-dots li.slick-active div {
          background-color: #f97d00 !important;
          width: 30px !important;
          border-radius: 9999px !important;
          opacity: 1 !important;
        }
        .slick-dots li div {
          border-radius: 9999px !important;
        }
      `}</style>
    </div>
  );
}

export default Banner;
