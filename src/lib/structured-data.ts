/**
 * JSON-LD Structured Data for Farrasindo Group
 * Helps search engines understand the business better
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Farrasindo Group",
  legalName: "PT Farrasindo",
  url: "https://farrasindo-cp.co.id",
  logo: "https://farrasindo-cp.co.id/logo.png",
  foundingDate: "2001",
  description:
    "Perusahaan terkemuka di Indonesia yang menyediakan solusi terpadu industri beton: penyewaan concrete pump & alat berat, beton pracetak, ready mix, sparepart, dan layanan purna jual.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Meruya Ilir Raya",
    addressLocality: "Jakarta Barat",
    addressRegion: "DKI Jakarta",
    postalCode: "11620",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-21-5870525",
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"],
  },
  sameAs: [
    "https://www.facebook.com/farrasindo",
    "https://www.instagram.com/farrasindo_group",
    "https://www.linkedin.com/company/farrasindo-perkasa-group",
    "https://www.tiktok.com/@farrasindo_group",
    "https://www.youtube.com/channel/UCTLUMhIMoWrkgSNelac3aRQ",
  ],
  subOrganization: [
    {
      "@type": "Organization",
      name: "Farracon Precast Industri",
      description: "Produsen beton pracetak berkualitas tinggi",
    },
    {
      "@type": "Organization",
      name: "Intijaya Industri",
      description:
        "Layanan purna jual, sparepart concrete pump, service, dan teknisi",
    },
    {
      "@type": "Organization",
      name: "Fresh Beton Indonesia",
      description:
        "Penyedia ready mix, truck mixer, dan beton cair berkualitas",
    },
  ],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Concrete Pump Rental",
  provider: {
    "@type": "Organization",
    name: "Farrasindo Group",
    url: "https://farrasindo-cp.co.id",
  },
  areaServed: [
    { "@type": "City", name: "Jakarta" },
    { "@type": "City", name: "Surabaya" },
    { "@type": "City", name: "Bandung" },
    { "@type": "City", name: "Semarang" },
    { "@type": "City", name: "Yogyakarta" },
    { "@type": "City", name: "Solo" },
    { "@type": "City", name: "Malang" },
    { "@type": "City", name: "Kediri" },
    { "@type": "City", name: "Cirebon" },
    { "@type": "City", name: "Tangerang" },
    { "@type": "City", name: "Bekasi" },
    { "@type": "City", name: "Cikarang" },
    { "@type": "City", name: "Sukabumi" },
    { "@type": "City", name: "Cianjur" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://farrasindo-cp.co.id",
  name: "Farrasindo Group",
  image: "https://farrasindo-cp.co.id/logo.png",
  url: "https://farrasindo-cp.co.id",
  telephone: "+62-21-5870525",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Meruya Ilir Raya",
    addressLocality: "Jakarta Barat",
    addressRegion: "DKI Jakarta",
    postalCode: "11620",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.1944,
    longitude: 106.8229,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/farrasindo",
    "https://www.instagram.com/farrasindo_group",
    "https://www.linkedin.com/company/farrasindo-perkasa-group",
    "https://www.tiktok.com/@farrasindo_group",
    "https://www.youtube.com/channel/UCTLUMhIMoWrkgSNelac3aRQ",
  ],
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const productSchema = (product: {
  name: string;
  description: string;
  image: string;
  brand: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  brand: {
    "@type": "Brand",
    name: product.brand,
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "IDR",
  },
});
