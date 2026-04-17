"use client";

import Image from "next/image";
import Link from "next/link";
import ProductRanges from "@/lib/datas/product_range";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function ProductRange({ message, locale }: { message: any, locale: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlay]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ProductRanges.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + ProductRanges.length) % ProductRanges.length);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlay(false); // Pause auto-play on manual interaction
    // Resume auto-play after a delay
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const currentProduct = ProductRanges[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#E5E7EB] py-16 px-6 lg:px-12 min-h-[800px] flex flex-col justify-center">
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#171717 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} 
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-6 md:space-y-10">
        {/* Top Header: Name and Counter */}
        <div className="flex justify-between items-start">
          <motion.div
            key={`title-${activeIndex}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#171717] uppercase tracking-tighter">
              {message.categories[currentProduct.category] || currentProduct.category}
            </h2>
          </motion.div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                aria-label="Previous product"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-[#171717]" />
              </button>
              
              <div className="flex items-center font-bold text-xl text-[#6B7280]">
                <span className="text-[#171717]">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="mx-2">/</span>
                <span>{String(ProductRanges.length).padStart(2, '0')}</span>
              </div>

              <button 
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                aria-label="Next product"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-[#171717]" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Product Image Container */}
        <div className="relative h-[300px] md:h-[450px] w-full flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 0.9, y: 0 }} // Final scale 0.9 to give more breathing room
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
            >
              <div className="w-[90%] h-[90%] relative flex items-center justify-center">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.category}
                  className="object-contain max-h-full w-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <div className="flex flex-col items-center">
          <Link href={`/${locale}/contact-us`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f97d00] text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all uppercase tracking-wider cursor-pointer"
            >
              {message.rent_button}
            </motion.div>
          </Link>
        </div>

        {/* Thumbnail Carousel */}
        <div className="pt-8 w-full">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar" ref={sliderRef}>
            <div className="flex gap-4 mx-auto">
              {ProductRanges.map((product, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleThumbnailClick(idx)}
                  className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 min-w-[150px] md:min-w-[180px] shadow-sm ${
                    activeIndex === idx 
                      ? "bg-[#f97d00] text-white scale-105 shadow-xl shadow-orange-500/20" 
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                  }`}
                  whileHover={activeIndex !== idx ? { y: -5 } : {}}
                >
                  <div className="relative w-20 h-20 mb-3">
                    <Image
                      src={product.image}
                      alt={product.category}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className={`text-xs md:text-sm font-bold text-center leading-tight ${activeIndex === idx ? "text-white" : "text-gray-800"}`}>
                    {message.categories[product.category] || product.category}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 pt-4">
          {ProductRanges.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleThumbnailClick(idx)}
              className={`transition-all duration-300 rounded-full h-2.5 ${
                activeIndex === idx ? "w-8 bg-[#f97d00]" : "w-2.5 bg-gray-400/50 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
