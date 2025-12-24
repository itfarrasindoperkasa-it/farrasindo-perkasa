import { Locale } from "./global";
import OurPartnerData from "./our_partner";

export interface Company {
  id: number;
  name: string;
  logo: any;
  link: string;
  description: string;
}

const companiesData = {
  id: [
    {
      abbreviation: "fp",
      name: "PT Farrasindo Perkasa (FP)",
      logo: OurPartnerData[6], //fp
      link: "https://farrasindo.co.id",
      description:
        "PT Farrasindo Perkasa (FP) adalah perusahaan jasa sewa dan penjualan alat berat konstruksi, dengan spesialisasi di bidang Concrete Pump, Batching Plant, serta berbagai Mesin Beton lainnya.",
    },
    {
      abbreviation: "iji",
      name: "PT Inti Jaya Industri",
      logo: OurPartnerData[4],
      link: "https://intijaya-parts.com",
      description:
        "PT Inti Jaya Industri adalah perusahaan saudara dari Farrasindo Group. Kami fokus pada bidang Spare Parts dan After Sales Service untuk Mesin Beton, mendukung kelancaran operasional konstruksi industri Anda.",
    },
    {
      abbreviation: "citipump",
      name: "CITI PUMP",
      logo: OurPartnerData[1],
      link: "https://citipump.co.id",
      description:
        "CITI PUMP fokus menyediakan solusi alat berat perbetonan untuk daerah perkotaan, dimana kebutuhan pembangunan yang tinggi namun tidak diimbangi dengan luas akses jalan yang mampu untuk melewati alat berat.",
    },
    {
      abbreviation: "citicrane",
      name: "PT Citi Crane Perkasa",
      logo: OurPartnerData[0],
      link: "https://citicrane.co.id",
      description:
        "PT Citi Crane Perkasa adalah perusahaan rental alat berat di Indonesia dengan pengalaman luas di bidang pengangkutan dan transportasi berat. Didukung armada yang terus berkembang, kami melayani berbagai industri dengan fokus pada efisiensi, keselamatan, dan efisiensi.",
    },
    {
      abbreviation: "fbi",
      name: "PT Fresh Beton Indonesia",
      logo: OurPartnerData[2], // fbi
      link: "https://freshbeton.co.id",
      description:
        "PT Fresh Beton Indonesia adalah perusahaan yang bergerak di bidang beton siap pakai (readymix) dan beton pracetak (precast), menyediakan produk beton berkualitas untuk berbagai kebutuhan proyek konstruksi.",
    },
    {
      abbreviation: "gbp",
      name: "PT Gunung Bumi Perkasa",
      logo: OurPartnerData[3],
      link: "https://gbp.co.id",
      description:
        "PT Gunung Bumi Perkasa merupakan perusahaan pertambangan yang berdiri sejak tahun 2016. Produk utama kami meliputi batu Andesit, Abu Batu, Split, Base Course, Screening, dan Macadam, yang digunakan sebagai bahan baku beton berkualitas tinggi dan aspal.",
    },
    {
      abbreviation: "fpi",
      name: "PT Farracon Precast Indonesia",
      logo: OurPartnerData[7], // fpi
      link: "https://farraconprecast.co.id",
      description:
        "PT. Farracon Precast Indonesia memproduksi beton pracetak berkualitas tinggi untuk memenuhi kebutuhan pelanggan seperti u-dict, road barrier, grc dll , didukung oleh pengalaman 15 tahun di bidang konstruksi dan alat berat.",
    },
    {
      abbreviation: "simi",
      name: "Simi",
      logo: OurPartnerData[5], // simi
      link: "https://simi.co.id",
      description:
        "Simi adalah sebuah tempat yang menyediakan layanan pijat refleksi dan spa. Dengan fokus pada relaksasi, Simi menawarkan berbagai teknik pijat tradisional yang disesuaikan dengan kebutuhan individu, bertujuan untuk memberikan pengalaman relaksasi yang mendalam dan menyegarkan bagi para pelanggan.",
    },
  ],
  en: [
    {
      abbreviation: "fp",
      name: "PT Farrasindo Perkasa (FP)",
      logo: OurPartnerData[6],
      link: "https://farrasindo.co.id",
      description:
        "PT Farrasindo Perkasa (FP) is a company specializing in the rental and sale of construction heavy equipment, with expertise in Concrete Pumps, Batching Plants, and various other Concrete Machines.",
    },
    {
      abbreviation: "iji",
      name: "PT Inti Jaya Industri",
      logo: OurPartnerData[4],
      link: "https://intijaya-parts.com",
      description:
        "PT Inti Jaya Industri is a sister company of Farrasindo Group. We focus on Spare Parts and After Sales Service for Concrete Machines, supporting the smooth operation of your industrial construction projects.",
    },
    {
      abbreviation: "citipump",
      name: "CITI PUMP",
      logo: OurPartnerData[1],
      link: "https://citipump.co.id",
      description:
        "CITI PUMP focuses on providing concrete heavy equipment solutions for urban areas, where high construction demand is not matched by road access capable of accommodating heavy equipment.",
    },
    {
      abbreviation: "citicrane",
      name: "PT Citi Crane Perkasa",
      logo: OurPartnerData[0],
      link: "https://citicrane.co.id",
      description:
        "PT Citi Crane Perkasa is a heavy equipment rental company in Indonesia with extensive experience in heavy transport and hauling. Supported by a continuously growing fleet, we serve various industries with a focus on efficiency, safety, and effectiveness.",
    },
    {
      abbreviation: "fbi",
      name: "PT Fresh Beton Indonesia",
      logo: OurPartnerData[2],
      link: "https://freshbeton.co.id",
      description:
        "PT Fresh Beton Indonesia is a company engaged in ready-mix and precast concrete, providing quality concrete products for various construction project needs.",
    },
    {
      abbreviation: "gbp",
      name: "PT Gunung Bumi Perkasa",
      logo: OurPartnerData[3],
      link: "https://gbp.co.id",
      description:
        "PT Gunung Bumi Perkasa is a mining company established in 2016. Our main products include Andesite stone, stone dust, split, base course, screening, and macadam, used as raw materials for high-quality concrete and asphalt.",
    },
    {
      abbreviation: "fpi",
      name: "PT Farracon Precast Indonesia",
      logo: OurPartnerData[7],
      link: "https://farraconprecast.co.id",
      description:
        "PT Farracon Precast Indonesia produces high-quality precast concrete to meet customer needs such as u-ditch, road barriers, GRC, etc., supported by 15 years of experience in construction and heavy equipment.",
    },
    {
      abbreviation: "simi",
      name: "Simi",
      logo: OurPartnerData[5],
      link: "https://simi.co.id",
      description:
        "Simi is a place that provides reflexology massage and spa services. Focusing on relaxation, Simi offers various traditional massage techniques tailored to individual needs, aiming to provide a deep and refreshing relaxation experience for customers.",
    },
  ],
};

export const CompaniesData = ({ locale }: { locale: Locale }): Company[] => {
  return companiesData[locale].map((company, index) => ({
    id: index + 1,
    ...company,
  }));
};

export default CompaniesData;
