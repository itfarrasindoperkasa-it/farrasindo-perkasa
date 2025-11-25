"use client";

import {
  ChevronDown,
  ChevronUp,
  Facebook,
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  Locate,
  Mail,
  Music2,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [openNavbar, setOpenNavbar] = useState<any>({
    aboutus: false,
    portfolio: false,
  });

  const handleOpenNavbar = (menu: "aboutus" | "portfolio") => {
    console.log("navbar", menu);
    setOpenNavbar((prev: any) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <nav
      className="flex w-screen shadow-lg flex-col max-w-[100vw]"
      id="navigationWeb"
    >
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
      <div className="flex items-center gap-20 w-full h-full">
        <Image
          src={`/assets/images/farrasindo-group-logo.png`}
          width={220}
          height={220}
          alt="Farrasindo Logo"
        />
        <ul className="hidden md:flex gap-x-6 mr-10 text-lg font-medium items-center md:flex-wrap">
          <li className="flex gap-2 items-center">
            <Link href="#home" className="hover:text-foreground/80 font-bold">
              Home
            </Link>
          </li>
          <li>
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => handleOpenNavbar("aboutus")}
            >
              <Link href="#" className="hover:text-foreground/80 font-bold">
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
              className={`z-99 absolute bg-white py-2 px-3 w-[200px] rounded-lg shadow-lg transition-all duration-1000 ease-in-out ${
                openNavbar.aboutus ? `block` : `hidden`
              }`}
            >
              <li>
                <Link
                  href="#company-overview"
                  className="text-orange-400 hover:text-orange-600"
                >
                  Company Overview
                </Link>
              </li>
              <li>
                <Link
                  href="#company-history"
                  className="text-orange-400 hover:text-orange-600"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="#our-group"
                  className="text-orange-400 hover:text-orange-600"
                >
                  Our Group
                </Link>
              </li>
              <li>
                <Link
                  href="#our-group"
                  className="text-orange-400 hover:text-orange-600"
                >
                  CSR
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href={`product-service`}
              className="hover:text-foreground/80 font-bold"
            >
              Products and Service
            </Link>
          </li>
          <li>
            <Link
              href={"/portofolio"}
              className="hover:text-foreground/80 font-bold"
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
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
      </div>
    </nav>
  );
}
