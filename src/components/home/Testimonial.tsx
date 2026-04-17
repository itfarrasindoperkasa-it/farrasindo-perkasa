"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import TestimoniData from "@/lib/datas/testimoni";
import Image from "next/image";
import { motion } from "framer-motion";

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
  image: any;
};

export function TestimonialSection({ testimonial }: { testimonial: any }) {
  const sliderRef = useRef<Slider | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const testimonialsConfig = testimonial as TestimonialsConfig;
  const sectionTitle = testimonialsConfig.title;

  const testimonials: Testimonial[] = testimonialsConfig.items.map(
    (item, index) => ({
      ...item,
      image: TestimoniData[index] || TestimoniData[0],
    })
  );

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    dotsClass: "slick-dots testimonial-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonial" className="relative w-full py-20 md:py-24 overflow-hidden bg-[#e5e7eb]">
      {/* Decorative background blurs - consistent with Portfolio */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header - Consistent with Portofolio Kami */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-extrabold text-[#171717]">
            {sectionTitle}
          </h2>
        </div>

        <div className="testimonial-slider-container relative px-2">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-3 pb-24 pt-4">
                <TestimonialCard {...item} index={index} />
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Arrows positioned below slider */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-40 md:gap-64 z-20 pointer-events-none">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 rounded-full border border-orange-200 flex items-center justify-center text-[#f97d00] bg-white hover:bg-[#f97d00] hover:text-white transition-all duration-300 active:scale-90 pointer-events-auto shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 h-10 rounded-full border border-orange-200 flex items-center justify-center text-[#f97d00] bg-white hover:bg-[#f97d00] hover:text-white transition-all duration-300 active:scale-90 pointer-events-auto shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-slider-container .slick-dots.testimonial-dots {
          bottom: 16px !important; /* Matching bottom-4 of arrows */
          height: 40px !important; /* Matching h-10 of arrows */
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 10px !important;
          padding: 0 !important;
          width: 100% !important;
          list-style: none !important;
          pointer-events: none;
        }
        .testimonial-slider-container .slick-dots.testimonial-dots li {
          margin: 0 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.4s ease;
          position: relative !important;
          display: inline-block !important;
          pointer-events: auto;
        }
        .testimonial-slider-container .slick-dots.testimonial-dots li.slick-active {
          width: 24px !important;
        }
        .testimonial-slider-container .slick-dots.testimonial-dots li button {
          width: 100% !important;
          height: 100% !important;
          padding: 0 !important;
          cursor: pointer !important;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          display: block !important;
        }
        .testimonial-slider-container .slick-dots.testimonial-dots li button:before {
          content: '' !important;
          position: absolute !important;
          top: 50% !important;
          left: 0 !important;
          transform: translateY(-50%) !important;
          width: 8px !important;
          height: 8px !important;
          background: #94a3b8 !important;
          border-radius: 999px !important;
          opacity: 0.6 !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }
        .testimonial-slider-container .slick-dots.testimonial-dots li.slick-active button:before {
          background: #f97d00 !important;
          width: 24px !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ text, name, role, image, index }: Testimonial & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-orange-50/50 flex flex-col min-h-[320px] transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 overflow-hidden"
    >
      {/* Quote Icon watermark */}
      <div className="absolute top-6 right-8 text-orange-50 group-hover:text-orange-100/50 transition-colors duration-500 -z-0">
        <Quote size={80} fill="currentColor" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#f97d00]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-neutral-700 text-base md:text-lg font-medium leading-relaxed italic">
            "{text}"
          </p>
        </div>

        <div className="mt-auto flex items-center gap-4 pt-8 border-t border-orange-50">
          <div className="relative w-[45px] h-[45px] rounded-lg overflow-hidden border-2 border-orange-50 ring-2 ring-orange-50 group-hover:border-[#f97d00] transition-colors duration-500 flex-shrink-0">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>

          <div>
            <h4 className="font-extrabold text-[#171717] text-base leading-tight group-hover:text-[#f97d00] transition-colors duration-500">
              {name}
            </h4>
            <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mt-0.5">
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f97d00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
