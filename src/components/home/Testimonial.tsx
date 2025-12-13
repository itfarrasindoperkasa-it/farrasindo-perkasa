"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import messages from "@/messages/id.json";
import TestimoniData from "@/lib/datas/testimoni";
import Image from "next/image";

type TestimonialFromJson = {
  text: string;
  name: string;
  role: string;
};

type TestimonialsConfig = {
  title: string;
  items: TestimonialFromJson[];
};

type Testimonial = {
  text: string;
  name: string;
  role: string;
  image: string; // sudah jadi URL string
};

export function TestimonialSection() {
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

  // 🔹 ambil config dari id.json
  const testimonialsConfig = messages.home.testimonials as TestimonialsConfig;

  const sectionTitle = testimonialsConfig.title;

  // 🔹 gabungkan JSON + gambar (index yang sama)
  const testimonials: Testimonial[] = testimonialsConfig.items.map(
    (item, index) => ({
      ...item,
      image: TestimoniData[index]?.src ?? TestimoniData[0]?.src ?? "",
    })
  );

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    beforeChange: (_: number, next: number) => setActiveDot(next),
    appendDots: () => (
      <div className="mt-14 md:mt-16">
        <div className="flex items-center justify-center gap-4">
          {/* Arrow kiri */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="text-orange-500 hover:text-orange-600 transition"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => sliderRef.current?.slickGoTo(idx)}
                className={`h-3 w-3 rounded-full transition ${
                  activeDot === idx ? "bg-orange-500" : "bg-orange-300"
                }`}
              />
            ))}
          </div>

          {/* Arrow kanan */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="text-orange-500 hover:text-orange-600 transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    ),
    customPaging: () => <div />,
  };

  return (
    <section className="bg-[#f5f5f5] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-neutral-800 mb-10">
          {sectionTitle}
        </h2>

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="md:px-3">
              <TestimonialCard {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

function TestimonialCard({ text, name, role, image }: Testimonial) {
  return (
    <div
      className="
        group bg-white rounded-3xl px-8 py-10 shadow-sm min-h-[330px]
        flex flex-col transition-all duration-300
        hover:bg-orange-400 hover:shadow-lg hover:-translate-y-1 md:mb-10 mb-5
      "
    >
      {/* Icon kutip */}
      <div
        className="
          text-gray-300 text-5xl leading-none
          transition-colors duration-300
          group-hover:text-white/80
        "
      >
        “
      </div>

      {/* Teks */}
      <p
        className="
          mt-4 text-gray-700 text-center italic leading-relaxed flex-1
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {text}
      </p>

      {/* Garis */}
      <div
        className="
          my-6 border-t border-gray-200
          transition-colors duration-300
          group-hover:border-orange-200/70
        "
      />

      {/* Profil */}
      <div className="flex items-center gap-4">
        <Image
          src={typeof image === "string" ? image : image}
          alt={name}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover border border-gray-200 group-hover:border-white/80 transition-colors duration-300"
          loading="lazy"
        />

        <div>
          <p
            className="
              font-semibold text-gray-800
              transition-colors duration-300
              group-hover:text-white
            "
          >
            {name}
          </p>
          <p
            className="
              text-sm text-gray-500
              transition-colors duration-300
              group-hover:text-orange-50
            "
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
