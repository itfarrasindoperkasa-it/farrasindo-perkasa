import { StaticImageData } from "next/image";

export type Branch = {
  id: string;
  company: string;
  name: string;
  address: string;
  googleMapsLink: string;
  abbreviation: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type ContactInfo = {
  hotline: string;
  headOffice: {
    address: string;
    phone: string;
    fax: string;
  };
  email: string;
  whatsapp: string;
};

export const contactInfo: ContactInfo = {
  hotline: "0815-7545-3564",
  headOffice: {
    address: "Jl. Raya Srengseng No. 41 A-B, Kembangan 11630",
    phone: "021 – 587 0525",
    fax: "021 – 587 0538",
  },
  email: "marketing@farrasindo-cp.co.id",
  whatsapp: "6289643418173",
};

export const branches: Branch[] = [
  {
    id: "fp-meruya",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Meruya Branch",
    address: "Srengseng, Kembangan, West Jakarta City, Jakarta",
    googleMapsLink:
      "https://www.google.com/maps?q=-6.197423941874169,106.7561193",
    coordinates: { lat: -6.197423941874169, lng: 106.7561193 },
  },
  {
    id: "fp-sentul",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Sentul Ranch",
    address:
      "Jl. Bina Marga No. 76 RT 003 / 005, Sanja, Kec. Citeureup, Kabupaten Bogor, Jawa Barat 16810",
    googleMapsLink: "https://www.google.com/maps?q=-6.5004403,106.8683186",
    coordinates: { lat: -6.5004403, lng: 106.8683186 },
  },
  {
    id: "fp-belanga",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Belanga Branch",
    address: "QFWF+4PR, Pasir Bolang, Tigaraksa, Tangerang Regency, Banten",
    googleMapsLink: "https://www.google.com/maps?q=-6.2046346,106.4742541",
    coordinates: { lat: -6.2046346, lng: 106.4742541 },
  },
  {
    id: "fp-cikarang",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Cikarang Branch",
    address:
      "Jl. Gemalajaya No.111, Pasirarja, Cikarang Sel, Kabupaten Bekasi, Jawa Barat 17530",
    googleMapsLink: "https://www.google.com/maps?q=-6.3188659,107.1434337",
    coordinates: { lat: -6.3188659, lng: 107.1434337 },
  },
  {
    id: "fp-jatiasih",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Jatiasih Branch",
    address:
      "PXR4+7WM, Jl. Cikunir Raya, RT.013/RW.012, Jaka Mulya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17146",
    googleMapsLink: "https://www.google.com/maps?q=-6.2592639,106.9572703",
    coordinates: { lat: -6.2592639, lng: 106.9572703 },
  },
  {
    id: "fp-bandung",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Bandung Branch",
    address:
      "Jl. Gedebage Selatan No.165, Cisaranten Kidul, Kec. Gedebage, Kota Bandung, Jawa Barat 40295",
    googleMapsLink: "https://www.google.com/maps?q=-6.953604,107.6868523",
    coordinates: { lat: -6.953604, lng: 107.6868523 },
  },
  {
    id: "fp-cirebon",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Cirebon Branch",
    address:
      "Jl. Mundupesisir, Mundupesisir, Kec. Mundu, Kabupaten Cirebon, Jawa Barat 45173",
    googleMapsLink: "https://www.google.com/maps?q=-6.7590489,108.5950413",
    coordinates: { lat: -6.7590489, lng: 108.5950413 },
  },
  {
    id: "fp-semarang",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Semarang Branch",
    address:
      "Jl. Semarang - Demak No.KM.8, Trimulyo, Banjardowo, Kec. Genuk, Kabupaten Demak, Jawa Tengah 50117",
    googleMapsLink: "https://www.google.com/maps?q=-6.9473098,110.4921044",
    coordinates: { lat: -6.9473098, lng: 110.4921044 },
  },
  {
    id: "fp-yogyakarta",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Yogyakarta Branch",
    address:
      "Jl. Berbah - Kalasan, Karang, Kalitirto, Kec. Berbah, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283",
    googleMapsLink: "https://www.google.com/maps?q=-7.7934434,110.4583884",
    coordinates: { lat: -7.7934434, lng: 110.4583884 },
  },
  {
    id: "fp-solo",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Solo Branch",
    address:
      "Jalan Jogja - Solo Kraprak RT.01/RW07 Kartasura, Dusun III, Pucangan, Kabupaten Sukoharjo, Jawa Tengah 57168",
    googleMapsLink: "https://www.google.com/maps?q=-7.5650498,110.7226363",
    coordinates: { lat: -7.5650498, lng: 110.7226363 },
  },
  {
    id: "fp-kediri",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Kediri Branch",
    address: "Gempolan, Baye, Kayen Kidul, Kediri Regency, East Java",
    googleMapsLink: "https://www.google.com/maps?q=-7.7391185,112.0443738",
    coordinates: { lat: -7.7391185, lng: 112.0443738 },
  },
  {
    id: "fp-pool4",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - POOL 4 Branch",
    address:
      "Jl. Srengseng Raya, RT.4/RW.6, Srengseng, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630",
    googleMapsLink: "https://www.google.com/maps?q=-6.2131684,106.7595977",
    coordinates: { lat: -6.2131684, lng: 106.7595977 },
  },
  {
    id: "fp-pool5",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - POOL 5 Branch",
    address:
      "RT.3/RW.4, Meruya Utara, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11620",
    googleMapsLink: "https://www.google.com/maps?q=-6.2043943,106.7371067",
    coordinates: { lat: -6.2043943, lng: 106.7371067 },
  },
  {
    id: "fp-surabaya",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Surabaya Branch",
    address: "Prasungtani, Prasung, Buduran, Sidoarjo Regency, East Java 61252",
    googleMapsLink: "https://www.google.com/maps?q=-7.4181106,112.7393345",
    coordinates: { lat: -7.4181106, lng: 112.7393345 },
  },
  {
    id: "fp-malang",
    company: "PT Farrasindo Perkasa",
    abbreviation: "FP",
    name: "PT Farrasindo Perkasa - Malang Branch",
    address:
      "Jl Perum An-Nur Regency, Sonosari, Kebonagung, Kec. Pakisaji, Kabupaten Malang, Jawa Timur 65162",
    googleMapsLink: "https://www.google.com/maps?q=-8.0345392,112.6102968",
    coordinates: { lat: -8.0345392, lng: 112.6102968 },
  },
  {
    id: "fbi-bsd",
    company: "PT Fresh Beton Indonesia",
    abbreviation: "FBI",
    name: "PT Fresh Beton Indonesia",
    address:
      "Jl. Otong Enjos, Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten 15310",
    googleMapsLink: "https://www.google.com/maps?q=-6.3130821,106.6993586",
    coordinates: { lat: -6.3130821, lng: 106.6993586 },
  },
  {
    id: "fbi-cjr",
    company: "PT Fresh Beton Indonesia",
    abbreviation: "FBI",
    name: "PT Fresh Beton Indonesia",
    address:
      "Jl. Lkr. Selatan No.43211, Sukamaju, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43211",
    googleMapsLink: "https://www.google.com/maps?q=-6.8404103,107.148328",
    coordinates: { lat: -6.8404103, lng: 107.148328 },
  },
  {
    id: "fbi-skbm",
    company: "PT Fresh Beton Indonesia",
    abbreviation: "FBI",
    name: "PT Fresh Beton Indonesia",
    address: "Neglasari, Nyalindung, Sukabumi Regency, West Java 43196",
    googleMapsLink: "https://www.google.com/maps?q=-6.9790487,106.9601745",
    coordinates: { lat: -6.9790487, lng: 106.9601745 },
  },
  {
    id: "fbi-ckmbng",
    company: "PT Fresh Beton Indonesia",
    abbreviation: "FBI",
    name: "PT Fresh Beton Indonesia",
    address: "2QW8+M54, Cimanggu, Cikembar, Sukabumi Regency, West Java",
    googleMapsLink: "https://www.google.com/maps?q=-6.9533738,106.7628779",
    coordinates: { lat: -6.9533738, lng: 106.7628779 },
  },
  {
    id: "fpi-blrj",
    company: "PT Farracon Precast Industri",
    abbreviation: "FPI",
    name: "PT Farracon Precast Industri",
    address: "Pasir Bolang, Kec. Tigaraksa, Kabupaten Tangerang, Banten 15720",
    googleMapsLink: "https://www.google.com/maps?q=-6.2046708,106.1859921",
    coordinates: { lat: -6.2046708, lng: 106.1859921 },
  },
];

export default branches;
