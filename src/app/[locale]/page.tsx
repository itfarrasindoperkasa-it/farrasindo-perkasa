import Banner from "@/components/home/Banner";
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
import { OurGroup } from "@/components/home/OurGroup";
import LatestNewsArticle from "@/components/home/LatestNewsArticle";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const message = (await import(`../../messages/${locale}.json`)).default;

  return (
    <main id="home" className="w-full overflow-x-hidden ">
      <Banner
        className={`banner bg-black w-screen p-0`}
        height="h-[60vh] sm:h-[360px] md:h-[100vh]"
        messages={message.home.banner}
      />
      <section
        id="about"
        className="w-full px-4 md:ps-10 md:pe-23 py-12 md:py-20"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          {/* IMAGE — MOBILE DI ATAS */}
          <div className="w-full flex-1 flex justify-center">
            <Image
              src={AllUnitImage}
              alt="All Unit Farrasindo"
              className="w-full max-w-xl h-auto object-contain"
              priority
            />
          </div>

          {/* TEXT — MOBILE DI BAWAH */}
          <div className="flex flex-1 flex-col justify-between gap-4 md:gap-6">
            <h1 className="text-3xl font-bold leading-snug">
              {message.home.about.title.split(" ")[0]}{" "}
              <span className="bg-orange-400 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-white">
                {message.home.about.title.split(" ")[1]}
              </span>
            </h1>

            <p className="text-justify leading-relaxed text-sm sm:text-base">
              {message.home.about.description}
            </p>

            <Link
              href={`/${locale}/about`}
              className="py-2 px-4 text-white rounded-md font-bold text-base sm:text-lg bg-orange-400 w-full sm:w-fit text-center"
            >
              {message.home.about.buttonText}
            </Link>
          </div>
        </div>
      </section>

      <section id="ourServices" className="py-20 px-4 md:px-6 bg-gray-100">
        <div className="max-w-360 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            {message.home.our_service.title}
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div className="p-8 card shadow-lg items-center justify-center flex flex-col border-2 rounded-lg border-gray-200 py-5 gap-5">
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
        </div>
      </section>

      <section id="productRange" className="py-20">
        <div className="max-w-360 mx-auto">
          <ProductRange message={message.home.product_range} />
        </div>
      </section>

      <section id="portfolio">
        <Portfolio lang={locale} />
      </section>

      <section id="bestSellingProduct">
        <BestSellingProduct
          bestSellingProduct={message.home.best_selling_products}
        />
      </section>

      <section id="testimonial">
        <TestimonialSection testimonial={message.home.testimonials} />
      </section>

      <section id="lastestNews">
        <LatestNewsArticle lang={locale} />
      </section>

      <section id="ourGroup">
        <OurGroup />
      </section>
    </main>
  );
}
