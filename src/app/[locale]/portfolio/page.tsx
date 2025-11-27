import { PartnerCustomer } from "@/components/portfolio/PartnerCustomer";
import HomeBannerData from "@/lib/datas/home_banner";
import PortfolioData from "@/lib/datas/portofolio";
import idMessages from "@/messages/id.json";
import Image from "next/image";

export default function PortfolioPage() {
  const banner = HomeBannerData[4];
  // Gabungkan data image, title, dan location
  const portfolioProjects = (idMessages.home?.portfolio?.projects || [])
    .map((project, i) => ({
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
          className="object-cover"
          priority
        />
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
          <div className="flex justify-center gap-4 mt-5">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">
              ALL
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm">
              Batch Pump
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm">
              Concrete Pump
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-360 mx-auto">
          {portfolioProjects.map((item, i) => (
            <div
              key={i}
              className="relative w-full md:h-[350px] h-[250px] group rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
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
      </section>

      {/* Partner & Customer */}
      <section>
        <PartnerCustomer />
      </section>
    </div>
  );
}
