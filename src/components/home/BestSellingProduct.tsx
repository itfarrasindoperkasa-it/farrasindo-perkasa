"use client";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import BestSellingProductsData from "@/lib/datas/best_sellingproducts";
import { motion } from "framer-motion";
type BestSellingProduct = {
  title: string;
  image: string | StaticImageData;
  link?: string;
};

const BestSellingProducts: BestSellingProduct[] = [
  {
    title: "One Package Construction Concrete Pump & <br> Readymix",
    image: BestSellingProductsData[0],
    link: "#",
  },
  {
    title: "3 in 1 Mobile Batching Plant",
    image: BestSellingProductsData[1],
    link: "#",
  },
];

export function BestSellingProduct() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto space-y-8">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-neutral-900">
          Best Selling Product
        </h2>

        <div>
          <div className="grid md:grid-cols-2">
            {BestSellingProducts.map((product, idx) => (
              <article
                key={product.title}
                className={`flex flex-col items-center justify-between gap-6`}
              >
                {/* Gambar produk */}
                <motion.div
                  className="w-full flex justify-center relative"
                  initial={{ x: idx === 0 ? -100 : 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* Background absolute, warna beda sesuai index */}
                  <motion.div
                    className={`absolute left-0 right-0 top-28 h-full z-0 ${
                      idx === 0 ? "bg-orange-400" : "bg-orange-600"
                    }`}
                    initial={{ x: idx === 0 ? -100 : 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  {/* Gambar produk di atas background */}
                  <motion.div
                    className="w-full relative z-10 flex justify-center"
                    initial={{ x: idx === 0 ? -100 : 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Image
                      src={
                        typeof product.image === "string"
                          ? product.image
                          : product.image.src
                      }
                      alt={product.title}
                      width={500}
                      height={336}
                      loading="lazy"
                    />
                  </motion.div>
                </motion.div>

                {/* Title + button */}
                <motion.div
                  className="space-y-6 relative z-10 text-left items-start w-full top-16 md:-top-16 px-8"
                  initial={{ x: idx === 0 ? -100 : 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug w-full">
                    {idx === 0 ? (
                      <span
                        dangerouslySetInnerHTML={{ __html: product.title }}
                      />
                    ) : (
                      product.title
                    )}
                  </h3>

                  <a
                    href={product.link}
                    className={`inline-flex rounded-full p-2 text-sm md:text-base font-semibold text-white ${
                      idx === 0 ? "bg-orange-600" : "bg-orange-400"
                    } justify-start self-start`}
                  >
                    Read More...
                  </a>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
