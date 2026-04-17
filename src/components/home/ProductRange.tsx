"use client";

import Image from "next/image";
import Link from "next/link";
import ProductRanges from "@/lib/datas/product_range";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

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

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        
        {/* LEFT SIDEBAR (Desktop: Thumbnails) / BOTTOM (Mobile: Content) */}
        <div className="w-full lg:w-[200px] order-2 lg:order-1 flex flex-col gap-6">
          {/* Thumbnail Carousel with Scroll Indicators */}
          <div className="relative group/scroll">
            {/* Desktop Vertical Indicators */}
            <div className="hidden lg:flex absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40 group-hover/scroll:opacity-100 transition-opacity">
              <FontAwesomeIcon icon={faChevronUp} className="text-gray-500" />
            </div>
            
            {/* Mobile Horizontal Indicators (Subtle) */}
            <div className="lg:hidden absolute -left-4 top-1/2 -translate-y-1/2 animate-pulse opacity-40">
              <FontAwesomeIcon icon={faChevronLeft} className="text-gray-500" />
            </div>

            <div className="flex lg:flex-col items-center gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] pb-4 lg:pb-0 scrollbar-hide no-scrollbar" ref={sliderRef}>
              <div className="flex lg:flex-col gap-4 mx-auto lg:mx-0">
                {ProductRanges.map((product, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 min-w-[140px] md:min-w-[160px] lg:min-w-full shadow-sm ${
                      activeIndex === idx 
                        ? "bg-[#f97d00] text-white shadow-xl shadow-orange-500/20" 
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <div className="relative w-16 h-16 flex-shrink-0">
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
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Vertical Indicators */}
            <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40 group-hover/scroll:opacity-100 transition-opacity">
              <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" />
            </div>

            {/* Mobile Horizontal Indicators (Subtle) */}
            <div className="lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 animate-pulse opacity-40">
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (Main Product Display) */}
        <div className="flex-1 w-full order-1 lg:order-2 space-y-6 md:space-y-10">
          {/* Top Header: Name and Counter */}
          <div className="flex justify-between items-start">
            <motion.div
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#171717] uppercase tracking-tighter">
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
          <div className="relative h-[300px] md:h-[450px] lg:h-[500px] w-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 0.9, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center pointer-events-none p-4"
              >
                <div className="w-full h-full relative flex items-center justify-center">
                  <Image
                    src={currentProduct.image}
                    alt={currentProduct.category}
                    className="object-contain max-h-full w-auto drop-shadow-3xl"
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
                className="bg-[#f97d00] text-white font-bold px-12 py-5 rounded-2xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all uppercase tracking-wider cursor-pointer text-lg"
              >
                {message.rent_button}
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
