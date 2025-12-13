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
} from "lucide-react";

import messages from "@/messages/id.json";

export function Footer() {
  const footer = messages.footer;
  const services = footer["product services"];
  const productListFooter = footer.product_list_footer ?? [];
  const info = footer.information;

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-10 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.1fr_1.4fr]">
          {/* LEFT – Logo + about + socials */}
          <div className="space-y-5">
            <div className="relative h-14 w-56 md:h-20 md:w-72">
              <Image
                src="/assets/images/farrasindo-group-logo-white.png"
                alt="Farrasindo Group"
                fill={true}
                className="object-cover w-full h-full"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold">{footer.about.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-md text-justify">
                {footer.about.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <SocialIcon href="#">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="#">
                <Music2 className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="#">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="#">
                <Youtube className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          {/* MIDDLE – Product & Services */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Product & Services</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {productListFooter.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-orange-400">&raquo;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Career</h3>
              <button className="mt-3 flex items-center gap-2 text-sm text-white/80 hover:text-orange-400">
                <span className="text-orange-400">&raquo;</span> Join Us Now
              </button>
            </div>
          </div>

          {/* RIGHT – Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{info.title}</h3>

            <div className="space-y-4 text-sm text-white/80">
              {/* Emails */}
              <div>
                <p className="font-semibold text-white">Email Address</p>
                {info.emails.map((email) => (
                  <div
                    key={email.value}
                    className="mt-1 flex items-center gap-2"
                  >
                    <span className="h-8 w-8 flex items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                      <Mail className="h-4 w-4" />
                    </span>
                    <a
                      href={`mailto:${email.value}`}
                      className="hover:text-orange-400"
                    >
                      {email.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* Phones */}
              <div>
                <p className="font-semibold text-white">{info.phones.title}</p>

                {info.phones.items.map((phone, i) => {
                  const lines = phone.value.split(/<br\s*\/?>/i);

                  return (
                    <div key={i} className="mt-1 flex gap-2">
                      <span className="mt-1 h-8 w-8 flex items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                        <Phone className="h-4 w-4" />
                      </span>

                      <div className="space-y-0.5 text-sm text-white/80 leading-relaxed">
                        {/* label: WhatsApp, Telepon, dll */}
                        <p className="font-semibold">{phone.label}</p>

                        {/* multi line dari <br> */}
                        {lines.map((line, idx) => (
                          <p key={idx}>{line.trim()}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Address */}
              <div>
                <div className="mt-1 flex gap-2">
                  <span className="mt-1 h-8 w-8 flex items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <p className="leading-relaxed">{info.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* MAPS */}
          <div className="w-full flex justify-center">
            <div className="relative h-72 md:h-96  w-full rounded-lg overflow-hidden">
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

      <div className="border-t border-white/10 py-3 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Farrasindo Group. All rights reserved.
      </div>
    </footer>
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
      className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 text-white/80 shadow-sm transition hover:bg-orange-500 hover:text-white"
      target="_blank"
    >
      {children}
    </Link>
  );
}
