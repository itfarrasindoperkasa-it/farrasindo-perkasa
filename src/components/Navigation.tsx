"use client";

import {
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import enFlag from "@/asset/images/homes/en-flag.png";
import idFlag from "@/asset/images/homes/id-flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faChevronDown,
  faChevronUp,
  faBars,
  faXmark,
  faPhone,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTiktok,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Navigation({ locale }: { locale: string }) {
  const [openNavbar, setOpenNavbar] = useState<any>({
    aboutus: false,
    portfolio: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavbar = (menu: "aboutus" | "portfolio") => {
    setOpenNavbar((prev: any) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleScrollToSection = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const cleanId = id.replace(/^#/, "");
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const brandOrange = "#f97d00";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
      id="navigationWeb"
    >
      {/* TOP BAR (DESKTOP ONLY) */}
      <div className={`hidden md:flex items-center w-full h-[45px] transition-colors duration-300 relative z-[60] ${
        scrolled ? "bg-black" : "bg-black/20 backdrop-blur-sm"
      }`}>
        <div className="container mx-auto px-6 md:px-20 lg:px-32 flex justify-between items-center h-full">
          <ul className="flex gap-8 items-center h-full">
            <li className="flex items-center">
              <Link
                href="mailto:marketing@farrasindo-cp.co.id"
                className="flex items-center text-white text-sm hover:text-[#f97d00] transition-colors"
                style={{ fontSize: "14px" }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-[#f97d00] me-3 text-base" />
                marketing@farrasindo-cp.co.id
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="https://maps.google.com/maps?ll=-6.198149,106.756053&z=13&t=m&hl=id&gl=ID&mapclient=embed&cid=6652057653992676014"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white text-sm hover:text-[#f97d00] transition-colors"
                style={{ fontSize: "14px" }}
              >
                <FontAwesomeIcon icon={faLocationDot} className="text-[#f97d00] me-3 text-base" />
                {locale == "id"
                  ? "Srengseng, Kota Jakarta Barat"
                  : "Srengseng, West Jakarta City"}
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-8 h-full">
            <ul className="flex gap-5">
              <li>
                <Link href="https://www.facebook.com/farrasindo" target="_blank" className="text-white hover:text-[#f97d00] transition-colors">
                  <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
                </Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com/@farrasindo_group" target="_blank" className="text-white hover:text-[#f97d00] transition-colors">
                  <FontAwesomeIcon icon={faTiktok} className="text-lg" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/farrasindo-perkasa-group" target="_blank" className="text-white hover:text-[#f97d00] transition-colors">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/farrasindo_group" target="_blank" className="text-white hover:text-[#f97d00] transition-colors">
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UCTLUMhIMoWrkgSNelac3aRQ" target="_blank" className="text-white hover:text-[#f97d00] transition-colors">
                  <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                </Link>
              </li>
            </ul>
            {/* Language Switcher */}
            <div className="flex items-center gap-3 border-l border-white/20 pl-8 ml-2 h-6">
              <Image src={locale === "id" ? idFlag : enFlag} alt="Current Language" width={22} height={14} />
              <span className="text-white text-sm font-bold uppercase tracking-wider">{locale}</span>
              <div className="relative group/lang">
                  <FontAwesomeIcon icon={faChevronDown} className="text-white text-[12px] cursor-pointer" />
                  <div className="absolute right-0 top-full mt-4 bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300 w-36 py-3 border border-gray-100 z-[100]">
                    <button 
                      onClick={() => window.location.href = (locale === "id" ? "/en" : "/id") + window.location.pathname.replace(/^\/[a-z]{2}/, "")}
                      className="flex items-center gap-4 w-full px-5 py-2.5 hover:bg-orange-50 text-gray-800 text-sm font-semibold"
                    >
                      <Image src={locale === "id" ? enFlag : idFlag} alt="Flag" width={22} height={14} />
                      {locale === "id" ? "English" : "Indonesia"}
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN BAR (LOGO + MENU) */}
      <div className={`flex items-center w-full transition-all duration-300 ${scrolled ? "h-[70px]" : "h-[90px]"} relative z-[50]`}>
        <div className="container mx-auto px-6 md:px-20 lg:px-32 flex justify-between items-center h-full">
          <Link href={`/${locale}`} className="flex-shrink-0 transition-all duration-300">
            <Image
              src="/assets/images/farrasindo-logo.svg"
              width={220}
              height={55}
              loading="eager"
              alt="Farrasindo Logo"
              className={`h-auto transition-all duration-300 ${scrolled ? "w-[160px] md:w-[200px]" : "w-[200px] md:w-[240px]"}`}
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center justify-end gap-10">
            <ul className={`flex gap-10 text-[17px] font-bold items-center ${scrolled ? "text-gray-800" : "text-white"}`}>
              <li>
                <Link href={`/${locale}`} className="hover:text-[#f97d00] transition-colors">
                  {locale == "id" ? "Beranda" : "Home"}
                </Link>
              </li>
              <li className="relative group">
                <div className="flex gap-2 items-center cursor-pointer hover:text-[#f97d00] transition-colors">
                  <Link href={`/${locale}/about-us`}>
                    {locale == "id" ? "Tentang Kami" : "About Us"}
                  </Link>
                  <FontAwesomeIcon icon={faChevronDown} size="xs" className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white py-3 px-2 w-[220px] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-[100]">
                  <li>
                    <Link
                      href={`/${locale}/about-us#company-overview`}
                      className="text-gray-700 hover:text-[#f97d00] hover:bg-orange-50 px-4 py-2 rounded-lg block transition-colors font-bold text-sm"
                      onClick={(e) => handleScrollToSection("company-overview", e)}
                    >
                      {locale == "id" ? "Gambaran Perusahaan" : "Company Overview"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/about-us#company-history`}
                      className="text-gray-700 hover:text-[#f97d00] hover:bg-orange-50 px-4 py-2 rounded-lg block transition-colors font-bold text-sm"
                      onClick={(e) => handleScrollToSection("company-history", e)}
                    >
                      {locale == "id" ? "Sejarah" : "History"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/about-us#our-group`}
                      className="text-gray-700 hover:text-[#f97d00] hover:bg-orange-50 px-4 py-2 rounded-lg block transition-colors font-bold text-sm"
                      onClick={(e) => handleScrollToSection("our-group", e)}
                    >
                      {locale == "id" ? "Kelompok Kami" : "Our Group"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/career`}
                      className="text-gray-700 hover:text-[#f97d00] hover:bg-orange-50 px-4 py-2 rounded-lg block transition-colors font-bold text-sm"
                    >
                      {locale == "id" ? "Karir" : "Career"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/csr`}
                      className="text-gray-700 hover:text-[#f97d00] hover:bg-orange-50 px-4 py-2 rounded-lg block transition-colors font-bold text-sm"
                    >
                      CSR
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={`/${locale}/product-service`} className="hover:text-[#f97d00] transition-colors">
                  {locale == "id" ? "Produk Layanan" : "Products Service"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/portfolio`} className="hover:text-[#f97d00] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/news-event`} className="hover:text-[#f97d00] transition-colors">
                  {locale == "id" ? "Berita" : "News & Event"}
                </Link>
              </li>
            </ul>

            <Link
              href={`/${locale}/contact-us`}
              className="bg-[#f97d00] hover:bg-[#e67300] text-white px-7 py-3 rounded-lg font-bold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all flex items-center gap-2 text-[17px]"
            >
              {locale == "id" ? "Hubungi Kami" : "Call Now"}
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            className="md:hidden ml-auto p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} size="xl" className={scrolled ? "text-gray-800" : "text-white"} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden fixed inset-0 z-[100] bg-white transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-6 border-b">
          <Image
            src="/assets/images/farrasindo-logo.svg"
            width={180}
            height={45}
            alt="Farrasindo Logo"
          />
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          </button>
        </div>
        <ul className="flex flex-col p-8 gap-6 text-xl font-bold overflow-y-auto max-h-[calc(100vh-120px)]">
          <li>
            <Link href={`/${locale}`} className="block py-3 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              {locale == "id" ? "Beranda" : "Home"}
            </Link>
          </li>
          <li>
            <button
              className="w-full flex items-center justify-between py-3 border-b border-gray-100"
              onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
            >
              {locale == "id" ? "Tentang Kami" : "About Us"}
              <FontAwesomeIcon icon={isMobileAboutOpen ? faChevronUp : faChevronDown} />
            </button>
            {isMobileAboutOpen && (
              <ul className="pl-6 mt-3 flex flex-col gap-4 font-bold text-gray-500">
                <li>
                  <Link href={`/${locale}/about-us#company-overview`} className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {locale == "id" ? "Gambaran Perusahaan" : "Company Overview"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about-us#company-history`} className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {locale == "id" ? "Sejarah" : "History"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about-us#our-group`} className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {locale == "id" ? "Kelompok Kami" : "Our Group"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/career`} className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {locale == "id" ? "Karir" : "Career"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/csr`} className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    CSR
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href={`/${locale}/product-service`} className="block py-3 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              {locale == "id" ? "Produk Layanan" : "Products Service"}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/portfolio`} className="block py-3 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/news-event`} className="block py-3 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              {locale == "id" ? "Berita" : "News & Event"}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/contact-us`}
              className="mt-6 bg-[#f97d00] text-white p-5 rounded-2xl text-center flex items-center justify-center gap-4 font-extrabold text-2xl shadow-xl shadow-orange-500/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faPhone} />
              {locale == "id" ? "Hubungi Kami" : "Call Now"}
            </Link>
          </li>
          <li className="flex items-center gap-6 mt-6 p-6 bg-gray-50 rounded-2xl">
             <button onClick={() => window.location.href = "/id" + window.location.pathname.replace(/^\/[a-z]{2}/, "")} className={`flex items-center gap-3 ${locale === "id" ? "text-[#f97d00]" : "text-gray-400"}`}>
               <Image src={idFlag} alt="ID" width={28} /> <span className="text-lg">ID</span>
             </button>
             <div className="w-px h-6 bg-gray-300"></div>
             <button onClick={() => window.location.href = "/en" + window.location.pathname.replace(/^\/[a-z]{2}/, "")} className={`flex items-center gap-3 ${locale === "en" ? "text-[#f97d00]" : "text-gray-400"}`}>
               <Image src={enFlag} alt="EN" width={28} /> <span className="text-lg">EN</span>
             </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
