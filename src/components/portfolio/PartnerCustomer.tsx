"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Generate array for 30 customer images
const groups = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Customer ${i + 1}`,
  logo: `/customer/Farrasindo customer ${i + 1}.png`,
}));

export function PartnerCustomer({ locale }: { locale: string }) {
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
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            {locale === "id" ? "Klien Kami" : "Our Clients"}
          </h2>
        </div>
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
                  relative
                "
              >
                <Image
                  src={group.logo}
                  alt={group.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain p-4"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
