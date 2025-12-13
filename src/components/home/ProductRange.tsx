"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import ProductRanges from "@/lib/datas/product_range";
import React, { useRef, useState } from "react";
import { productCategoryFilter } from "@/lib/datas/product";

export default function ProductRange({ message }: { message: any }) {
  const sliderRef = useRef<Slider | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  let settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dots: true,
    swipeToSlide: true,
    touchThreshold: 10,
    beforeChange: (_: number, next: number) => setActiveDot(next),
    appendDots: () => (
      <div className="mt-14 md:mt-16">
        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-2">
            {ProductRanges.map((_, idx) => (
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
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-center">{message.title}</h2>
      <div className="filter-product flex gap-2 justify-center md:max-w-[70vw] mx-auto flex-wrap">
        {productCategoryFilter.map((filter: any, idx: any) => (
          <button
            className="border border-1 border-orange-400 px-2 py-1 text-orange-400 rounded-md cursor-pointer hover:shadow-md hover:scale-105 transition-all"
            key={idx}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="products">
        <Slider {...settings} className={``} ref={sliderRef}>
          {ProductRanges.map((product: any, idx: any) => (
            <div key={idx} className={`py-10`}>
              <div className="w-[80%] shadow-lg/20 relative h-[300px] rounded-xl flex flex-col p-4 items-center hover:bg-orange-400 hover:text-white transition-all mx-auto">
                <span className="font-bold text-2xl text-center mb-20 z-20">
                  {product.category}
                </span>
                <Image
                  src={product.image}
                  fill={true}
                  alt={`Product Range ${idx}`}
                  className={`object-contain hover:scale-130 cursor-pointer transition-all`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
