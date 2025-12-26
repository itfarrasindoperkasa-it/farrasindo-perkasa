"use client";

import {
  ChevronDown,
  ChevronUp,
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  Locate,
  Mail,
  Music2,
  YoutubeIcon,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import enFlag from "@/asset/images/homes/en-flag.png";
import idFlag from "@/asset/images/homes/id-flag.png";

export default function Navigation({ locale }: { locale: string }) {
  const [openNavbar, setOpenNavbar] = useState<any>({
    aboutus: false,
    portfolio: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  const handleOpenNavbar = (menu: "aboutus" | "portfolio") => {
    setOpenNavbar((prev: any) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Smooth scroll to section by id
  const handleScrollToSection = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    // Remove hash if present
    const cleanId = id.replace(/^#/, "");
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex flex-col max-w-[100vw] bg-white shadow-lg"
      id="navigationWeb"
    >
      {/* TOP BAR (DESKTOP ONLY) */}
      <div className="hidden md:flex items-center gap-20 w-full h-full p-2 justify-between bg-black lg:px-15">
        <ul className="flex gap-10">
          <li className="flex items-center justify-center">
            <Link
              href="mailto:marketing@farrasindo-cp.co.id"
              className="flex items-center text-white"
            >
              <Mail className="text-orange-400 me-2" />
              marketing@farrasindo-cp.co.id
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="https://maps.google.com/maps?ll=-6.198149,106.756053&z=13&t=m&hl=id&gl=ID&mapclient=embed&cid=6652057653992676014"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white"
            >
              <Locate className="text-orange-400 me-2" />
              {locale == "id"
                ? "Srengseng, Kota Jakarta Barat"
                : "Srengseng, West Jakarta City"}
            </Link>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li className="flex items-center justify-center">
            <Link
              href="https://www.facebook.com/farrasindo"
              target="__blank"
              className="flex items-center text-white"
            >
              <FacebookIcon className="text-orange-400 me-2" />
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="https://www.tiktok.com/@farrasindo_group"
              target="__blank"
              className="flex items-center text-white"
            >
              <Music2 className="text-orange-400 me-2" />
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="https://www.linkedin.com/company/farrasindo-perkasa-group"
              target="__blank"
              className="flex items-center text-white"
            >
              <Linkedin className="text-orange-400 me-2" />
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="https://www.instagram.com/farrasindo_group"
              target="__blank"
              className="flex items-center text-white"
            >
              <InstagramIcon className="text-orange-400 me-2" />
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="https://www.youtube.com/channel/UCTLUMhIMoWrkgSNelac3aRQ"
              target="__blank"
              className="flex items-center text-white"
            >
              <YoutubeIcon className="text-orange-400 me-2" />
            </Link>
          </li>
          {/* Language Switcher Button */}
          <li className="flex items-center justify-center">
            {locale === "id" ? (
              <button
                className="px-3 py-1 rounded bg-white text-black font-bold overflow-hidden w-8 h-5 relative cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "/en" + window.location.pathname.replace(/^\/[a-z]{2}/, "");
                }}
              >
                <Image src={enFlag} alt="English Flag" fill={true} />
              </button>
            ) : null}
            {locale === "en" ? (
              <button
                className="px-3 py-1 rounded bg-white text-black font-bold overflow-hidden w-8 h-5 relative cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "/id" + window.location.pathname.replace(/^\/[a-z]{2}/, "");
                }}
              >
                <Image src={idFlag} alt="English Flag" fill={true} />
              </button>
            ) : null}
          </li>
        </ul>
      </div>

      {/* MAIN BAR (LOGO + MENU) */}
      <div className="flex items-center w-full h-full px-4 md:px-8 gap-15">
        <Link href={`/${locale}`} className="">
          <Image
            src={`/assets/images/farrasindo-group-logo.png`}
            width={120}
            height={30}
            loading="eager"
            alt="Farrasindo Logo"
            className="h-auto w-[180px] md:w-[220px]"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-x-6 mr-10 text-lg font-medium items-center md:flex-wrap">
          <li className="flex gap-2 items-center">
            <Link
              href={`/${locale}`}
              className="hover:text-foreground/80 font-bold"
            >
              {locale == "id" ? "Beranda" : "Home"}
            </Link>
          </li>
          <li>
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => handleOpenNavbar("aboutus")}
            >
              <Link
                href={`/${locale}/about-us`}
                className="hover:text-foreground/80 font-bold"
              >
                {locale == "id" ? "Tentang Kami" : "About Us"}
              </Link>
              <ChevronDown
                size={16}
                className={`${
                  openNavbar.aboutus ? `rotate-180` : ``
                } duration-150`}
              />
            </div>
            <ul
              className={`z-99 absolute bg-white py-2 px-3 w-[200px] rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
                openNavbar.aboutus ? `block` : `hidden`
              }`}
            >
              <li>
                <Link
                  href={`/${locale}/about-us#company-overview`}
                  className="text-orange-400 hover:text-orange-600 w-full text-left block mb-3"
                  scroll={false}
                  onClick={(e) => handleScrollToSection("company-overview", e)}
                >
                  {locale == "id" ? "Gambaran Perusahaan" : "Company Overview"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about-us#company-history`}
                  className="text-orange-400 hover:text-orange-600 w-full text-left block mb-3"
                  scroll={false}
                  onClick={(e) => handleScrollToSection("company-history", e)}
                >
                  {locale == "id" ? "Sejarah" : "History"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about-us#our-group`}
                  className="text-orange-400 hover:text-orange-600 w-full text-left block mb-3"
                  scroll={false}
                  onClick={(e) => handleScrollToSection("our-group", e)}
                >
                  {locale == "id" ? "Kelompok Kami" : "Our Group"}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href={`/${locale}/product-service`}
              className="hover:text-foreground/80 font-bold"
            >
              {locale == "id" ? "Produk Layanan" : "Products Service"}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/portfolio`}
              className="hover:text-foreground/80 font-bold"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/news-event`}
              className="hover:text-foreground/80 font-bold"
            >
              {locale == "id" ? "Berita Acara" : "News Event"}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/career`}
              className="hover:text-foreground/80 font-bold"
            >
              {locale == "id" ? "Karir" : "Career"}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/csr`}
              className="hover:text-foreground/80 font-bold"
            >
              CSR
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/contact-us`}
              className="hover:text-foreground/80 font-bold"
            >
              {locale == "id" ? "Hubungi Kami" : "Contact Us"}
            </Link>
          </li>
        </ul>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="md:hidden ml-auto p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-orange-400" />
          ) : (
            <Menu size={24} className="text-orange-400" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col px-4 py-3 space-y-2 text-base font-medium">
            <li>
              <Link
                href={`/${locale}`}
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {locale == `id` ? "Beranda" : "Home"}
              </Link>
            </li>

            {/* About Us mobile with sub menu */}
            <li>
              <button
                className="w-full flex items-center justify-between py-2"
                onClick={() => setIsMobileAboutOpen((prev) => !prev)}
              >
                {locale == `id` ? "Tentang Kami" : "About Us"}
                {isMobileAboutOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {isMobileAboutOpen && (
                <ul className="pl-4 space-y-1 text-sm">
                  <li>
                    <Link
                      href={`/${locale}/about-us#company-overview`}
                      className="block py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale == "id"
                        ? "Gambaran Perusahaan"
                        : "Company Overview"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/about-us#company-history`}
                      className="block py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale == "id" ? "Sejarah" : "History"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/about-us#our-group`}
                      className="block py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale == "id" ? "Kelompok" : "Our Group"}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href={`/${locale}/product-service`}
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {locale == "id" ? "Produk dan Layanan" : "Products and Service"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/portfolio`}
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {locale == "id" ? "Portofolio" : "Portfolio"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/news-event`}
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {locale == "id" ? "Berita dan Acara" : "News and Event"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/career`}
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {locale == "id" ? "Karir" : "Career"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/csr`}
                className="block py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CSR
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {locale == "id" ? "Hubungi Kami" : "Contact Us"}
              </Link>
            </li>
            {/* Language Switcher Button (Mobile) */}
            <li className="flex items-center justify-start">
              {locale === "id" ? (
                <button
                  className="px-3 py-1 rounded bg-white text-black font-bold overflow-hidden w-8 h-5 relative cursor-pointer"
                  onClick={() => {
                    window.location.href =
                      "/en" +
                      window.location.pathname.replace(/^\/[a-z]{2}/, "");
                  }}
                  aria-label="Switch to English"
                >
                  <Image src={enFlag} alt="English Flag" fill={true} />
                </button>
              ) : null}
              {locale === "en" ? (
                <button
                  className="px-3 py-1 rounded bg-white text-black font-bold overflow-hidden w-8 h-5 relative cursor-pointer"
                  onClick={() => {
                    window.location.href =
                      "/id" +
                      window.location.pathname.replace(/^\/[a-z]{2}/, "");
                  }}
                  aria-label="Switch to Indonesian"
                >
                  <Image src={idFlag} alt="Indonesian Flag" fill={true} />
                </button>
              ) : null}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
