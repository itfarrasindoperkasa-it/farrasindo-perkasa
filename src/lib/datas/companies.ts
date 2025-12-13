import OurPartnerData from "./our_partner";

export interface Company {
  id: number;
  name: string;
  logo: any;
  link: string;
  description: string;
}

const companiesData = [
  {
    name: "PT Farrasindo Perkasa (FP)",
    logo: OurPartnerData[2],
    link: "https://farrasindo.co.id",
    description:
      "PT Farrasindo Perkasa (FP) adalah perusahaan jasa sewa dan penjualan alat berat konstruksi, dengan spesialisasi di bidang Concrete Pump, Batching Plant, serta berbagai Mesin Beton lainnya.",
  },
  {
    name: "PT Inti Jaya Industri",
    logo: OurPartnerData[4],
    link: "https://intijaya.co.id",
    description:
      "PT Inti Jaya Industri adalah perusahaan saudara dari Farrasindo Group. Kami fokus pada bidang Spare Parts dan After Sales Service untuk Mesin Beton, mendukung kelancaran operasional konstruksi industri Anda.",
  },
  {
    name: "CITI PUMP",
    logo: OurPartnerData[1],
    link: "https://citipump.co.id",
    description:
      "CITI PUMP fokus menyediakan solusi alat berat perbetonan untuk daerah perkotaan, dimana kebutuhan pembangunan yang tinggi namun tidak diimbangi dengan luas akses jalan yang mampu untuk melewati alat berat.",
  },
  {
    name: "PT Citi Crane Perkasa",
    logo: OurPartnerData[0],
    link: "https://citicrane.co.id",
    description:
      "PT Citi Crane Perkasa adalah perusahaan rental alat berat di Indonesia dengan pengalaman luas di bidang pengangkutan dan transportasi berat. Didukung armada yang terus berkembang, kami melayani berbagai industri dengan fokus pada efisiensi, keselamatan, dan efisiensi.",
  },
  {
    name: "PT Fresh Beton Indonesia",
    logo: OurPartnerData[5],
    link: "https://freshbeton.co.id",
    description:
      "PT Fresh Beton Indonesia adalah perusahaan yang bergerak di bidang beton siap pakai (readymix) dan beton pracetak (precast), menyediakan produk beton berkualitas untuk berbagai kebutuhan proyek konstruksi.",
  },
  {
    name: "PT Gunung Bumi Perkasa",
    logo: OurPartnerData[3],
    link: "https://gbp.co.id",
    description:
      "PT Gunung Bumi Perkasa merupakan perusahaan pertambangan yang berdiri sejak tahun 2016. Produk utama kami meliputi batu Andesit, Abu Batu, Split, Base Course, Screening, dan Macadam, yang digunakan sebagai bahan baku beton berkualitas tinggi dan aspal.",
  },
  {
    name: "PT Farracon Precast Indonesia",
    logo: OurPartnerData[6],
    link: "https://farraconprecast.co.id",
    description:
      "PT. Farracon Precast Indonesia memproduksi beton pracetak berkualitas tinggi untuk memenuhi kebutuhan pelanggan seperti u-dict, road barrier, grc dll , didukung oleh pengalaman 15 tahun di bidang konstruksi dan alat berat.",
  },
  {
    name: "Simi",
    logo: OurPartnerData[7],
    link: "https://simi.co.id",
    description:
      "Simi adalah sebuah tempat yang menyediakan layanan pijat refleksi dan spa. Dengan fokus pada relaksasi, Simi menawarkan berbagai teknik pijat tradisional yang disesuaikan dengan kebutuhan individu, bertujuan untuk memberikan pengalaman relaksasi yang mendalam dan menyegarkan bagi para pelanggan.",
  },
];

export const CompaniesData: Company[] = companiesData.map((company, index) => ({
  id: index + 1,
  ...company,
}));

export default CompaniesData;
