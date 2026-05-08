// components/footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Music2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import { Locale } from "@/lib/datas/global";

export function Footer({ footer, locale }: { footer: any; locale: string }) {
  const productListFooter = footer.product_list_footer ?? {};
  const info = footer.information;

  return (
    <footer className="bg-[#111111] text-white max-w-[120rem] mx-auto overflow-hidden font-urbanist">
      <div className="mx-auto px-6 md:px-12 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr_1.5fr]">
          {/* LEFT – Logo + about + socials */}
          <div className="space-y-5 flex flex-col items-start">
            <div>
              <Image
                src="/assets/images/farrasindo-group-logo-white.png"
                alt="Farrasindo Group"
                width={288}
                height={80}
                className="h-auto w-[80%]"
              />
            </div>

            <div className="text-justify">
              <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
                {footer.about.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <SocialIcon href="https://www.facebook.com/farrasindo">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@farrasindo_group">
                <TikTokIcon className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/farrasindo-perkasa-group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/farrasindo_group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/channel/UCTLUMhIMoWrkgSNelac3aRQ">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* MIDDLE – Product & Services */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                {productListFooter.title}
              </h3>
              <ul className="mt-5 space-y-3 text-base text-gray-300">
                {Array.isArray(productListFooter.list) &&
                  productListFooter.list
                    .filter(
                      (ps: any) => ps.label !== "All" && ps.label !== "Semua"
                    )
                    .map((item: any, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 group">
                        <span className="mt-0.5 text-orange-500 font-bold">&raquo;</span>
                        <Link
                          href={item.link}
                          className="hover:text-orange-500 transition-colors"
                          prefetch={false}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                {locale == "id" ? "Karir" : "Career"}
              </h3>
              <Link
                href={`/${locale}/career`}
                className="mt-4 flex items-center gap-2 text-base text-gray-300 hover:text-orange-500 transition-colors group"
              >
                <span className="text-orange-500 font-bold group-hover:translate-x-1 transition-transform">&raquo;</span>{" "}
                {locale == "id" ? "Bergabung Sekarang" : "Join Us Now"}
              </Link>
            </div>
          </div>

          {/* RIGHT – Information */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold">{info.title}</h3>

            <div className="space-y-6 text-base text-gray-300">
              {/* Emails */}
              <div>
                <p className="font-bold text-white mb-3">Email Address</p>
                {info.emails.map((email: any) => (
                  <div
                    key={email.value}
                    className="mt-1 flex items-center gap-3"
                  >
                    <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                    <a
                      href={`mailto:${email.value}`}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {email.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* Phones */}
              <div>
                <p className="font-bold text-white mb-3">{info.phones.title}</p>

                {info.phones.items.map((phone: any, i: number) => {
                  const lines = phone.value.split(/<br\s*\/?>/i);

                  return (
                    <div key={i} className="mt-1 flex gap-3">
                      <Phone className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />

                      <div className="space-y-0.5 text-base text-gray-300 leading-relaxed">
                        {/* label: WhatsApp, Telepon, dll */}
                        <p className="font-semibold">{phone.label}</p>

                        {/* multi line dari <br> */}
                        {lines.map((line: any, idx: number) => {
                          return phone.label.toLowerCase() === "whatsapp" ? (
                            <Link
                              key={idx}
                              href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                                line.trim().replace(/^08/, "628")
                              )}`}
                              className="hover:text-orange-500 block transition-colors"
                              target="_blank"
                            >
                              {line.trim()}
                            </Link>
                          ) : phone.label.toLowerCase() === "phone" ||
                            phone.label.toLowerCase() === "telepon" ? (
                            <a
                              key={idx}
                              href={`tel:${line
                                .trim()
                                .replace(/^021/, "6221")}`}
                              className="hover:text-orange-500 block transition-colors"
                            >
                              {line.trim()}
                            </a>
                          ) : (
                            <span key={idx}>{line.trim()}</span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Address */}
              <div>
                <p className="font-bold text-white mb-3">Office address</p>
                <div className="mt-1 flex gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{info.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* MAPS */}
          <div className="w-full h-full min-h-[300px]">
            <div className="relative h-full min-h-[300px] w-full rounded-[40px] overflow-hidden hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31731.96517620447!2d106.71794387431642!3d-6.198149100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f77305c654ff%3A0x5c50db3133a6daae!2sPT.%20FARRASINDO%20PERKASA%20-%20HEAD%20OFFICE!5e0!3m2!1sid!2sid!4v1764125369653!5m2!1sid!2sid"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0a] py-6 text-center">
        <p className="text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} Farrasindo Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
    </svg>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 shadow-lg hover:bg-[#f97d00] hover:text-white"
      target="_blank"
    >
      {children}
    </Link>
  );
}
