"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/datas/latest_news";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CSRNewsSliderProps {
  articles: Article[];
  locale: string;
}

export default function CSRNewsSlider({
  articles,
  locale,
}: CSRNewsSliderProps) {
  const sliderRef = useRef<Slider | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  const settings = {
    dots: true,
    infinite: articles.length > 1,
    speed: 500,
    slidesToShow: slidesToShow,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    touchThreshold: 10,
    beforeChange: (_: number, next: number) => setActiveDot(next),
    appendDots: () => (
      <div className="mt-14 md:mt-16">
        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-2">
            {articles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => sliderRef.current?.slickGoTo(idx)}
                className={`h-3 w-3 rounded-full transition ${
                  activeDot === idx ? "bg-orange-500" : "bg-orange-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="csr-news-slider">
      <Slider {...settings} ref={sliderRef}>
        {articles.map((article, index) => (
          <div key={index} className="px-3 py-10">
            <Link href={`/${locale}/news-event/${article.slug}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 h-full">
                <div className="relative h-56 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-2">
                    {new Date(article.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 hover:text-orange-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-orange-500 text-sm font-semibold hover:text-orange-600">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
