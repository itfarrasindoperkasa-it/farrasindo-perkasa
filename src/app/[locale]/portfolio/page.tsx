import { PartnerCustomer } from "@/components/portfolio/PartnerCustomer";
import PortfolioData from "@/lib/datas/portofolio";
import Image from "next/image";
import PortofolioBanner from "@/asset/images/homes/bannerPort.jpeg";
import { Metadata } from "next";
import { Locale } from "@/lib/datas/global";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://farrasindo-cp.co.id";

  if (locale === "id") {
    return {
      title: "Portfolio Proyek - Referensi Proyek Konstruksi Indonesia",
      description:
        "Lihat portfolio proyek konstruksi yang telah dikerjakan Farrasindo Group di seluruh Indonesia. Proyek infrastruktur, gedung tinggi, dan berbagai proyek prestisius lainnya.",
      openGraph: {
        title: "Portfolio Proyek - Farrasindo Group",
        description:
          "Portfolio proyek konstruksi prestisius di seluruh Indonesia menggunakan layanan dan produk Farrasindo Group.",
        url: "https://farrasindo-cp.co.id/id/portfolio",
      },
      alternates: {
        canonical: "https://farrasindo-cp.co.id/id/portfolio",
      },
    };
  }

  return {
    title:
      "Project Portfolio - Reference for Construction Projects in Indonesia",
    description:
      "See the construction project portfolio completed by Farrasindo Group across Indonesia. Infrastructure projects, high-rise buildings, and other prestigious projects.",
    openGraph: {
      title: "Project Portfolio - Farrasindo Group",
      description:
        "Prestigious construction project portfolio throughout Indonesia using Farrasindo Group's services and products.",
      url: "https://farrasindo-cp.co.id/en/portfolio",
    },
    alternates: {
      canonical: "https://farrasindo-cp.co.id/en/portfolio",
    },
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const banner = PortofolioBanner;
  // Gabungkan data image, title, dan location
  const localeContent = await import(`@/messages/${locale}.json`);
  const portfolioProjects = (localeContent.home?.portfolio?.projects || [])
    .map((project: any, i: number) => ({
      image: PortfolioData[i] || "",
      title: project.title,
      location: project.location,
    }))
    .slice(5, 15);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        <Image
          src={banner}
          alt="Portfolio Banner"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
          priority
        />
      </section>

      {/* Portfolio Grid */}
      <main className="w-full py-16 px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Portfolio</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-360 mx-auto">
          {portfolioProjects.map((item: any, i: number) => (
            <div
              key={i}
              className="relative w-full md:h-[350px] h-[250px] group rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                className="object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
              />
              {/* Overlay for hover effect with orange bg only at bottom, always visible on mobile */}
              <div
                className="absolute left-0 right-0 bottom-0 h-20 transition-all duration-300 flex flex-col justify-center items-center
                group-hover:bg-orange-400 group-hover:bg-opacity-90
                bg-opacity-0
                sm:bg-opacity-0 sm:group-hover:bg-opacity-90
                bg-orange-400 sm:bg-transparent
              "
              >
                <div
                  className="text-white text-center w-full
                  opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Partner & Customer */}
      <section>
        <PartnerCustomer />
      </section>
    </div>
  );
}
