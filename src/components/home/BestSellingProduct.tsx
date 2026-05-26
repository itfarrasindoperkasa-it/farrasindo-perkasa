"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

// Assets untuk tampilan 3-in-1
import mini1 from "@/asset/images/section/minipro1.png";
import mini2 from "@/asset/images/section/minipro2.png";
import mini3 from "@/asset/images/section/minipro3.png";
import mainTruck from "@/asset/images/section/trukmerah.png";

export function BestSellingProduct({
  bestSellingProduct,
}: {
  bestSellingProduct: any;
}) {
  const { highlight, items, buttonLabel } = bestSellingProduct;

  // Ambil produk "Pabrik Batching Bergerak 3 in 1" dari data JSON
  const product3in1 =
    items.find(
      (item: any) =>
        item.title &&
        (item.title.includes("3 in 1") || item.title.includes("3in1"))
    ) || items[1];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background #f97d00 dengan opacity 75% */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "#f97d00", opacity: 0.75 }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-20 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">

          {/* Kiri: teks + gambar mini */}
          <motion.div
            className="flex flex-col space-y-5 lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-1">
              {/* Badge: "Produk Terlaris" (id) / "Product Highlight" (en) — dari JSON */}
              <span className="text-sm font-bold uppercase tracking-widest text-black md:text-base">
                {highlight}
              </span>
              {/* Judul: diambil dari items JSON, misalnya "Pabrik Batching Bergerak 3 in 1" */}
              <h2 className="text-2xl font-extrabold leading-[1.15] text-black md:text-4xl lg:text-4xl">
                {product3in1?.title}
              </h2>
            </div>

            {/* 3 gambar mini + tanda plus */}
            <div className="flex flex-wrap items-center gap-2 py-2 md:gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md md:h-28 md:w-28 md:rounded-2xl lg:h-32 lg:w-32">
                <Image
                  src={mini1}
                  alt="Mini Product 1"
                  className="h-[80%] w-[80%] object-contain"
                />
              </div>

              <span className="text-2xl font-bold text-black md:text-4xl">+</span>

              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md md:h-28 md:w-28 md:rounded-2xl lg:h-32 lg:w-32">
                <Image
                  src={mini2}
                  alt="Mini Product 2"
                  className="h-[80%] w-[80%] object-contain"
                />
              </div>

              <span className="text-2xl font-bold text-black md:text-4xl">+</span>

              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md md:h-28 md:w-28 md:rounded-2xl lg:h-32 lg:w-32">
                <Image
                  src={mini3}
                  alt="Mini Product 3"
                  className="h-[80%] w-[80%] object-contain"
                />
              </div>
            </div>

            {/* Tombol */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block pt-2"
            >
              <a
                href={product3in1?.link || "#"}
                className="group flex w-fit items-center space-x-3 rounded-full bg-[#1A1A1A] px-7 py-3 text-white transition-all hover:bg-black md:px-10 md:py-4"
              >
                <span className="text-sm font-bold md:text-base">{buttonLabel}</span>
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  className="text-sm transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Kanan: gambar truk utama */}
          <motion.div
            className="relative flex justify-center lg:col-span-5"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[450px] lg:max-w-none">
              <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/10 blur-3xl lg:h-[80%] lg:w-[80%]" />
              <Image
                src={mainTruck}
                alt={product3in1?.title || "Farrasindo Batch Pump"}
                className="relative z-10 h-auto w-full transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
