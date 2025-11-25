"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Alhamdulillah oke, permintaan kita pun berjalan dengan baik.",
    name: "Bapak Ahmad",
    role: "Project Contractor, Perumahan Serpong Garden 2 - Tangerang.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80",
  },
  {
    text: "Karena memang sudah langganan pakai Pompa Beton Farrasindo… mantap!",
    name: "Bapak Alfian",
    role: "Supervisor Project, Jakarta Barat",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80",
  },
  {
    text: "Dari segi pelayanan bagus, dari mutu pun keliatannya bagus…",
    name: "Bapak Kamsir",
    role: "Project Contractor, Bogor",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&q=80",
  },
  {
    text: "Dari segi pelayanan bagus, dari mutu pun keliatannya bagus…",
    name: "Bapak Kamsir",
    role: "Project Contractor, Bogor",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&q=80",
  },
];

export function TestimonialSection() {
  const sliderRef = useRef<Slider | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    beforeChange: (_: number, next: number) => setActiveDot(next),

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],

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
                className={`h-3 w-3 rounded-full transition 
                  ${activeDot === idx ? "bg-orange-500" : "bg-orange-300"}`}
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

    // kita handle dots sendiri, jadi ini kosong saja
    customPaging: () => <div />,
  };

  return (
    <section className="bg-[#f5f5f5] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-neutral-800 mb-10">
          Testimonials
        </h2>

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
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
        hover:bg-orange-400 hover:shadow-lg hover:-translate-y-1
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
        <img
          src={image}
          className="h-14 w-14 rounded-full object-cover border border-gray-200 group-hover:border-white/80 transition-colors duration-300"
          alt={name}
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
