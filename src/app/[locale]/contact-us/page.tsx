import Image from "next/image";
import { Locale } from "@/lib/datas/global";
import ContactForm from "@/components/contact/ContactForm";
import BranchLocations from "@/components/contact/BranchLocations";
import contactBanner from "@/asset/images/career/bg-career.jpg";
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
      title: "Hubungi Kami - Kontak & Lokasi Cabang Farrasindo Group",
      description:
        "Hubungi Farrasindo Group untuk konsultasi proyek konstruksi Anda. Temukan kontak dan lokasi 17+ cabang kami di Jakarta, Surabaya, Bali, dan kota besar lainnya di Indonesia.",
      openGraph: {
        title: "Hubungi Kami - Farrasindo Group",
        description:
          "Kontak dan lokasi cabang Farrasindo Group di seluruh Indonesia. Siap melayani kebutuhan konstruksi Anda.",
        url: `${baseUrl}/id/contact-us`,
      },
      alternates: {
        canonical: `${baseUrl}/id/contact-us`,
      },
    };
  }

  return {
    title: "Contact Us - Contact & Branch Locations Farrasindo Group",
    description:
      "Contact Farrasindo Group for your construction project consultation. Find contact and location of our 17+ branches in Jakarta, Surabaya, Bali, and other major cities in Indonesia.",
    openGraph: {
      title: "Contact Us - Farrasindo Group",
      description:
        "Contact and branch locations of Farrasindo Group across Indonesia. Ready to serve your construction needs.",
      url: `${baseUrl}/en/contact-us`,
    },
    alternates: {
      canonical: `${baseUrl}/en/contact-us`,
    },
  };
}

export default async function ContactUs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeContent = await import(`@/messages/${locale}.json`);
  const contactUsPage = localeContent.contactUsPage;

  return (
    <div className="w-full">
      {/* Banner Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={contactBanner}
          alt="Contact Us Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center mt-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            {contactUsPage.banner.title}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            {contactUsPage.banner.description}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm locale={locale} contactData={contactUsPage} />

      {/* Branch Locations Section */}
      <BranchLocations
        locale={locale}
        branchLocationData={contactUsPage.sectionBranchLocation}
      />

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {locale == `id`
              ? "Siap Memulai Proyek Anda?"
              : "Ready to Start Your Project?"}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {locale == `id`
              ? "Hubungi kami hari ini dan mari kita diskusikan bagaimana kami dapat membantu Anda"
              : "Contact us today and let's discuss how we can help you"}
          </p>
          <a
            href={`https://wa.me/6289643418173`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-xl"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
