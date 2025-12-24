import { Metadata } from "next";
import { Locale } from "@/lib/datas/global";
import ProductServiceClient from "@/components/product/ProductServiceClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://farrasindo-cp.co.id";

  if (locale === "id") {
    return {
      title: "Produk & Layanan - Concrete Pump, Alat Berat, Moli",
      description:
        "Jelajahi rangkaian produk lengkap Farrasindo: Concrete Pump (Schwing, IHI, Kyokuto), Stationery Pump, Moli, Truck Mixer, dan solusi konstruksi lainnya. Bandingkan spesifikasi produk.",
      openGraph: {
        title: "Produk & Layanan - Farrasindo Group",
        description:
          "Concrete Pump, Stationery Pump, Moli, Truck Mixer dan alat berat berkualitas untuk proyek konstruksi Anda.",
        url: `${baseUrl}/id/product-service`,
      },
      alternates: {
        canonical: `${baseUrl}/id/product-service`,
      },
    };
  }

  return {
    title: "Products & Services - Concrete Pump, Heavy Equipment, Moli",
    description:
      "Explore Farrasindo's complete product range: Concrete Pump (Schwing, IHI, Kyokuto), Stationery Pump, Moli, Truck Mixer, and other construction solutions. Compare product specifications.",
    openGraph: {
      title: "Products & Services - Farrasindo Group",
      description:
        "Concrete Pump, Stationary Pump, Moli, Truck Mixer and quality heavy equipment for your construction projects.",
      url: `${baseUrl}/en/product-service`,
    },
    alternates: {
      canonical: `${baseUrl}/en/product-service`,
    },
  };
}

export default async function ProductServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await import(`@/messages/${locale}.json`);

  return <ProductServiceClient messages={messages.default} locale={locale} />;
}
