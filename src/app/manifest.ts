import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  // Default to Indonesian
  const locale = "id";

  const content = {
    id: {
      name: "Farrasindo Group - Solusi Terpadu Industri Beton",
      short_name: "Farrasindo",
      description:
        "Penyewaan concrete pump & alat berat, beton pracetak, ready mix, sparepart & layanan purna jual terlengkap di Indonesia. 17+ cabang, 20+ tahun pengalaman.",
      shortcuts: [
        {
          name: "Produk & Layanan",
          short_name: "Produk",
          description: "Lihat produk dan layanan Farrasindo",
          url: "/id/product-service",
        },
        {
          name: "Portfolio",
          short_name: "Portfolio",
          description: "Lihat proyek-proyek Farrasindo",
          url: "/id/portfolio",
        },
        {
          name: "Hubungi Kami",
          short_name: "Kontak",
          description: "Hubungi tim Farrasindo",
          url: "/id/contact-us",
        },
      ],
    },
    en: {
      name: "Farrasindo Group - Integrated Concrete Industry Solutions",
      short_name: "Farrasindo",
      description:
        "Concrete pump & heavy equipment rental, precast concrete, ready mix, spare parts & comprehensive after-sales services in Indonesia. 17+ branches, 20+ years experience.",
      shortcuts: [
        {
          name: "Products & Services",
          short_name: "Products",
          description: "View Farrasindo products and services",
          url: "/en/product-service",
        },
        {
          name: "Portfolio",
          short_name: "Portfolio",
          description: "View Farrasindo projects",
          url: "/en/portfolio",
        },
        {
          name: "Contact Us",
          short_name: "Contact",
          description: "Contact Farrasindo team",
          url: "/en/contact-us",
        },
      ],
    },
  };

  const selectedContent = content[locale as keyof typeof content];

  return {
    name: selectedContent.name,
    short_name: selectedContent.short_name,
    description: selectedContent.description,
    start_url: `/${locale}`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#fb923c",
    orientation: "portrait-primary",
    scope: "/",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "construction", "industrial"],
    lang: locale,
    dir: "ltr",
    shortcuts: selectedContent.shortcuts.map((shortcut) => ({
      ...shortcut,
      icons: [{ src: "/android-chrome-192x192.png", sizes: "192x192" }],
    })),
    related_applications: [],
    prefer_related_applications: false,
  };
}
