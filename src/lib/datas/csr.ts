import { StaticImageData } from "next/image";
import GridImage from "@/asset/images/csr/csr-grid.webp";
import GridImage2 from "@/asset/images/csr/csr-grid(1).webp";
import GridImage3 from "@/asset/images/csr/csr-grid(2).webp";
import bgCareer from "@/asset/images/career/bg-career.jpg";

export type CSRCard = {
  title: string;
  icon: any;
  description: string;
};

export type CSRDetail = {
  title: string;
  description: string;
  points: string[];
};

export type CSRActivity = {
  image: StaticImageData;
  title: string;
  date?: string;
};

const CSRData = {
  banner: bgCareer,

  cards: [
    {
      title: "Employee",
      icon: "👤",
      description:
        "We provide our people with opportunities for growth and development.",
    },
    {
      title: "Society",
      icon: "👥",
      description:
        "We support local communities through various educational initiatives and social programs.",
    },
    {
      title: "Environment",
      icon: "🌿",
      description:
        "We care for the planet through responsible practices and a strong commitment to sustainability.",
    },
  ] as CSRCard[],

  mainSection: {
    title: "CSR (corporate social responsibility)",
    description:
      "As a company that has been operating for over two decades in the concrete machinery industry, Farrasindo Group is committed not only to produce quality and innovation, but also to corporate social responsibility (CSR). Through a program called FarraCare, we initiate sustainable efforts aimed at creating a positive impact on the environment, society, and our employees.",
  },

  details: {
    employee: {
      title: "FARRACARE",
      description:
        "At Farrasindo Group, we believe that business growth must go hand in hand with care and responsibility. Through FARRACARE, we are committed to deliver excellence in our industries while also making a positive impact on the environment, communities, and societies around us.",
      points: [
        "We care for the planet through responsible practices and a strong commitment to sustainability",
      ],
    },
    society: {
      title: "FARRACARE",
      description:
        "At Farrasindo Group, we believe that business growth must go hand in hand with care and responsibility. Through FARRACARE, we are committed to deliver excellence in our industries while also making a positive impact on the environment, communities, and societies around us.",
      points: [
        "We support local communities through social, health, and educational initiatives that create real impact",
      ],
    },
    environment: {
      title: "FARRACARE",
      description:
        "At Farrasindo Group, we believe that business growth must go hand in hand with care and responsibility. Through FARRACARE, we are committed to deliver excellence in our industries while also making a positive impact on the environment, communities, and societies around us.",
      points: [
        "We prioritize a safe, inclusive workplace with opportunities for growth and well-being.",
      ],
    },
  },

  activities: [
    {
      image: GridImage3,
      title: "Santunan Ramadhan untuk Anak Yatim",
      date: "2025-03-20",
    },
    {
      image: GridImage2,
      title: "Aksi Donor Darah Bersama PMI",
      date: "2025-07-15",
    },
    {
      image: GridImage,
      title: "Employee Wellness Day",
      date: "2025-02-14",
    },
  ] as CSRActivity[],
};

export default CSRData;
