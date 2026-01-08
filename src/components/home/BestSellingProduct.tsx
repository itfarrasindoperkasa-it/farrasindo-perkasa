"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { StaticImageData } from "next/image";

import BestSellingProductsData from "@/lib/datas/best_sellingproducts";

type BestSellingProductItem = {
  title: string;
  link?: string;
};

type BestSellingProductsConfig = {
  title: string;
  buttonLabel: string;
  items: BestSellingProductItem[];
};

export function BestSellingProduct({
  bestSellingProduct,
}: {
  bestSellingProduct: any;
}) {
  const { title: sectionTitle, items, buttonLabel } = bestSellingProduct;

  // Gabungkan JSON + gambar berdasarkan index
  const products = items
    .map((item: any, idx: number) => ({
      ...item,
      image: BestSellingProductsData[idx] as StaticImageData | undefined,
    }))
    .filter((p: any) => p.image);

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20">
      <div className="mx-auto space-y-8 ">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-semibold text-neutral-900">
          {sectionTitle}
        </h2>

        <div className="grid gap-6 md:gap-0  md:grid-cols-2">
          {products.map((product: any, idx: number) => (
            <article
              key={`${product.title}-${idx}`}
              className="relative flex flex-col justify-between"
            >
              {/* Gambar + background */}
              <motion.div
                className="relative w-full flex justify-center"
                initial={{ x: idx === 0 ? -80 : 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {/* Background – tinggi responsive & sama di kedua kolom */}
                <motion.div
                  className={`absolute inset-x-0 top-16 h-56  z-0 md:top-32 md:h-72 ${
                    idx === 0 ? "bg-orange-400" : "bg-orange-600"
                  }`}
                  initial={{ x: idx === 0 ? -80 : 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* Image */}
                <motion.div
                  className="relative z-10 flex justify-center w-full pb-10 md:pb-2"
                  initial={{ x: idx === 0 ? -80 : 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <Image
                    src={product.image as StaticImageData}
                    alt={product.title}
                    width={640}
                    height={360}
                    className="w-full max-w-[600px] h-auto object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>

              {/* Title + Button */}
              <motion.div
                className="relative z-20 w-full -mt-10 md:-mt-16 px-6 md:px-10 space-y-4"
                initial={{ x: idx === 0 ? -80 : 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h3 className="text-white text-lg md:text-2xl font-semibold leading-snug whitespace-pre-line">
                  {/* MOBILE — tanpa replace */}
                  <span className="md:hidden">{product.title}</span>

                  {/* DESKTOP — pakai replace */}
                  <span className="hidden md:block">
                    {product.title.replace(" & ", "\n& ")}
                  </span>
                </h3>

                {product.link && (
                  <a
                    href={product.link}
                    className={`inline-flex rounded-full px-4 py-2 text-sm md:text-base font-semibold text-white ${
                      idx === 0 ? "bg-orange-600" : "bg-orange-400"
                    }`}
                  >
                    {buttonLabel}
                  </a>
                )}
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
