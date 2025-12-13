"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LatestNewsData from "@/lib/datas/latest_news";

export default function CareerSlider() {
  const [slidesToShow, setSlidesToShow] = React.useState(5);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return (
      <div className="mt-12 h-64 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <Slider
        dots={false}
        arrows={false}
        infinite={true}
        speed={500}
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        pauseOnHover={true}
      >
        {[8, 13, 5, 7, 6, 15, 16, 17, 2].map((imageIndex, index) => (
          <div key={index} className="px-2">
            <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={LatestNewsData[imageIndex - 1]}
                alt={`Farracare Activity ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
