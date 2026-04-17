import PortfolioData, { PortfolioConfig } from "@/lib/datas/portofolio";
import Link from "next/link";
import PortfolioSlider from "./PortfolioSlider";

export async function Portfolio({ lang }: { lang: string }) {
  const messages = (await import(`../../messages/${lang}.json`)).default;
  const portfolioConfig = messages.home.portfolio as PortfolioConfig;

  const { title, buttonText, subtitle, projects } = portfolioConfig;

  // Combine project JSON + image based on index
  const portfolioItems = projects
    .map((project, index) => ({
      ...project,
      image: PortfolioData[index],
    }))
    // Filter out items without images
    .filter((item) => !!item.image);

  return (
    <section className="bg-white py-20 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header - Consistent with page.tsx */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-extrabold text-[#171717]">
            {title}
          </h2>
        </div>

        {/* Slider Implementation */}
        <div className="relative">
          <PortfolioSlider items={portfolioItems} lang={lang} />
          
          {/* Decorative background elements */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10" />
        </div>
      </div>
    </section>
  );
}
