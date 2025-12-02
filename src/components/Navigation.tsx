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

export default function Navigation() {
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
              href="https://maps.google.com/?q=Srengseng, Kota Jakarta Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white"
            >
              <Locate className="text-orange-400 me-2" />
              Srengseng, Kota Jakarta Barat
            </Link>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li className="flex items-center justify-center">
            <Link href="#" className="flex items-center text-white">
              <FacebookIcon className="text-orange-400 me-2" />
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link href="#" className="flex items-center text-white">
              <Music2 className="text-orange-400 me-2" />
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link href="#" className="flex items-center text-white">
              <Linkedin className="text-orange-400 me-2" />
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link href="#" className="flex items-center text-white">
              <InstagramIcon className="text-orange-400 me-2" />
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link href="#" className="flex items-center text-white">
              <YoutubeIcon className="text-orange-400 me-2" />
            </Link>
          </li>
        </ul>
      </div>

      {/* MAIN BAR (LOGO + MENU) */}
      <div className="flex items-center w-full h-full px-4 md:px-8">
        <Image
          src={`/assets/images/farrasindo-group-logo.png`}
          width={120}
          height={30}
          alt="Farrasindo Logo"
          className="h-auto w-[180px] md:w-[220px]"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-x-6 mr-10 text-lg font-medium items-center md:flex-wrap ml-40">
          <li className="flex gap-2 items-center">
            <Link href={`/id`} className="hover:text-foreground/80 font-bold">
              Home
            </Link>
          </li>
          <li>
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => handleOpenNavbar("aboutus")}
            >
              <Link
                href={`/id/about-us`}
                className="hover:text-foreground/80 font-bold"
              >
                About Us
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
                  href="#company-overview"
                  className="text-orange-400 hover:text-orange-600 w-full text-left block"
                  scroll={false}
                  onClick={(e) => handleScrollToSection("company-overview", e)}
                >
                  Company Overview
                </Link>
              </li>
              <li>
                <Link
                  href="#company-history"
                  className="text-orange-400 hover:text-orange-600 w-full text-left block"
                  scroll={false}
                  onClick={(e) => handleScrollToSection("company-history", e)}
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="#our-group"
                  className="text-orange-400 hover:text-orange-600 w-full text-left block"
                  scroll={false}
                  onClick={(e) => handleScrollToSection("our-group", e)}
                >
                  Kelompok Kami
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href={`/id/product-service`}
              className="hover:text-foreground/80 font-bold"
            >
              Products and Service
            </Link>
          </li>
          <li>
            <Link
              href={`/id/portfolio`}
              className="hover:text-foreground/80 font-bold"
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              href={`/id/news-and-event`}
              className="hover:text-foreground/80 font-bold"
            >
              News and Event
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-foreground/80 font-bold"
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-foreground/80 font-bold"
            >
              Contact Us
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
                href="#home"
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* About Us mobile with sub menu */}
            <li>
              <button
                className="w-full flex items-center justify-between py-2"
                onClick={() => setIsMobileAboutOpen((prev) => !prev)}
              >
                <span>About Us</span>
                {isMobileAboutOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {isMobileAboutOpen && (
                <ul className="pl-4 pb-2 space-y-1 text-sm">
                  <li>
                    <Link
                      href="#company-overview"
                      className="block py-1 text-orange-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Company Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#company-history"
                      className="block py-1 text-orange-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#our-group"
                      className="block py-1 text-orange-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Group
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#our-group"
                      className="block py-1 text-orange-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      CSR
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href={`product-service`}
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products and Service
              </Link>
            </li>
            <li>
              <Link
                href={"/portofolio"}
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portofolio
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News and Event
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
