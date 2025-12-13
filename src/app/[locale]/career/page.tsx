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

export default async function CareerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const companies = CompaniesData;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full md:h-[80vh] h-[60vh] overflow-hidden flex items-center justify-center group">
        <Image
          src={CareerData.banner}
          alt="Career Banner"
          fill
          className="object-cover group-hover:scale-110 transition-all"
        />
        {/* Overlay */}
        <div className="md:hidden block group-hover:block absolute inset-0 bg-black opacity-30 pointer-events-none" />

        {/* Content: placed above image (no overlay) */}
        <div className="relative text-center mt-10 opacity-100 md:opacity-50 group-hover:opacity-100 flex flex-col gap-3 md:gap-4">
          <h1 className="text-2xl md:text-4xl md:text-sm text-white tracking-widest">
            Karir
          </h1>

          <p className="text-2xl md:text-4xl text-white md:mb-3 font-bold tracking-wide">
            Bergabunglah dengan Tim
          </p>

          <div>
            <Link
              href={`/id/career#job-section`}
              className="inline-flex items-center bg-orange-400 hover:bg-orange-500 
                     text-white font-semibold px-6 py-3 rounded-lg shadow-lg
                     transition-all duration-200 md:text-lg"
            >
              Lihat Lowongan
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to Grow Section */}
      <section className="pt-16 pb-0 px-4 md:px-8 bg-white max-w-7xl">
        <div className="mx-auto text-center md:max-w-[70vw]">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
            Siap berkembang bersama kami?
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify md:text-center">
            Farrasindo Group adalah grup bisnis yang sedang berkembang dengan
            beragam operasi di bidang konstruksi, manufaktur beton, alat berat,
            dan layanan kesehatan. Kami menawarkan peluang karier yang menarik
            di berbagai industri
          </p>
        </div>
      </section>

      {/* Join Our Group Section */}
      <section className="py-10 md:py-16 px-4 bg-white">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Logo and Equipment Image */}
            <div className="relative w-full lg:w-2/5">
              <div className="w-full h-[200px] md:h-[500px] rounded-2xl overflow-hidden ">
                <Image
                  src={bannerAllunit}
                  alt="Farrasindo Group Equipment"
                  fill={true}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Company Grid with Show More */}
            <CareerCompanySection companies={companies} />
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-16 px-4 md:px-8 bg-white" id="job-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Explore job and send us your resume today
          </h2>

          <CareerLayout allJobs={jobs} locale={locale} />
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
          <h2 className="text-4xl font-bold mb-6">Farracare</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 md:w-1/2 text-justify">
            Di Farrasindo Group, kami percaya bahwa pertumbuhan bisnis harus
            berjalan seiring dengan kepedulian dan tanggung jawab. Melalui
            FARRACARE, kami berkomitmen untuk memberikan keunggulan di industri
            kami sekaligus memberikan dampak positif bagi lingkungan, komunitas,
            dan masyarakat di sekitar kami.
          </p>
          <button className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Baca Lebih Lanjut ...
          </button>

          <CareerSlider />
        </div>
      </section>
    </div>
  );
}
