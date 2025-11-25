import Banner from "@/components/home/Banner";
import { Metadata } from "next";
import Image from "next/image";
import AllUnitImage from "@/asset/images/homes/all-unit.png";
import Link from "next/link";
import OurServiceSellImage from "@/asset/images/homes/our-service-sell.png";
import OurServiceRentImage from "@/asset/images/homes/our-service-rent.png";
import OurServicePartAfterSaleImage from "@/asset/images/homes/our-service-part-after-sales.png";
import ProductRange from "@/components/home/ProductRange";
import { Portfolio } from "@/components/home/Portofolio";
import { BestSellingProduct } from "@/components/home/BestSellingProduct";
import { TestimonialSection } from "@/components/home/Testimonial";
import { LatestNews } from "@/components/home/LatestNews";
import { OurGroup } from "@/components/home/OurGroup";

export const metadata: Metadata = {
  title: "Farrasindo - Solusi Terbaik untuk Kebutuhan Anda",
  description:
    "Farrasindo menyediakan layanan dan produk berkualitas untuk memenuhi kebutuhan Anda. Temukan solusi terbaik bersama kami.",
  keywords: [
    "Farrasindo",
    "solusi",
    "layanan",
    "produk",
    "terbaik",
    "Indonesia",
  ],
  authors: [{ name: "Farrasindo" }],
  openGraph: {
    title: "Farrasindo - Solusi Terbaik untuk Kebutuhan Anda",
    description:
      "Farrasindo menyediakan layanan dan produk berkualitas untuk memenuhi kebutuhan Anda.",
    url: "https://farrasindo.com",
    siteName: "Farrasindo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Farrasindo Banner",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farrasindo - Solusi Terbaik untuk Kebutuhan Anda",
    description:
      "Farrasindo menyediakan layanan dan produk berkualitas untuk memenuhi kebutuhan Anda.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const message = (await import("../../messages/id.json")).default;

  return (
    <main id="home" className="w-full overflow-x-hidden">
      <Banner
        className={`banner bg-black w-screen p-0`}
        height="h-[85vh]"
        messages={message.home.banner}
      />
      <section id="about" className="w-full gap-20 min-h-[20em] flex p-20">
        <div className="relative h-[400px] w-full flex flex-1">
          <Image
            src={AllUnitImage}
            fill={true}
            alt="All Unit Farrasindo"
            className="object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <h1 className="text-4xl font-bold">
            {message.home.about.title.split(" ")[0]}{" "}
            <span className="bg-orange-400 py-3 rounded-md text-white">
              {message.home.about.title.split(" ")[1]}
            </span>
          </h1>
          <p className="text-justify leading-relaxed">
            {message.home.about.description}
          </p>
          <Link
            href={`/id/about`}
            className="py-2 px-4 text-white rounded-md font-bold text-xl bg-orange-400 w-fit"
          >
            {message.home.about.buttonText}
          </Link>
        </div>
      </section>
      <section id="ourServices" className="py-20 px-30">
        <h2 className="text-4xl font-bold text-center mb-10">
          {message.home.our_service.title}
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="p-8 card shadow-lg items-center justify-center flex flex-col border border-2 rounded-lg border-gray-200 py-5 gap-5">
            <Image
              src={OurServiceRentImage}
              width={150}
              height={150}
              alt="Our Service Part After Sales"
            />
            <h3 className="font-bold text-2xl">
              {message.home.our_service.rent.title}
            </h3>
            <details className="text-justify flex flex-col gap-5 items-center">
              <summary className="text-orange-400 border border-1 border-orange-400 rounded-lg px-2 py-1 w-fit cursor-pointer">
                Detail
              </summary>
              {message.home.our_service.rent.description}
            </details>
          </div>
          <div className="p-8 card shadow-lg items-center justify-center flex flex-col border border-2 rounded-lg border-gray-200 py-5 gap-5">
            <Image
              src={OurServiceSellImage}
              width={150}
              height={150}
              alt="Our Service Part After Sales"
            />
            <h3 className="font-bold text-2xl">
              {message.home.our_service.sell.title}
            </h3>
            <details className="text-justify flex flex-col gap-5 items-center">
              <summary className="text-orange-400 border border-1 border-orange-400 rounded-lg px-2 py-1 w-fit cursor-pointer">
                Detail
              </summary>
              {message.home.our_service.sell.description}
            </details>
          </div>
          <div className="p-8 card shadow-lg items-center justify-center flex flex-col border border-2 rounded-lg border-gray-200 py-5 gap-5">
            <Image
              src={OurServicePartAfterSaleImage}
              width={150}
              height={150}
              alt="Our Service Part After Sales"
            />
            <h3 className="font-bold text-2xl">
              {message.home.our_service.sparepart.title}
            </h3>
            <details className="text-justify flex flex-col gap-5 items-center">
              <summary className="text-orange-400 border border-1 border-orange-400 rounded-lg px-2 py-1 w-fit cursor-pointer">
                Detail
              </summary>
              {message.home.our_service.sparepart.description}
            </details>
          </div>
        </div>
      </section>
      <section id="productRange" className="p-20">
        <ProductRange message={message.home.product_range} />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="bestSellingProduct">
        <BestSellingProduct />
      </section>
      <section id="testimonial">
        <TestimonialSection />
      </section>
      <section id="lastestNews">
        <LatestNews />
      </section>
      <section id="ourGroup">
        <OurGroup />
      </section>
    </main>
  );
}
