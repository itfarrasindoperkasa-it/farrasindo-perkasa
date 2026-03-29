"use client";

import { Phone } from "lucide-react";
import WaLogo from "@/asset/images/homes/wa-logo.png";
import Image from "next/image";
import ShopeeLogo from "@/asset/images/homes/shopee-logo.png";
import TokopediaLogo from "@/asset/images/homes/tokopedia-logo.png";

export default function ActionButton() {
  return (
    <>
      {/* Desktop/Web Floating Buttons */}
      <div className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 z-[9999] flex-col gap-3 p-2 backdrop-blur-lg rounded-full shadow-lg">
        {/* Call Button */}
        <a
          href="tel:+6281575453564"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-400/70 rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-white text-2xl hover:scale-110 transition-transform duration-200 overflow-hidden"
          aria-label="Call Farrasindo"
        >
          <Phone />
        </a>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6281575453564?text=Halo%2C+PT+FARRASINDO+PERKASA%2C+Saya+mendapatkan+informasi+ini+dari+website%2C+dan+ada+yang+mau+saya+tanyakan%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-white text-2xl hover:scale-110 transition-transform duration-200 relative"
          aria-label="WhatsApp Farrasindo"
        >
          <Image src={WaLogo} alt="WhatsApp" fill sizes="100%" />
        </a>
        {/* Tokopedia Button */}
        <a
          href="https://www.tokopedia.com/farrasindo-group"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-white text-2xl hover:scale-110 transition-transform duration-200 relative"
          aria-label="Tokopedia Farrasindo"
        >
          <Image src={TokopediaLogo} alt="Tokopedia" fill sizes="100%" />
        </a>
        {/* Shopee Button */}
        <a
          href="https://shopee.co.id/farrasindoperkasa?categoryId=100636&entryPoint=ShopByPDP&itemId=27819455584&upstream=search"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-white text-2xl hover:scale-110 transition-transform duration-200 relative"
          aria-label="Shopee Farrasindo"
        >
          <Image src={ShopeeLogo} alt="Shopee" fill sizes="100%" />
        </a>
      </div>

      {/* Mobile Bottom Bar Buttons */}
      <div className="flex md:hidden fixed bottom-0 left-0 w-full z-[9999] backdrop-blur-lg shadow-t py-4 px-10 justify-around items-center rounded-t-4xl">
        <a
          href="tel:0215870525"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-400/70 rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-white text-2xl overflow-hidden"
          aria-label="Call Farrasindo"
        >
          <Phone size={20} />
        </a>
        <a
          href="https://wa.me/6281575453564?text=Halo%2C+PT+FARRASINDO+PERKASA%2C+Saya+mendapatkan+informasi+ini+dari+website%2C+dan+ada+yang+mau+saya+tanyakan%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-white text-2xl relative"
          aria-label="WhatsApp Farrasindo"
        >
          <Image src={WaLogo} alt="WhatsApp" fill sizes="()" />
        </a>
        <a
          href="https://www.tokopedia.com/farrasindo-group"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-white text-2xl relative"
          aria-label="Tokopedia Farrasindo"
        >
          <Image src={TokopediaLogo} alt="Tokopedia" fill sizes="100%" />
        </a>
        <a
          href="https://shopee.co.id/farrasindoperkasa?categoryId=100636&entryPoint=ShopByPDP&itemId=27819455584&upstream=search"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-white text-2xl relative"
          aria-label="Shopee Farrasindo"
        >
          <Image src={ShopeeLogo} alt="Shopee" fill sizes="100%" />
        </a>
      </div>
    </>
  );
}
