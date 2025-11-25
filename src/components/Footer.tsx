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

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.1fr_1.4fr]">
          {/* Left: Logo + description + social */}
          <div className="space-y-5">
            <div className="relative h-14 w-56 md:h-20 md:w-72">
              <Image
                src={`/assets/images/farrasindo-group-logo-white.png`}
                alt="Farrasindo Group"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm leading-relaxed text-white/80 max-w-md">
              PT. Farrasindo Perkasa is a core part of the Farrasindo group and
              is the market leader in heavy concrete construction equipment
              rental. Founded in Jakarta in October 2001, more than 20 years as
              an experienced company.
            </p>

            <div className="flex items-center gap-3">
              <SocialIcon href="https://facebook.com">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://tiktok.com">
                <Music2 className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://youtube.com">
                <Youtube className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Middle: Product & Services + Career */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Product &amp; Services</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {[
                  "Concrete Pump",
                  "Mobile Batching Plant",
                  "Stationery Concrete Pump",
                  "Batching Plant",
                  "Farracon Precast",
                  "Sparepart & Service",
                  "Self Loading",
                  "Wheel Loader",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[2px] text-orange-400">&raquo;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Career</h3>
              <button className="mt-3 inline-flex items-center gap-2 text-sm text-white/80 hover:text-orange-400">
                <span className="text-orange-400">&raquo;</span>
                <span>Join Us Now</span>
              </button>
            </div>
          </div>

          {/* Right: Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Information</h3>

            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="font-semibold text-white">Email Address</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a
                    href="mailto:marketing@farrasindo-cp.co.id"
                    className="hover:text-orange-400"
                  >
                    marketing@farrasindo-cp.co.id
                  </a>
                </div>
              </div>

              <div>
                <p className="font-semibold text-white">Office Contact</p>
                <div className="mt-1 flex gap-2">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div className="space-y-0.5">
                    <p>021 – 587 0525</p>
                    <p>0815 7474 7474</p>
                    <p>0815 7545 3564</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-white">Office Address</p>
                <div className="mt-1 flex gap-2">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <p className="leading-relaxed">
                    Jl. Srengseng Raya No.41 A-B, RT.3/RW.8, Srengseng, Kec.
                    Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta
                    11630
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps iframe */}
          <div className="h-52 w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.315234833635!2d106.73947807505854!3d-6.219882293772388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7ea4dfd74eb%3A0x9f53dca556f001b2!2sJl.%20Srengseng%20Raya%20No.41%2C%20RT.3%2FRW.8%2C%20Srengseng%2C%20Kec.%20Kembangan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011630!5e0!3m2!1sen!2sid!4v1708928200000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 shadow-sm transition hover:bg-orange-500 hover:text-white"
      target="_blank"
    >
      {children}
    </Link>
  );
}
