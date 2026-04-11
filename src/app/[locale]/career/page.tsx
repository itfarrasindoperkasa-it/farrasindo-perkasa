import Image from "next/image";
import CareerData from "@/lib/datas/career";
import CompaniesData from "@/lib/datas/companies";
import Link from "next/link";
import bannerAllunit from "@/asset/images/homes/all-unit.png";
import { jobs } from "@/lib/datas/jobs";
import CareerLayout from "@/components/career/CareerLayout";
import CareerCompanySection from "@/components/career/CareerCompanySection";
import CareerSlider from "@/components/career/CareerSlider";
import { Locale } from "@/lib/datas/global";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://farrasindo-cp.co.id";

  if (locale === "id") {
    return {
      title: "Karir - Lowongan Kerja & Peluang Karir di Farrasindo Group",
      description:
        "Bergabunglah dengan Farrasindo Group! Temukan lowongan kerja terbaru, program pengembangan karyawan (Farracare), dan peluang karir di 17+ cabang kami di seluruh Indonesia.",
      openGraph: {
        title: "Karir - Farrasindo Group",
        description:
          "Lowongan kerja dan peluang karir di Farrasindo Group. Wujudkan karir impian Anda bersama kami!",
        url: `${baseUrl}/id/career`,
      },
      alternates: {
        canonical: `${baseUrl}/id/career`,
      },
    };
  }

  return {
    title: "Career - Job Vacancies & Career Opportunities at Farrasindo Group",
    description:
      "Join Farrasindo Group! Find latest job vacancies, employee development programs (Farracare), and career opportunities across our 17+ branches in Indonesia.",
    openGraph: {
      title: "Career - Farrasindo Group",
      description:
        "Job vacancies and career opportunities at Farrasindo Group. Build your dream career with us!",
      url: `${baseUrl}/en/career`,
    },
    alternates: {
      canonical: `${baseUrl}/en/career`,
    },
  };
}

export default async function CareerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeContent = await import(`@/messages/${locale}.json`);
  const careerPage = localeContent.careerPage;
  const companies = CompaniesData({ locale });

  return (
    <div className="w-full max-w-[120rem] mx-auto">
      {/* Hero Section */}
      <section className="relative w-full md:h-[80vh] h-[60vh] max-h-[600px] overflow-hidden flex items-center justify-center group">
        <Image
          src={CareerData.banner}
          alt="Career Banner"
          fill
          className="object-cover group-hover:scale-110 transition-all"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Content: always visible */}
        <div className="relative text-center mt-10 opacity-100 flex flex-col gap-3 md:gap-4">
          <h1 className="text-2xl md:text-4xl text-white tracking-widest">
            {careerPage.banner.title}
          </h1>

          <p className="text-2xl md:text-4xl text-white md:mb-3 font-bold tracking-wide">
            {careerPage.banner.description}
          </p>

          <div>
            <Link
              href={careerPage.banner.linkUrl}
              className="inline-flex items-center bg-orange-400 hover:bg-orange-500 
                     text-white font-semibold px-6 py-3 rounded-lg shadow-lg
                     transition-all duration-200 md:text-lg"
            >
              {careerPage.banner.linkText}
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to Grow Section */}
      <section className="pt-16 pb-0 px-4 md:px-8 bg-white">
        <div className="mx-auto text-center md:max-w-7xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
            {careerPage.sectionGrow.title}
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify md:text-center">
            {careerPage.sectionGrow.description}
          </p>
        </div>
      </section>

      {/* Join Our Group Section */}
      <section className="py-10 md:py-16 px-4 bg-white">
        <div className="px-20 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Logo and Equipment Image */}
            <div className="relative w-full lg:w-2/5">
              <div className="w-full h-[200px] md:h-[500px] rounded-2xl overflow-hidden relative">
                <Image
                  src={bannerAllunit}
                  alt="Farrasindo Group Equipment"
                  fill={true}
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Right Side - Company Grid with Show More */}
            <CareerCompanySection
              companies={companies}
              careerCompanySection={careerPage.sectionJoinOurGroup}
            />
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-16 px-4 md:px-8 bg-white" id="job-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            {careerPage.sectionJobVacancy.title}
          </h2>

          <CareerLayout allJobs={jobs} locale={locale} />

          {/* Social Job Platform Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12 mb-8">
            <Link
              href="https://id.jobstreet.com/id/Farrasindo-Perkasa-jobs/at-this-company"
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all min-w-[240px] text-center shadow-md hover:shadow-lg"
            >
              Jelajahi di Jobstreet
            </Link>
            <Link
              href="https://glints.com/id/companies/farrasindo-perkasa-group/856101bf-ad91-4af2-87b7-5d75dea92bf9"
              target="_blank"
              className="bg-black hover:bg-zinc-800 text-white font-semibold px-8 py-3 rounded-lg transition-all min-w-[240px] text-center shadow-md hover:shadow-lg"
            >
              Jelajahi di Glints
            </Link>
          </div>
        </div>
      </section>

      {/* Farracare Section */}
      <section
        className="relative py-16 px-4 md:px-8 text-white overflow-hidden"
        id="farracare"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/farracare-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay untuk keterbacaan */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/90" />

        {/* Content */}
        <div className="relative z-10 max-w-360 mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            {careerPage.sectionFarracare.title}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 md:w-1/2 text-justify">
            {careerPage.sectionFarracare.description}
          </p>
          <Link
            href={careerPage.sectionFarracare.linkUrl}
            className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {careerPage.sectionFarracare.linkText}
          </Link>

          <CareerSlider />
        </div>
      </section>
    </div>
  );
}
