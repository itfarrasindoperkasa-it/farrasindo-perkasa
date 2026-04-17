"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import AllUnitImage from "@/asset/images/homes/all-unit.png";

interface AboutSectionProps {
  locale: string;
  message: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export default function AboutSection({ locale, message }: AboutSectionProps) {
  // Robust title splitting
  const titleParts = message.title.split(" ");
  const firstPart = titleParts.slice(0, -1).join(" ");
  const lastPart = titleParts[titleParts.length - 1];

  return (
    <section id="about" className="relative w-full py-16 md:py-24 overflow-hidden bg-white">
      {/* Decorative element background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* IMAGE SIDE */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-orange-100/50 rounded-3xl -z-10 scale-95 group-hover:scale-100 transition-transform duration-500" />
              
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl shadow-black/5 overflow-hidden">
                <Image
                  src={AllUnitImage}
                  alt="Farrasindo Units"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">    
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] leading-tight">
                {firstPart}{" "}
                <span className="relative inline-block text-[#f97d00]">
                  {lastPart}
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200/50 -z-10" />
                </span>
              </h2>
            </div>

            <p className="text-base text-neutral-600 leading-relaxed text-justify md:text-left">
              {message.description}
            </p>

            <div className="pt-4">
              <Link
                href={`/${locale}/about-us`}
                className="group inline-flex items-center justify-center gap-3 bg-[#f97d00] hover:bg-[#e67300] text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 active:scale-95 w-full sm:w-fit"
              >
                {message.buttonText}
                <FontAwesomeIcon 
                  icon={faAngleRight} 
                  className="group-hover:translate-x-2 transition-transform" 
                />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
