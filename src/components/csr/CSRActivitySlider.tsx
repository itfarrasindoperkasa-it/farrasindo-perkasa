"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { CSRActivity } from "@/lib/datas/csr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CSRActivitySliderProps {
  activities: CSRActivity[];
}

export default function CSRActivitySlider({
  activities,
}: CSRActivitySliderProps) {
  const [slidesToShow, setSlidesToShow] = React.useState(3);
  const [mounted, setMounted] = React.useState(false);

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
    infinite: activities.length > 1,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
  };

  return (
    <div className="csr-activity-slider mt-12">
      <Slider {...settings}>
        {activities.map((activity, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 w-full">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {activity.title}
                </h3>
                {activity.date && (
                  <p className="text-sm text-gray-500">
                    {new Date(activity.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
