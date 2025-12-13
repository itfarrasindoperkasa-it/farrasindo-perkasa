import Image from "next/image";
import { Locale } from "@/lib/datas/global";
import ContactForm from "@/components/contact/ContactForm";
import BranchLocations from "@/components/contact/BranchLocations";
import contactBanner from "@/asset/images/career/bg-career.jpg";
import { User } from "lucide-react";

export default async function ContactUs({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const locale = (await params).locale;

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
            Contact Us
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Get in touch with us for any inquiries about our products and
            services
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Branch Locations Section */}
      <BranchLocations />

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today and let's discuss how we can help you
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
