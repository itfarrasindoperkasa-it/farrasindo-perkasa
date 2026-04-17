import Banner from "@/components/home/Banner";
import Image from "next/image";
import OurServiceSellImage from "@/asset/images/homes/our-service-sell.png";
import OurServiceRentImage from "@/asset/images/homes/our-service-rent.png";
import OurServicePartAfterSaleImage from "@/asset/images/homes/our-service-part-after-sales.png";
import ProductRange from "@/components/home/ProductRange";
import { Portfolio } from "@/components/home/Portofolio";
import { BestSellingProduct } from "@/components/home/BestSellingProduct";
import { TestimonialSection } from "@/components/home/Testimonial";
import { OurGroup } from "@/components/home/OurGroup";
import LatestNewsArticle from "@/components/home/LatestNewsArticle";

import AboutSection from "@/components/home/AboutSection";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const message = (await import(`../../messages/${locale}.json`)).default;

  return (
    <main id="home" className="w-full overflow-x-hidden mx-auto max-w-[120rem]">
      <Banner
        className={`banner bg-black w-screen p-0`}
        height="h-[60vh] lg:h-[100vh] max-h-[1000px]"
        messages={message.home.banner}
      />
      
      <AboutSection locale={locale} message={message.home.about} />

      <section id="ourServices" className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold text-[#171717]">
              {message.home.our_service.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Rent Section */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center gap-6">
              <div className="w-32 h-32 relative group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={OurServiceRentImage}
                  fill
                  className="object-contain"
                  alt="Sewa Mesin"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-extrabold text-2xl text-neutral-800">
                  {message.home.our_service.rent.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed line-clamp-3">
                  {message.home.our_service.rent.description}
                </p>
                <Link 
                  href={`/${locale}/product-service?tab=Rent`}
                  className="inline-flex items-center text-[#f97d00] font-bold hover:gap-2 transition-all mt-4"
                >
                  Detail Layanan <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Sell Section */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center gap-6">
              <div className="w-32 h-32 relative group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={OurServiceSellImage}
                  fill
                  className="object-contain"
                  alt="Jual Mesin"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-extrabold text-2xl text-neutral-800">
                  {message.home.our_service.sell.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed line-clamp-3">
                  {message.home.our_service.sell.description}
                </p>
                <Link 
                  href={`/${locale}/product-service?tab=Sell`}
                  className="inline-flex items-center text-[#f97d00] font-bold hover:gap-2 transition-all mt-4"
                >
                  Detail Layanan <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Sparepart Section */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center gap-6">
              <div className="w-32 h-32 relative group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={OurServicePartAfterSaleImage}
                  fill
                  className="object-contain"
                  alt="Suku Cadang"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-extrabold text-2xl text-neutral-800">
                  {message.home.our_service.sparepart.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed line-clamp-3">
                  {message.home.our_service.sparepart.description}
                </p>
                <Link 
                  href={`/${locale}/product-service?tab=Sparepart`}
                  className="inline-flex items-center text-[#f97d00] font-bold hover:gap-2 transition-all mt-4"
                >
                  Detail Layanan <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                </Link>
              </div>
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
