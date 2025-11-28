import Image from "next/image";

const groupCompanies = [
  {
    name: "PT Farrasindo Perkasa",
    logo: "/images/group-1.png",
  },
  {
    name: "PT Intijaya",
    logo: "/images/group-2.png",
  },
  {
    name: "CIP Pump Indonesia",
    logo: "/images/group-3.png",
  },
  {
    name: "PT CIP Dame Perkasa",
    logo: "/images/group-4.png",
  },
  {
    name: "PT Farrasindo Beton",
    logo: "/images/group-5.png",
  },
  {
    name: "PT GBP",
    logo: "/images/group-6.png",
  },
  {
    name: "Farrasindo Podcast",
    logo: "/images/group-7.png",
  },
  {
    name: "Farrasindo Event",
    logo: "/images/group-8.png",
  },
];

const timeline = [
  {
    year: "2001",
    title: "PT Farrasindo Perkasa",
    description:
      "Awal berdirinya PT Farrasindo Perkasa dan memulai usaha di bidang concrete pump.",
    image: "/images/timeline-2001.jpg",
  },
  {
    year: "2002",
    title: "Unit Pertama Keluar",
    description:
      "Meluncurkan unit concrete pump pertama untuk mendukung proyek pelanggan.",
    image: "/images/timeline-2002.jpg",
  },
  {
    year: "2003",
    title: "Kantor Pusat Pertama",
    description:
      "Membangun kantor pusat pertama untuk meningkatkan layanan pelanggan.",
    image: "/images/timeline-2003.jpg",
  },
  {
    year: "2007",
    title: "Pengembangan Armada",
    description:
      "Menambah armada dan memperluas cakupan layanan ke berbagai daerah.",
    image: "/images/timeline-2007.jpg",
  },
  {
    year: "2013",
    title: "Modernisasi Sistem",
    description:
      "Implementasi sistem operasional modern untuk meningkatkan efisiensi.",
    image: "/images/timeline-2013.jpg",
  },
  {
    year: "2023",
    title: "Menuju Masa Depan",
    description:
      "Terus berinovasi untuk menjadi mitra terbaik di industri konstruksi.",
    image: "/images/timeline-2023.jpg",
  },
];

export default function AboutUsPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Farrasindo Group"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Ikhtisar Perusahaan
          </h1>
        </div>
      </section>

      {/* IKHTISAR PERUSAHAAN */}
      <section className="w-full py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            {/* Gambar */}
            <div className="relative w-full md:w-1/2 h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
              <Image
                src="/images/about-overview.jpg"
                alt="Fasilitas Farrasindo"
                fill
                className="object-cover rounded-md shadow-md"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 text-sm sm:text-base leading-relaxed">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500">
                Farrasindo Group
              </h2>
              <p>
                Farrasindo Group merupakan perusahaan yang bergerak di bidang
                jasa dan solusi concrete pump serta pendukung industri
                konstruksi lainnya. Sejak berdiri, kami berkomitmen untuk
                memberikan layanan terbaik dan terpercaya bagi seluruh mitra.
              </p>
              <p>
                Dengan pengalaman bertahun-tahun, kami terus mengembangkan
                armada, teknologi, dan sumber daya manusia agar mampu
                berkompetisi dan menjawab tantangan zaman.
              </p>
              <p>
                Kami percaya bahwa kepercayaan pelanggan adalah fondasi utama
                dalam setiap langkah yang diambil. Karena itu, keselamatan,
                kualitas, dan ketepatan waktu selalu menjadi prioritas kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TAB HEADER (statik tampak seperti di desain) */}
      <section className="border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap text-xs sm:text-sm md:text-base">
            <button className="px-4 py-3 border-b-2 border-orange-500 text-orange-500 font-semibold">
              Group
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

      {/* GROUP COMPANIES */}
      <section className="w-full py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm mb-6 text-gray-600">
            Berikut adalah perusahaan-perusahaan yang tergabung dalam Farrasindo
            Group:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {groupCompanies.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center justify-center border rounded-md py-4 px-2 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-24 h-10 mb-3">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-[11px] sm:text-xs text-center text-gray-700">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA MEMILIH KAMI + FOTO CEO */}
      <section className="w-full bg-orange-100 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-10">
            {/* Text */}
            <div className="w-full md:w-2/3 text-sm sm:text-base leading-relaxed">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-orange-600">
                Mengapa Memilih Kami
              </h3>
              <p className="mb-3">
                Kami berusaha memberikan pelayanan terbaik di setiap proyek yang
                kami tangani, mulai dari perencanaan, pelaksanaan hingga layanan
                purna jual. Dengan tim yang profesional dan berpengalaman, kami
                siap menjadi mitra terpercaya bagi Anda.
              </p>
              <p className="mb-3">
                Farrasindo Group memiliki armada yang lengkap, peralatan yang
                terawat, serta sistem kerja yang mengedepankan keselamatan dan
                kualitas. Kami memahami bahwa setiap proyek memiliki kebutuhan
                unik, sehingga kami selalu menawarkan solusi yang tepat guna.
              </p>
              <p className="mb-3">
                Kepercayaan yang telah diberikan oleh pelanggan menjadi motivasi
                besar bagi kami untuk terus berinovasi dan berkembang.
              </p>
              <div className="mt-4">
                <p className="font-semibold">Hormat kami,</p>
                <p className="font-semibold text-orange-700">(Nama Pimpinan)</p>
                <p className="text-sm text-gray-700">
                  Direktur Utama Farrasindo Group
                </p>
              </div>
            </div>

            {/* Foto CEO */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 bg-white rounded-md shadow-lg overflow-hidden">
                <Image
                  src="/images/ceo.jpg"
                  alt="Pimpinan Farrasindo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEJARAH / TIMELINE */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center mb-10">
            <span className="text-xs uppercase tracking-wide text-gray-500">
              Sejarah
            </span>
            <h3 className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-orange-600 text-center">
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

type TimelineCardProps = {
  year: string;
  title: string;
  description: string;
  image: string;
};

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
