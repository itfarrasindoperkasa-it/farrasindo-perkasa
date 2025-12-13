import Image from "next/image";
import CSRData from "@/lib/datas/csr";
import { articles } from "@/lib/datas/latest_news";
import { Locale } from "@/lib/datas/global";
import CSRActivitySlider from "@/components/csr/CSRActivitySlider";
import CSRNewsSlider from "@/components/csr/CSRNewsSlider";
import CSRBanner from "@/asset/images/csr/csr-banner.jpg";
import EmployeeBanner from "@/asset/images/csr/employee-banner.jpg";

export default async function CSRPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  // Filter artikel CSR (artikel yang berhubungan dengan kegiatan sosial/kesehatan/donor darah)
  const csrArticles = articles[locale]
    .filter(
      (article) =>
        article.title.toLowerCase().includes("donor") ||
        article.title.toLowerCase().includes("santunan") ||
        article.title.toLowerCase().includes("wellness") ||
        article.title.toLowerCase().includes("screening") ||
        article.title.toLowerCase().includes("kesehatan") ||
        article.title.toLowerCase().includes("sosial") ||
        article.title.toLowerCase().includes("ramadhan") ||
        article.title.toLowerCase().includes("esport") ||
        article.title.toLowerCase().includes("ulang tahun") ||
        article.title.toLowerCase().includes("hut ri") ||
        article.slug.includes("donor") ||
        article.slug.includes("santunan") ||
        article.slug.includes("wellness")
    )
    .slice(0, 6);

  return (
    <div className="w-full">
      {/* Hero Section with 3 Cards */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-visible">
        <Image
          src={CSRBanner}
          alt="CSR Banner"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 mb-20">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
              CSR
            </h1>
            <p className="text-white text-lg md:text-xl">
              Corporate Social Responsibility
            </p>
          </div>
        </div>

        {/* 3 Cards Override Banner - Absolute positioning */}
        <div className="absolute hidden md:block bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CSRData.cards.map((card, index) => (
              <div
                key={index}
                className="bg-orange-400/60 cursor-pointer hover:bg-orange-400 transition-all duration-300 rounded-xl p-8 text-white shadow-2xl transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Title & Description Section */}
      <section className="pb-16 py-20 md:py-50 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {CSRData.mainSection.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {CSRData.mainSection.description}
          </p>
        </div>
      </section>

      {/* Background Image Section */}
      <section className="relative h-[40vh] md:h-[70vh] w-full">
        <Image
          src={EmployeeBanner}
          alt="CSR Background"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-600/70" />
      </section>

      {/* 3 Details Section - Employee, Society, Environment */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 detail-section">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Employee Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Details */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {CSRData.details.employee.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {CSRData.details.employee.description}
                </p>

                {/* Expandable Details */}
                <div className="flex flex-col gap-2">
                  <details className="group">
                    <summary className="cursor-pointer list-none flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg transition-colors">
                      <span className="font-semibold">Employee</span>
                      <span className="transform group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-4 space-y-3 pl-4">
                      {CSRData.details.employee.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-orange-500 mt-1">✓</span>
                          <p className="text-gray-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer list-none flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg transition-colors">
                      <span className="font-semibold">Society</span>
                      <span className="transform group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-4 space-y-3 pl-4">
                      {CSRData.details.society.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-orange-500 mt-1">✓</span>
                          <p className="text-gray-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer list-none flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg transition-colors">
                      <span className="font-semibold">Environment</span>
                      <span className="transform group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-4 space-y-3 pl-4">
                      {CSRData.details.environment.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-orange-500 mt-1">✓</span>
                          <p className="text-gray-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              </div>
            </div>

            {/* Right Side - Photo Grid */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {CSRData.activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-xl shadow-lg ${
                      idx === 0 ? "row-span-2 h-full" : "h-30 md:h-58"
                    }`}
                  >
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR News Slider Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest CSR News & Activities
            </h2>
            <p className="text-gray-600 text-lg">
              Stay updated with our recent corporate social responsibility
              initiatives
            </p>
          </div>

          <CSRNewsSlider articles={csrArticles} locale={locale} />
        </div>
      </section>

      {/* CSR Activity Gallery Slider */}
      {/* <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our CSR Activities
            </h2>
            <p className="text-gray-600 text-lg">
              Documenting our commitment to society and environment
            </p>
          </div>

          <CSRActivitySlider activities={CSRData.activities} />
        </div>
      </section> */}

      {/* Call to Action Section */}
      {/* <section className="relative py-20 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Together, we can create a positive impact on communities and the
            environment
          </p>
          <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-xl">
            Learn More About Our Programs
          </button>
        </div>
      </section> */}
    </div>
  );
}
