"use client";
import Image from "next/image";
import AboutData from "@/lib/datas/about";
import OurPartnerData from "@/lib/datas/our_partner";
import { useState } from "react";
import type { StaticImageData } from "next/image";

type Company = {
  name: string;
  logo: string | StaticImageData;
  link: string;
  description: string;
};
type TimelineCardProps = {
  year: string;
  title: string;
  description: string;
  image: string | StaticImageData;
};

function CompanyCards({ companies }: { companies: Company[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
      {companies.map((company, idx) => (
        <div
          key={company.name}
          className="flex flex-col items-center justify-center rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-shadow relative"
        >
          <a
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mb-3 block"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={200}
              height={100}
              className="object-cover"
            />
          </a>

          {/* <p className="text-[11px] sm:text-xs text-center text-gray-700 font-semibold mb-1">
            {company.name}
          </p> */}

          {openIdx === idx && (
            <p className="text-[10px] sm:text-xs text-justify text-gray-600 mb-2">
              {company.description}
            </p>
          )}

          <button
            onClick={() => handleToggle(idx)}
            className="mt-2 w-6 h-6 flex items-center justify-center rounded border border-gray-300 bg-white text-orange-400 hover:bg-orange-100 focus:outline-none"
            aria-label={openIdx === idx ? "Tutup deskripsi" : "Lihat deskripsi"}
          >
            {openIdx === idx ? <span>▲</span> : <span>▼</span>}
          </button>
        </div>
      ))}
    </div>
  );
}

const groupCompanies: Company[] = [
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

const timeline = [
  {
    year: "2001",
    title: "PT Farrasindo Perkasa",
    description:
      "Bapak H. Encep Suherman mendirikan PT. Farrasindo Perkasa sebagai pendirinya.",
    image: AboutData[3],
  },
  {
    year: "2002",
    title: "Unit Pompa Beton Pertama",
    description:
      "F01 menandai debut pompa beton yang dirancang dan diproduksi oleh Farrasindo Group.",
    image: AboutData[4],
  },
  {
    year: "2003",
    title: "Kantor Pusat Pertama",
    description:
      "Kantor Pusat Farrasindo TAHUN 2001 - 2008 yang sekarang menjadi pool 2 di depan Kantor Pusat Saat Ini.",
    image: AboutData[5],
  },
  {
    year: "2004",
    title: "Kepemimpinan",
    description:
      "Briefing dari Bapak Encep Suherman kepada crew sebelum melaksanakan tugas di proyek",
    image: AboutData[6],
  },
  {
    year: "2007",
    title: "PT. Farrasindo Perkasa",
    description:
      "Foto bersama setelah silaturahmi menjelang Idul Fitri tahun 2007 di lahan yang akan menjadi kantor pusat saat ini",
    image: AboutData[7],
  },
  {
    year: "2008",
    title: "Kantor Pusat Baru",
    description:
      "Pembangunan kantor pusat selesai pada tahun 2008, berlokasi di Srengseng, Jakarta.",
    image: AboutData[8],
  },
  {
    year: "2011",
    title: "Kelahiran Citi Pump",
    description:
      "PT. CITI PUMP INDONESIA didirikan dan bergerak di bidang permesinan beton",
    image: AboutData[9],
  },
  {
    year: "2013",
    title: "Kelahiran Inti Jaya",
    description:
      "Didirikan pada tahun 2013, PT. Inti Jaya Industri dari Farrasindo Group berfokus pada Suku Cadang Mesin Beton.",
    image: AboutData[10],
  },
  {
    year: "2014",
    title: "Kelahiran Pompa Batch",
    description:
      "Mesin beton pertama dari Farrasindo Group menggabungkan Truk Mixer, Pompa Beton Stationery, dan Pabrik Batching.",
    image: AboutData[11],
  },
  {
    year: "2014",
    title: "Kelahiran Gunung Bumi",
    description:
      "PT. Gunung Bumi Perkasa, sebuah perusahaan pertambangan, didirikan pada tanggal 4 November 2014 di Sukabumi.",
    image: AboutData[12],
  },
  {
    year: "2015",
    title: "Kelahiran Beton Segar",
    description:
      "27 Juni 2016 Farrasindo Mendirikan PT. Fresh Beton Indonesia untuk bersinergi dalam konstruksi",
    image: AboutData[13],
  },
  {
    year: "2016",
    title: "Kelahiran Citi Crane",
    description:
      "8 Desember 2015 PT. CITI CRANE PERKASA lahir untuk memperkuat Grup farrasindo",
    image: AboutData[14],
  },
  {
    year: "2022",
    title: "Pompa Mini Citi MCP 8E - 22/4",
    description:
      "PT. FARRACON PRECAST INDUSTRI merupakan perusahaan yang bergerak di bidang produksi dan distribusi produk beton pracetak.",
    image: AboutData[15],
  },
  {
    year: "2023",
    title: "Kelahiran Farracon Precast",
    description:
      "PT. FARRACON PRECAST INDUSTRI merupakan perusahaan yang bergerak di bidang produksi dan distribusi produk beton pracetak.",
    image: AboutData[16],
  },
];

export default function AboutUsPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="relative w-full h-[220px] sm:h-[260px] md:h-[500px] overflow-hidden">
        <Image
          src={AboutData[0]}
          alt="Farrasindo Group"
          fill
          className="object-cover"
          priority
        />
      </section>
      <div className="flex justify-center items-center my-10 gap-x-2">
        <h1 className="text-lg sm:text-xl md:text-4xl uppercase tracking-wide font-semibold">
          Gambaran Umum Perusahaan
        </h1>
      </div>
      {/* IKHTISAR PERUSAHAAN */}
      <section className="w-full py-10 sm:py-14 md:py-16">
        <div className="max-w-360 mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
            {/* Gambar */}
            <div className="relative w-full md:w-2/3 h-[220px] sm:h-[300px] md:h-[430px]">
              <Image
                src={AboutData[1]}
                alt="PT Farrasindo Perkasa"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            {/* Card Text */}
            <div
              className="
                w-full md:w-1/2 bg-slate-200 border border-slate-300 
                p-5 sm:p-6 md:p-8 rounded-xl shadow-sm
                text-sm sm:text-base leading-relaxed
                md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2
              "
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500 mb-3">
                PT Farrasindo Perkasa
              </h2>

              <p className="mb-3">
                <span className="text-white bg-orange-400 w-fit mr-2 px-1 rounded">
                  PT Farrasindo Perkasa
                </span>
                didirikan dan dibangun untuk menjawab tantangan dan tuntutan
                kota-kota besar di Indonesia yang memiliki keterbatasan lahan
                untuk membangun dan menyediakan fasilitas dan infrastruktur
                perkantoran, serta perdagangan di satu sisi, dan perumahan bagi
                penduduk di sisi lain.
              </p>

              <p>
                Penerapan otonomi daerah dipandang sebagai jendela dan pintu
                untuk melihat kota-kota besar di dunia dengan karakteristik umum
                gedung pencakar langit yang semakin tinggi, pusat perbelanjaan
                modern, dan pembangunan rumah berbasis beton siap pakai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TAB HEADER (statik tampak seperti di desain) */}
      <section className="border-t border-b border-gray-200">
        <div className="max-w-360 mx-auto px-4 sm:px-6">
          <div className="flex justify-between text-xs sm:text-sm md:text-base">
            <button className="px-4 py-3 border-b-2 border-orange-500 text-orange-500 font-semibold">
              Kelompok
            </button>

            <button className="px-4 py-3 border-b-2 border-transparent hover:border-orange-300 hover:text-orange-500 transition-colors">
              Mengapa Memilih Kami
            </button>

            <button className="px-4 py-3 border-b-2 border-transparent hover:border-orange-300 hover:text-orange-500 transition-colors">
              Visi &amp; Misi
            </button>

            <button className="px-4 py-3 border-b-2 border-transparent hover:border-orange-300 hover:text-orange-500 transition-colors">
              Sejarah
            </button>
          </div>
        </div>
      </section>

      {/* Kelompok COMPANIES */}
      <section className="w-full py-8 sm:py-10">
        <div className="max-w-360 mx-auto px-4 sm:px-6">
          <div className="flex items-center mb-5 gap-x-2">
            <span className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide font-semibold">
              Farrasindo
            </span>
            <h3 className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-white p-2 rounded text-center bg-orange-400 ">
              Group
            </h3>
          </div>
          <p className="text-xs sm:text-sm mb-6 text-gray-600">
            Lebih dari 2 dekade Farrasindo Group lahir untuk turut serta
            membangun Indonesia, wujud kami adalah membangun lini bisnis mulai
            dari sektor Pertambangan, Mesin Beton dan Crane serta Sparepart dan
            jasa, semuanya itu berkelindan dengan kebutuhan dunia konstruksi
            berkolaborasi dari tiap area lini bisnis kami dari hulu sampai hilir
            untuk dapat mempersiapkan kebutuhan konstruksi masyarakat Indonesia.
          </p>

          <CompanyCards companies={groupCompanies} />
        </div>
      </section>

      {/* DARI PENDIRI KAMI + FOTO CEO */}
      <section className="w-full bg-orange-400 py-10 sm:py-14">
        <div className="max-w-360 mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-10 bg-white p-6 sm:p-8 md:p-10 shadow-md">
            {/* Text */}
            <div className="w-full md:w-3/5 text-sm sm:text-base leading-relaxed text-justify">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-orange-600">
                DARI PENDIRI KAMI
              </h3>
              <p className="mb-3">
                Kami bangga dengan perjalanan yang telah membawa kami dari awal
                yang sederhana hingga menjadi salah satu perusahaan terkemuka di
                Indonesia dalam bidang peralatan dan jasa konstruksi. Semuanya
                berawal dari satu unit pompa beton, komitmen untuk bekerja
                keras, dan impian untuk meningkatkan efisiensi konstruksi di
                seluruh negeri. Seiring waktu, melalui ketekunan dan dedikasi
                terhadap keunggulan, kami mengembangkan Farrasindo Group menjadi
                armada lebih dari 300 unit, melayani proyek-proyek di berbagai
                industri.
              </p>
              <p className="mb-3">
                Perusahaan kami telah memperluas layanannya, dan kini kami
                terlibat dalam berbagai sektor, mulai dari penyewaan alat berat
                hingga produksi material konstruksi seperti beton siap pakai dan
                beton pracetak. Setiap langkah pertumbuhan kami didorong oleh
                prinsip inti yang sama—integritas, keandalan, dan semangat untuk
                membantu klien kami mencapai tujuan konstruksi mereka.
              </p>
              <p className="mb-3">
                Impian kami adalah menyediakan peralatan dan layanan yang
                dibutuhkan setiap pembangun, kontraktor, dan pengembang di
                Indonesia untuk mewujudkan visi mereka—kapan pun dan di mana pun
                mereka membutuhkannya. Di Farrasindo Group, kami berkomitmen
                untuk mewujudkan visi ini, membantu membangun Indonesia yang
                lebih kuat dan lebih terhubung melalui dedikasi dan layanan
                kami.
              </p>

              <div className="mt-4">
                <p className="font-semibold">
                  Terima kasih telah menjadi bagian dari perjalanan ini bersama
                  kami.
                </p>
                <p className="font-semibold text-orange-700">
                  Sungguh-sungguh,
                  <br />
                  <p>Encep Suherman</p>
                  <p>Pendiri Farrasindo Group</p>
                </p>
                <p className="text-sm text-gray-700">
                  Direktur Utama Farrasindo Group
                </p>
              </div>
            </div>

            {/* Foto CEO */}
            <div className="w-full md:w-1/3 flex justify-center ">
              <div className="relative overflow-hidden">
                <Image
                  src={AboutData[2]}
                  alt="Pimpinan Farrasindo"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEJARAH / TIMELINE */}
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center mb-10 gap-x-2">
            <span className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide font-semibold">
              Sejarah
            </span>
            <h3 className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-white p-2 rounded text-center bg-orange-400 ">
              Farrasindo Group
            </h3>
          </div>

          <div className="relative">
            {/* Garis vertikal di tengah */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-8 sm:space-y-10">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className="flex flex-col md:flex-row md:items-center"
                  >
                    {/* Konten kiri (untuk desktop) */}
                    <div
                      className={`hidden md:flex md:w-1/2 ${
                        isLeft ? "justify-end pr-6" : "justify-start pl-6"
                      }`}
                    >
                      {isLeft && (
                        <TimelineCard
                          year={item.year}
                          title={item.title}
                          description={item.description}
                          image={item.image}
                        />
                      )}
                    </div>

                    {/* Titik di tengah */}
                    <div className="hidden md:flex w-0 md:w-auto">
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-orange-500 border-4 border-white shadow" />
                      </div>
                    </div>

                    {/* Konten kanan (atau semua konten di mobile) */}
                    <div className="md:w-1/2 md:flex md:justify-start md:pl-6">
                      {/* Untuk mobile, selalu tampilkan card di sini */}
                      <div className="w-full md:hidden">
                        <TimelineCard
                          year={item.year}
                          title={item.title}
                          description={item.description}
                          image={item.image}
                        />
                      </div>

                      {/* Desktop: jika card sisi kanan */}
                      {!isLeft && (
                        <div className="hidden md:block w-full">
                          <TimelineCard
                            year={item.year}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TimelineCard({ year, title, description, image }: TimelineCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-md transition-shadow overflow-hidden max-w-xs">
      <div className="relative w-full h-32 sm:h-36">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-[11px] sm:text-xs font-semibold text-orange-500 mb-1">
          {year}
        </p>
        <h4 className="text-xs sm:text-sm font-semibold mb-1">{title}</h4>
        <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
