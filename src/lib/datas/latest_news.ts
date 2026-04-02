import imgArtikel1 from "@/asset/images/artikel/ARTIKEL-ONE-PACKAGE.jpg";
import imgArtikel2 from "@/asset/images/artikel/PMI-Donor-Darah-10-Juli-2025.jpg";
import imgArtikel3 from "@/asset/images/artikel/ARTIKEL-WHEEL-LOADER.jpg";
import imgArtikel4 from "@/asset/images/artikel/ARTIKEL-BATCH-PUMP.jpg";
import imgArtikel5 from "@/asset/images/artikel/ARTIKEL-SANTUNAN-RAMADHAN.jpg";
import imgArtikel6 from "@/asset/images/artikel/ARTIKEL-SKRINING-KESEHATAN-1.jpg";
import imgArtikel7 from "@/asset/images/artikel/ARTIKEL-RAKERNAS-FP-1.jpg";
import imgArtikel8 from "@/asset/images/artikel/ARTIKEL-HUT-23.jpg";
import imgArtikel9 from "@/asset/images/artikel/ARTIKEL-PILIH-BETON-READYMIX.jpg";
import imgArtikel10 from "@/asset/images/artikel/ARTIKEL-7-CABANG-STRATEGIS.jpg";
import imgArtikel11 from "@/asset/images/artikel/Screenshot-2025-01-17-152113.jpg";
import imgArtikel12 from "@/asset/images/artikel/ARTIKEL-MOBILE-BATCHING-PLANT.jpg";
import imgArtikel13 from "@/asset/images/artikel/ARTIKEL-PENANAMAN-POHON3.jpg";
import imgArtikel14 from "@/asset/images/artikel/banner-contact-01.jpg";
import imgArtikel15 from "@/asset/images/artikel/ARTIKELESPORTS.jpg";
import imgArtikel16 from "@/asset/images/artikel/COVERARTIKELHUTFP24.jpg";
import imgArtikel17 from "@/asset/images/artikel/COVERARTIKELHUTRI80.jpg";
import imgArtikel18 from "@/asset/images/artikel/featured.jpg";
import imgArticleGlobalMeeting2026 from "@/asset/images/artikel/ARTIKEL-GLOBAL-MEETING-2026.jpg";
import FarrasindoDonationDisasterSumatra from "@/asset/images/artikel/penyerahan-bantuan-bencana-aceh-2025-12-10.jpg";
import imgArtikelParcel from "@/asset/images/artikel/ARTIKEL-PEMBAGIAN-PARCEL-2026.jpg";
import { Locale } from "./global";
import { StaticImageData } from "next/image";

const LatestNewsData = [
  imgArtikel1,
  imgArtikel2,
  imgArtikel3,
  imgArtikel4,
  imgArtikel5,
  imgArtikel6,
  imgArtikel7,
  imgArtikel8,
  imgArtikel9,
  imgArtikel10,
  imgArtikel11,
  imgArtikel12,
  imgArtikel13,
  imgArtikel14,
  imgArtikel15,
  imgArtikel16,
  imgArtikel17,
  imgArtikel18,
  imgArtikelParcel,
];

export default LatestNewsData;

type Category = "csr-employee" | "csr-society" | "csr-environment" | "";

export type Article = {
  title: string;
  date: string;
  excerpt: string;
  link?: string;
  slug: string;
  author: string;
  categories: Category[];
  image: StaticImageData;
  description: string;
};

export type ArticlesByLocale = {
  [key in Locale]: Article[];
};
export const articles: ArticlesByLocale = {
  id: [
    {
      title: "Satu Paket Pompa Beton dan Beton Siap Pakai",
      categories: [],
      date: "2025-07-25T00:00:00.000Z",
      excerpt:
        "Dalam dunia konstruksi, waktu adalah aset berharga. Namun, banyak proyek pengecoran sering menghadapi tantangan.",
      link: "/news/one-package-concrete-pump-ready-mix",
      slug: "one-package-concrete-pump-ready-mix",
      image: imgArtikel1,
      author: "Farrasindo Group",
      description:
        "Satu Paket Pompa Beton dan Beton Siap Pakai\nDalam dunia konstruksi, waktu adalah aset berharga. Namun banyak proyek pengecoran sering menghadapi kendala seperti keterlambatan material, proses pengecoran yang memakan waktu lama, hingga biaya operasional yang membengkak. Penyebabnya beragam, mulai dari beton yang terlambat datang, alat pompa yang tidak sesuai kebutuhan, hingga kurangnya koordinasi antar penyedia jasa.\n\nMasalah-masalah ini tidak hanya memperlambat pekerjaan, tetapi juga berisiko menurunkan kualitas hasil pengecoran karena beton harus digunakan dalam waktu tertentu agar tidak mengalami penurunan kualitas.\n\nSolusinya Gampang! Cukup Pesan 1 Paket Pompa Beton & Beton Ready Mix\nFarrasindo Perkasa menghadirkan solusi praktis bagi Anda yang ingin pengecoran cepat, efisien, dan berkualitas: 1 Paket Pompa Beton & Beton Ready Mix.\n\nDengan memesan paket ini, Anda mendapatkan:\n-Pengiriman beton ready mix tepat waktu sesuai jadwal pengecoran.\n-Pompa beton yang langsung stand-by di lokasi untuk mempercepat proses distribusi beton.\n-Koordinasi yang terintegrasi antara tim pengiriman beton dan operator pompa, sehingga pekerjaan berjalan lancar tanpa jeda.\n\nKeunggulan Memesan Paket Ini\n-Hemat Waktu : Beton langsung dipompa ke titik pengecoran tanpa perlu proses manual yang memakan waktu.\n-Efisiensi Biaya : Mengurangi risiko pemborosan beton dan biaya tambahan akibat keterlambatan.\n-Kualitas Terjaga : Beton digunakan dalam durasi optimal sehingga saling sesuai standar proyek.\n-Koordinasi Lebih Mudah : Satu penyedia untuk dua kebutuhan sekaligus meminimalkan miskomunikasi.\n\nUntuk armada pengangkut beton, tersedia 3 tipe truk mixer:\n-Mini Beton (3 m³) – Cocok untuk akses jalan kecil atau pengecoran volume skala kecil.\n-Standar Truk Mixer (7–12 m³) – Digunakan untuk proyek skala menengah hingga besar.\n-Truck Mixer Self Diesel Engine – Mixer portabel bertenaga mesin diesel, fleksibel digunakan di lokasi proyek tanpa bergantung pada sumber listrik eksternal.\n\nTersedia Berbagai Tipe Pompa Beton\nFarrasindo Perkasa menyediakan berbagai pilihan pompa beton sesuai kebutuhan proyek, antara lain:\n-Mini Boom 15–17 M\n-Mini Long Boom 18–21 M\n-Standard Boom 24 M\n-Semi Long Boom 26 M\n-Long Boom 27–30 M\n-Super Long Boom 33–36 M\n-Double Super Long Boom 37–40 M\n-Extra Double Super Long Boom 41–60 M",
    },
    {
      title:
        "Farrasindo Perkasa Gelar Aksi Donor Darah Bersama PMI Tangerang, Wujud Nyata Kepedulian Sosial",
      categories: ["csr-employee"],
      date: "2025-07-15T00:00:00.000Z",
      excerpt:
        "Dalam semangat kebersamaan dan kepedulian terhadap sesama, Farrasindo Perkasa menggelar kegiatan aksi donor darah.",
      link: "/news/aksi-donor-darah-bersama-pmi",
      slug: "aksi-donor-darah-bersama-pmi",
      author: "Farrasindo Group",
      image: imgArtikel2,
      description:
        "Farrasindo Perkasa Gelar Aksi Donor Darah Bersama PMI Tangerang, Wujud Nyata Kepedulian Sosial untuk Sesama\nDalam semangat kebersamaan dan kepedulian terhadap sesama, Farrasindo Perkasa menggelar kegiatan aksi donor darah yang bekerja sama dengan Palang Merah Indonesia (PMI) Kabupaten Tangerang, pada Kamis, 10 Juli 2025, pukul 09.00 hingga 12.00 WIB. Bertempat di kantor pusat Farrasindo Group lantai 1, kegiatan ini menjadi bentuk nyata komitmen perusahaan dalam mendukung gerakan kemanusiaan.\n\nMengusung tema “Ayo Bersama Berbagi Keselamatan”, kegiatan donor darah ini terbuka untuk seluruh karyawan di lingkungan Farrasindo Perkasa. Antusiasme peserta terasa sejak pagi hari, terlihat para pendonor mulai berdatangan untuk mendaftarkan diri dan mengikuti proses pemeriksaan kesehatan dari tim medis PMI.\n\nPenyerahan piagam apresiasi dari Farrasindo Group kepada tim PMI Kabupaten Tangerang, yaitu (dari kiri ke kanan) Zikrullah Kumar, Eka Januarsa, dan Adelia Novitasari. Penyerahan dilakukan oleh Direktur Marketing Farrasindo Perkasa, Evitha Annisa (tengah kanan), didampingi oleh Anjar Prambudi (paling kanan) selaku Ketua Kegiatan Donor Darah dan Antonius Trianto (kedua dari kiri) selaku Manager HRD. Kegiatan ini merupakan bagian dari program #Farracare, sebagai wujud nyata kepedulian Farrasindo Perkasa terhadap sesama.\n“Harapannya, kegiatan ini bisa dilakukan secara darah rutin agar membantu masyarakat yang membutuhkan, karena setetes darah bisa menyelamatkan tiga nyawa,” ujar Adelia Novitasari dari PMI, yang saat itu bertugas mendampingi proses pemeriksaan kesehatan.\n\nKomitmen Sosial yang Berkelanjutan\nSebagai bagian dari program Corporate Social Responsibility (CSR) melalui inisiatif #Farracare, Farrasindo Perkasa tidak hanya fokus pada pengembangan bisnis dan layanan profesional, tetapi juga turut hadir di tengah masyarakat melalui berbagai kegiatan sosial yang membawa dampak positif.\n\n“Kegiatan ini merupakan bagian dari program CSR kami. Melalui donor darah, kami ingin memberikan kontribusi langsung kepada masyarakat dan tentunya mendukung kerja kemanusiaan dari PMI,” ujar Direktur Marketing Farrasindo Perkasa, Evitha Annisa.\n\nManfaat Nyata untuk Kesehatan dan Kemanusiaan\nSelain membantu sesama, donor darah juga membawa berbagai manfaat kesehatan bagi pendonor, mulai dari menjaga kesehatan jantung, meningkatkan produksi sel darah merah, hingga mendeteksi penyakit serius lebih dini. Tak heran jika banyak peserta mengaku senang bisa berpartisipasi, bukan hanya bisa membantu orang lain, tetapi sekaligus menjaga kesehatan diri sendiri.\n\nKaryawan Farrasindo Group turut andil dalam kegiatan aksi donor darah yang digelar bersama PMI Kabupaten Tangerang.\nFarrasindo Perkasa percaya bahwa kegiatan seperti ini bukan sekadar acara seremonial, melainkan bagian dari upaya membangun solidaritas dan budaya jangka panjang. Dalam suasana yang akrab dan penuh semangat, kegiatan ini ditutup dengan senyum para pendonor dan rasa syukur karena bisa menjadi bagian dari aksi kemanusiaan yang mulia.\n\nDi dekatnya, Farrasindo Perkasa berkomitmen untuk terus menghadirkan program-program sosial lainnya yang berdampak langsung bagi masyarakat. Keberhasilan Farrasindo Perkasa tidak hanya diwujudkan dari pencapaian bisnis, tetapi juga dari nilai-nilai kemanusiaan yang terus dihidupkan melalui aksi nyata.",
    },
    {
      title: "Kenalan Sama Wheel Loader",
      categories: [],
      date: "2025-06-13T00:00:00.000Z",
      excerpt:
        "Wheel loader merupakan salah satu alat berat yang sangat populer dan banyak digunakan di berbagai sektor.",
      link: "/news/kenalan-sama-wheel-loader",
      slug: "kenalan-sama-wheel-loader",
      author: "Farrasindo Group",
      image: imgArtikel3,
      description:
        "Wheel loader merupakan salah satu alat berat yang sangat populer dan banyak digunakan di berbagai sektor industri. Dengan bentuknya yang dilengkapi bucket di bagian depan, wheel loader dirancang untuk memindahkan material dalam jumlah besar secara cepat dan efisien.\n\nApa Itu Wheel Loader?\nWheel loader adalah alat berat beroda yang berfungsi untuk memuat, memindahkan, dan mengangkut material seperti tanah, pasir, kerikil, batu bara, hingga limbah industri. Dibandingkan alat berat lainnya, wheel loader memiliki keunggulan pada mobilitasnya yang tinggi di area kerja dan kemampuan manuver yang baik meskipun di medan yang cukup sempit.\n\nKegunaan Wheel Loader di Berbagai Bidang Konstruksi\nWheel loader sering digunakan untuk mengangkut material bangunan seperti pasir dan semen. Fungsinya sangat penting dalam proses persiapan dan pembersihan area proyek.\n\nPertambangan\nDalam industri tambang, wheel loader digunakan untuk memindahkan hasil galian seperti batu bara atau penambangan logam dari lokasi penambangan ke truk pengangkut.\n\nPerkebunan dan Alat Pertanian juga dimanfaatkan untuk mengangkut pupuk, hasil panen, serta membersihkan area lahan pertanian.\n\nPengolahan Limbah dan Daur Ulang\nWheel loader membantu dalam proses transfer dan penataan material limbah agar lebih mudah diolah kembali.\n\nPelabuhan dan Logistik\nDi pelabuhan, wheel loader berguna untuk memindahkan barang curah dan membantu kegiatan bongkar muat.\n\nJual Wheel Loader di Farrasindo\nDengan kebutuhan wheel loader yang begitu luas, tentu penting memilih alat yang tepat dan layanan yang terpercaya. Farrasindo Perkasa hadir sebagai solusi untuk Anda yang membutuhkan wheel loader berkualitas, baik untuk pembelian maupun penyewaan.\n\nKami menyediakan berbagai jenis dan kapasitas wheel loader yang siap digunakan untuk berbagai kebutuhan proyek Anda. Dengan pengalaman lebih dari 20 tahun, Farrasindo menjamin unit yang prima, dukungan teknis yang sigap, serta layanan purna jual yang profesional.\n\nButuh wheel loader untuk proyek Anda?\nHubungi Farrasindo sekarang dan temukan solusi alat berat terbaik untuk setiap kebutuhan Anda!",
    },
    {
      title: "Satu Mesin, Tiga Fungsi: Keunggulan Batchpump dari Farrasindo",
      categories: [],
      date: "2025-06-13T00:00:00.000Z",
      excerpt:
        "Farrasindo Perkasa telah memperluas jangkauan layanannya dengan membuka 7 cabang strategis di berbagai wilayah Indonesia.",
      slug: "keunggulan-batchpump-farrasindo",
      author: "Farrasindo Group",
      image: imgArtikel4,
      description:
        "Satu Mesin, Tiga Fungsi: Keunggulan Batchpump dari Farrasindo\nDalam dunia konstruksi modern, kecepatan dan efisiensi kerja menjadi kunci utama untuk menyelesaikan proyek tepat waktu dan tepat biaya. Untuk menjawab tantangan tersebut, Farrasindo Perkasa menghadirkan Batchpump, sebuah inovasi 3-in-1 yang menggabungkan fungsi Batching, Mixing, dan Pumping dalam satu unit mesin.\n\nApa Itu Batchpump?\nBatchpump adalah mesin portabel multifungsi yang dapat mencampur dan memanaskan beton langsung di lokasi proyek. Berbeda dengan metode konvensional yang memerlukan alat terpisah, batching plant, truk mixer, dan pompa beton. Batchpump mengarahkan semuanya dalam satu proses rangkaian.\n\nDengan kemampuannya yang fleksibel dan desain yang kompak, Batchpump sangat cocok digunakan untuk proyek skala kecil hingga menengah, terutama di area yang sulit dijangkau oleh truk besar atau beton ready mix.\n\nTiga Fungsi Utama Batchpump\nBatching\nBatchpump dapat mengukur dan menakar komposisi material beton sesuai kebutuhan proyek.\n\nPencampuran\nProses pencampuran dilakukan langsung dalam unit untuk menghasilkan beton yang homogen dengan saling terkontrol.\n\nPemompaan\nSetelah tercampur, beton langsung dipompa ke area pengecoran tanpa perlu alat bantu tambahan.\n\nKeunggulan Batchpump dari Farrasindo Perkasa\n✅ Efisien & Hemat Waktu\nBatchpump mempersingkat proses dari batching hingga pumping dalam satu alat, mengurangi waktu tunggu dan meningkatkan kecepatan kerja di lapangan.\n\n✅ Cocok untuk Lokasi Sulit Dijangkau\nDengan desain kompak dan mobilitas tinggi, Batchpump dapat menjangkau lokasi proyek yang tidak dapat dilalui truk mixer besar.\n\n✅ Lebih Hemat Biaya\nTanpa perlu memisahkannya untuk batching plant, truk mixer, dan pompa beton, Anda dapat menghemat pengeluaran operasional secara signifikan.\n\n✅ Operasional\nBatchpump Fleksibel ideal untuk proyek skala kecil hingga menengah, seperti perumahan, ruko, saluran air, jalan lingkungan, hingga proyek perkebunan dan pertambangan.\n\nSebagai produk asli dari Farrasindo, Batchpump telah terbukti andal digunakan di berbagai proyek konstruksi di seluruh Indonesia, mulai dari pembangunan jalan desa, pengecoran lantai gudang, hingga proyek perumahan di wilayah terpencil. Inovasi ini menjadi solusi tepat ketika pasokan beton ready mix sulit diakses atau tidak efisien dari sisi logistik.\n\nIngin Tahu Lebih Lanjut?\nHubungi tim kami sekarang untuk demo produk, harga sewa, atau pembelian Batchpump.",
    },
    {
      title:
        "Farrasindo Berbagi di Bulan Ramadhan: Kepedulian terhadap Anak Yatim dan Masyarakat Sekitar",
      categories: ["csr-society"],
      date: "2025-03-20T00:00:00.000Z",
      excerpt:
        "Farrasindo berbagi kebahagiaan di bulan Ramadhan dengan memberikan bantuan kepada anak yatim dan masyarakat sekitar.",
      slug: "farrasindo-berbagi-ramadhan",
      author: "Farrasindo Group",
      image: imgArtikel5,
      description:
        "Farrasindo Berbagi di Bulan Ramadhan: Kepedulian terhadap Anak Yatim dan Masyarakat Sekitar\n\nBulan Ramadhan merupakan waktu yang penuh berkah, di mana umat Islam di seluruh dunia menjalankan ibadah puasa dan memperbanyak amal ibadah. Dalam semangat bulan suci ini, PT Farrasindo, sebuah perusahaan yang dikenal akan komitmennya dalam berbagi dan memberikan dampak positif bagi masyarakat, menggelar acara sosial yang menyentuh hati, yaitu berbagi kepada anak-anak yatim di lingkungan sekitar perusahaan.\n\nAcara berbagi ini berlangsung dengan penuh kehangatan di kantor pusat Farrasindo, dan dihadiri oleh berbagai pihak, termasuk Ketua RT 08 setempat, serta Direktur Utama Farrasindo, Evitha Putri. Kegiatan ini menjadi momen spesial yang menunjukkan bahwa Farrasindo tidak hanya fokus pada perkembangan bisnis, tetapi juga pada pengembangan sosial dan kepedulian terhadap masyarakat.\n\nAcara Berbagi kepada Anak Yatim\nDalam acara berbagi ini, Farrasindo memberikan bantuan berupa paket sembako dan bingkisan kepada anak-anak yatim dan keluarga kurang mampu yang berada di sekitar perusahaan. Kegiatan ini dilaksanakan dengan tujuan untuk meringankan beban mereka selama bulan Ramadhan, terutama di tengah kondisi yang penuh tantangan.\n\nEvitha Putri, selaku Direktur Utama Farrasindo, dalam sambutannya menyampaikan bahwa acara ini merupakan bentuk tanggung jawab sosial perusahaan untuk memberikan manfaat langsung kepada masyarakat sekitar. “Kami ingin memberikan kebahagiaan dan berbagi berkah dengan anak-anak yatim dan keluarga kurang mampu. Semoga ini dapat membantu mereka menjalani Ramadhan dengan penuh kebahagiaan,” ujarnya.\n\nKehadiran Ketua RT 08\nKetua RT 08 yang turut hadir dalam acara ini memberikan apresiasi yang tinggi kepada Farrasindo atas perhatian dan kepedulian perusahaan terhadap warga sekitar. “Kami sangat berterima kasih kepada Farrasindo yang selalu peduli terhadap warga di lingkungan kami, terutama anak-anak yatim. Ini adalah contoh nyata dari perusahaan yang tidak hanya fokus pada bisnis, tetapi juga memiliki jiwa sosial yang tinggi,” kata Ketua RT 08.\n\nAcara Rutin yang Diadakan Setiap Tahun\nAcara berbagi ini bukanlah hal baru bagi Farrasindo. Setiap tahunnya, perusahaan ini rutin mengadakan kegiatan serupa di cabang-cabang mereka yang tersebar di berbagai wilayah. Hal ini menunjukkan komitmen Farrasindo untuk terus berperan aktif dalam menciptakan dampak positif bagi masyarakat. Tidak hanya pada bulan Ramadhan, Farrasindo juga terlibat dalam berbagai kegiatan sosial sepanjang tahun, baik dalam bentuk bantuan pendidikan, kesehatan, maupun dukungan bagi masyarakat yang membutuhkan.\n\nMenguatkan Semangat Berbagi di Ramadhan\nKegiatan berbagi ini diharapkan dapat menginspirasi banyak pihak untuk meningkatkan rasa kepedulian terhadap sesama, terutama bagi mereka yang membutuhkan uluran tangan. Di bulan Ramadhan yang penuh berkah ini, Farrasindo menunjukkan bahwa keberhasilan perusahaan tidak hanya diukur dari segi ekonomi, tetapi juga dari mana mereka dapat memberikan kontribusi positif kepada masyarakat.\n\nDengan semakin banyaknya perusahaan yang mengadopsi prinsip tanggung jawab sosial ini, diharapkan dapat tercipta masyarakat yang lebih peduli, berbagi, dan saling mendukung satu sama lain, sehingga menciptakan lingkungan yang lebih harmonis dan sejahtera bagi semua.\n\nFarrasindo tetap berkomitmen untuk menjalankan program-program sosial yang bermanfaat bagi masyarakat, khususnya di bulan Ramadhan, sebagai wujud nyata dari tanggung jawab sosial perusahaan (CSR) yang berkelanjutan.",
    },
    {
      title:
        "Employee Wellness Day, Farrasindo Bekerja sama dengan Puskesmas Srengseng Melakukan Screening Kesehatan",
      categories: ["csr-employee"],
      date: "2025-02-14T00:00:00.000Z",
      excerpt:
        "Farrasindo Perkasa Group adakan acara Employee Wellness Day bersama Puskesmas Srengseng untuk pemeriksaan kesehatan karyawan.",
      slug: "employee-wellness-day-farrasindo",
      author: "Farrasindo Group",
      image: imgArtikel6,
      description:
        "Employee Wellness Day, Farrasindo Bekerja sama dengan Puskesmas Srengseng Melakukan Screening Kesehatan\n\nMengutamakan kesehatan karyawan, Farrasindo Perkasa Group adakan acara Employee Wellness Day.\n\nPada tanggal 14 Februari 2024, Farrasindo Perkasa bekerja sama dengan Puskesmas Srengseng menyelenggarakan kegiatan Employee Wellness Day yang bertujuan untuk menjaga kesehatan dan kesejahteraan para karyawan. Acara ini diikuti oleh lebih dari 150 karyawan Farrasindo Perkasa, yang antusias mengikuti berbagai pemeriksaan kesehatan yang disediakan.\n\nTujuan dan Manfaat Kegiatan\nEmployee Wellness Day ini diselenggarakan dengan tujuan memberikan fasilitas pemeriksaan kesehatan bagi seluruh karyawan, serta memberikan edukasi penting mengenai pentingnya menjaga kesehatan tubuh. Kegiatan ini bukan hanya sebagai deteksi dini masalah kesehatan, namun juga sebagai langkah preventif yang sangat bermanfaat untuk menciptakan lingkungan kerja yang sehat dan produktif.\n\nJenis Pemeriksaan Kesehatan yang Dilakukan\nDalam kegiatan ini, berbagai jenis pemeriksaan kesehatan dilakukan untuk mengetahui kondisi tubuh secara menyeluruh, antara lain:\n\nPemeriksaan Tinggi Badan dan Berat Badan: Pemeriksaan ini bertujuan untuk menghitung Indeks Massa Tubuh (IMT) karyawan. IMT adalah ukuran yang digunakan untuk mengetahui apakah seseorang memiliki berat badan yang ideal atau berisiko mengalami gangguan kesehatan akibat kelebihan atau kekurangan berat badan.\n\nPemeriksaan Tekanan: Salah satu pemeriksaan yang sangat penting adalah tekanan darah. Pemeriksaan ini dilakukan untuk mendeteksi potensi hipertensi atau tekanan darah tinggi yang bisa berbahaya jika tidak segera diatasi.\n\nPemeriksaan Gula Darah: Pemeriksaan gula darah ini dilakukan untuk memantau kadar glukosa dalam darah, guna mendeteksi dini kemungkinan adanya gangguan seperti diabetes. Kegiatan ini juga menjadi langkah pencegahan agar karyawan dapat menjaga pola makan dan gaya hidup sehat.\n\nPemeriksaan Kolesterol : Pemeriksaan Kolesterol berguna untuk mengetahui kadar Kolesterol dalam tubuh, Kolesterol baik total, LDL (kolesterol jahat), maupun HDL (kolesterol baik). Deteksi kadar kolesterol tinggi sangat penting untuk mencegah penyakit jantung dan pembuluh darah.\n\nPemeriksaan TBC (Tuberkulosis): Puskesmas Srengseng juga melakukan pemeriksaan TBC untuk mendeteksi gejala atau indikasi penyakit menular ini. Dengan deteksi dini, penyebaran TBC dapat dicegah dan diobati dengan lebih cepat.\n\nKegiatan yang Berdampak Positif\nEmployee Wellness Day yang dilaksanakan pada tanggal 14 Februari 2024 di Farrasindo Perkasa merupakan langkah yang positif untuk meningkatkan kesadaran dan kesehatan para karyawan. Dengan melibatkan Puskesmas Srengseng dalam pemeriksaan kesehatan yang mencakup berbagai aspek penting, perusahaan ini menunjukkan komitmennya terhadap kesehatan dan kesejahteraan karyawannya. Semoga kegiatan seperti ini dapat terus berlanjut dan menjadi budaya perusahaan, yang tidak hanya berfokus pada kinerja, tetapi juga pada kesehatan dan kebahagiaan karyawan.",
    },
    {
      title: "RAKERNAS 2025, Farrasindo Mengusung Teman Jorney Menuju Puncak",
      categories: ["csr-employee"],
      date: "2025-03-06T00:00:00.000Z",
      excerpt:
        "Farrasindo Group menyelenggarakan Rapat Kerja Nasional (RAKERNAS) 2025 dengan tema 'Journey to the Top'.",
      slug: "rakernas-2025-journey-to-the-top",
      author: "Farrasindo Group",
      image: imgArtikel7,
      description:
        "RAKERNAS 2025, Farrasindo Mengusung Teman Jorney Menuju Puncak\n\nFarrasindo Group baru-baru ini menyelenggarakan Rapat Kerja Nasional (RAKERNAS) 2025 dengan tema 'Journey to the Top'. Acara yang berlangsung selama dua hari penuh ini menjadi kesempatan bagi seluruh departemen dan cabang Farrasindo Group di seluruh Indonesia untuk melakukan evaluasi mendalam terhadap pencapaian dan tantangan yang dihadapi sepanjang tahun 2024, serta menyusun langkah-langkah strategi yang akan membawa perusahaan menuju kesuksesan lebih tinggi di tahun 2025.\n\nDalam kesempatan kali ini, Farrasindo Group juga memperkenalkankan direktur utama baru, yaitu Evitha Putri Annisa, yang sebelumnya menjabat sebagai Head of Marketing Communication and Growth. Pengangkatan ini menjadi langkah penting dalam memperkuat struktur kepemimpinan dan mempersiapkan perusahaan untuk tantangan mendatang.\n\nAcara ini dihadiri oleh seluruh petinggi-petinggi, kepala cabang, dan sales-sales Farrasindo Group yang terdiri dari PT Farrasindo Perkasa, PT Fresh Beton Indonesia, PT Farracon Precast Industi, PT Gunung Bumi Perkasa, PT Citi Pump Perkasa, dan CV. Simi Pijat Refleksi.\n\nHari Pertama dan Kedua: Evaluasi Pencapaian dan Tantangan 2024\nPada hari kedua RAKERNAS 2025, agenda utama adalah evaluasi dan tantangan yang dihadapi oleh setiap departemen dan cabang dari setiap unit bisnis selama tahun 2024. Masing-masing perwakilan dari departemen dan cabang diberi kesempatan untuk mempresentasikan mereka dalam berbagai aspek, termasuk penjualan, operasional, pengembangan produk, serta inovasi yang telah berlangsung selama setahun terakhir.\n\nTidak hanya pencapaian, presentasi ini juga menyoroti tantangan-tantangan yang menghadang tim selama tahun 2024. Diskusi terbuka ini memungkinkan setiap departemen untuk berbagi pengalaman mengenai kendala yang muncul, serta solusi yang telah dicoba untuk mengatasinya. Dengan demikian, acara ini menjadi forum yang sangat berguna bagi seluruh waktu untuk saling belajar dan menemukan pendekatan baru untuk menghadapi tantangan serupa di masa depan.\n\nHari pertama dan kedua RAKERNAS juga diwarnai dengan diskusi yang mendalam mengenai bagaimana perusahaan dapat meningkatkan efisiensi operasional dan mengoptimalkan hasil yang sudah ada. Hal ini menjadi pijakan yang kuat untuk merencanakan langkah-langkah strategi di tahun mendatang.\n\nMalam Apresiasi: Malam Penghargaan dan Hiburan\nSetelah dua hari penuh dengan diskusi, acara RAKERNAS 2025 ditutup dengan malam penghargaan yang penuh keceriaan di hari kedua. Malam ini menjadi ajang bagi Farrasindo Perkasa untuk memberikan penghargaan kepada para karyawan yang telah memberikan kontribusi terbaik mereka sepanjang tahun 2024.\n\nBerbagai penghargaan diberikan pada malam tersebut, seperti Sales Terbaik, Cabang Terbaik dan kategori-kategori lainnya yang memberikan pengakuan atas kerja keras dan dedikasi. Pemberian penghargaan ini bertujuan untuk memotivasi seluruh karyawan agar terus berusaha dan memberikan yang terbaik di tahun berikutnya.\n\nTidak hanya diberikan penghargaan, malam itu juga diisi dengan hiburan yang menyenangkan. Para karyawan berkesempatan mengikuti berbagai permainan seru yang meningkatkan kebersamaan antar tim, serta sesi bernyanyi bersama yang menciptakan suasana penuh tawa dan kebahagiaan. Acara puncak ini ditutup dengan makan malam bersama yang mempererat hubungan antar sesama karyawan dan memberikan kesempatan untuk saling berbincang dalam suasana yang lebih santai.\n\nRAKERNAS 2025 Farrasindo Perkasa dengan tema 'Journey to the Top' tidak hanya menjadi ajang evaluasi, tetapi juga merupakan momentum penting bagi perusahaan untuk merencanakan langkah-langkah strategi menuju puncak kesuksesan. Melalui pembahasan pencapaian dan tantangan selama tahun 2024, serta penghargaan kepada karyawan terbaik, Farrasindo Perkasa semakin siap menghadapi tantangan baru di tahun 2025 dan terus mengoptimalkan kinerjanya dengan semangat kolaborasi dan inovasi.",
    },
    {
      title: "Rayakan HUT Ke-23, Farrasindo …",
      categories: [],
      date: "2025-02-07T00:00:00.000Z",
      excerpt:
        "Rayakan HUT Ke-23, Farrasindo Mengajak Semua Karyawan Saling Mengapresiasi.",
      slug: "rayakan-hut-ke-23-farrasindo",
      author: "Farrasindo Group",
      image: imgArtikel8,
      description:
        "Rayakan HUT Ke-23, Farrasindo Mengajak Semua Karyawan Saling Mengapresiasi\n\nTahun 2024 menjadi momen istimewa bagi Farrasindo, perusahaan yang telah berkiprah selama 23 tahun di industri ini. Dalam rangka merayakan HUT ke-23, Farrasindo mengusung tema *Tim Hebat, Kerja Hebat*, yang mencerminkan pentingnya kolaborasi dan semangat tim dalam mencapai kesuksesan. Tema ini juga mengajak seluruh karyawan untuk saling mengapresiasi kolaborasi dalam perjalanan panjang perusahaan selama 23 tahun.\n\nAcara Penuh Makna dengan Berbagai Kegiatan\nPeringatan HUT kali ini tidak hanya dirayakan dengan seremonial semata, namun juga diisi dengan berbagai kegiatan yang penuh makna. Salah satu momen yang sangat menyentuh adalah pembagian sembako untuk anak yatim. Farrasindo menunjukkan kepeduliannya terhadap sesama dengan memberikan bantuan sembako kepada anak-anak yatim di sekitar lingkungan perusahaan. Ini menjadi bentuk nyata dari tanggung jawab sosial perusahaan yang senantiasa peduli terhadap kesejahteraan masyarakat.\n\nSelain itu, diberikan penghargaan untuk karyawan juga menjadi bagian penting dalam perayaan ini. Farrasindo memberikan penghargaan kepada karyawan yang telah menunjukkan dedikasi luar biasa dalam pekerjaan mereka. Penghargaan ini bertujuan untuk memotivasi setiap individu untuk terus memberikan yang terbaik dan menjadi bagian dari tim yang solid dan produktif.\n\nMakan Malam Bersama dan Kompetisi Seru Antar Cabang\nAcara semakin meriah dengan adanya makan malam bersama yang mempererat ikatan antara sesama karyawan. Momen makan bersama ini bukan hanya tentang makanan lezat, tetapi juga sebagai ajang untuk saling berbagicerita, pengalaman, dan tentunya mencapai pencapaian perusahaan yang luar biasa.\n\nTidak ketinggalan, Farrasindo juga mengadakan kompetisi seru antar cabang yang menjadi ajang untuk menunjukkan kreativitas dan tim kerja. Setiap cabanglomba-lomba menampilkan keahlian terbaik mereka, baik dalam hal kreativitas, kerjasama, maupun inovasi. Kompetisi ini tidak hanya menghibur, namun juga menampilkan bahwa setiap cabang memiliki kontribusi penting dalam kesuksesan perusahaan secara keseluruhan.\n\nMomen Perayaan yang Penuh Makna\nHUT ke-23 Farrasindo menjadi ajang untuk merayakan kerja keras, dedikasi, dan kebersamaan seluruh karyawan. Dengan tema *Great Team, Great Work*, acara ini menjadi simbol betapa pentingnya tim kerja dan apresiasi terhadap setiap individu. Farrasindo terus berkomitmen untuk berkembang, tidak hanya sebagai perusahaan, tetapi juga sebagai keluarga yang saling mendukung dan mengapresiasi. Selamat ulang tahun yang ke-23, Farrasindo! Semoga terus sukses dan berkembang untuk tahun-tahun yang akan datang.",
    },
    {
      title:
        "Ingin Proyek Konstruksi Tepat Waktu dengan Kualitas Terbaik? Pilih Beton Ready Mix!",
      categories: [],
      date: "2025-01-22T00:00:00.000Z",
      excerpt:
        "Solusi konstruksi cepat dan berkualitas dengan beton ready mix dari Fresh Beton Indonesia.",
      slug: "beton-ready-mix-proyek-konstruksi-2",
      author: "Campuran Siap Pakai",
      image: imgArtikel9,
      description:
        "Mau Proyek Konstruksi Cepat dan Berkualitas? Pilih Beton Ready Mix\n\nDalam dunia konstruksi, waktu dan kualitas adalah dua faktor yang sangat krusial. Keterlambatan dalam penyelesaian proyek atau penggunaan bahan bangunan yang tidak memenuhi standar bisa berbahaya dan mengganggu seluruh tahapan pembangunan. Salah satu solusi terbaik untuk memastikan proyek konstruksi Anda cepat selesai dan memiliki kualitas yang terjamin adalah dengan menggunakan beton ready mix.\n\nBeton ready mix adalah beton yang telah diproduksi dan dicampur secara profesional di pabrik, kemudian diangkut menggunakan truk mixer ke lokasi proyek. Dengan berbagai keunggulan yang dimiliki, beton ready mix menjadi pilihan favorit bagi banyak kontraktor dan developer.\n\nKeunggulan Beton Ready Mix untuk Proyek Konstruksi :\nKualitas yang Terjamin\nBeton ready mix diproduksi dengan sistem yang terkontrol dengan baik di pabrik, menggunakan bahan-bahan yang sudah terstandarisasi. Hal ini memastikan bahwa kualitas beton yang digunakan di proyek selalu konsisten dan sesuai dengan kebutuhan teknis. Tidak ada lagi risiko pencampuran yang tidak tepat atau kualitas beton yang kurang optimal.\n\nMenghemat Waktu\nPencampuran beton di lokasi proyek seringkali memakan waktu yang cukup lama, apalagi jika dilakukan secara manual. Dengan beton ready mix, semua pencampuran sudah dilakukan sebelumnya di pabrik, sehingga waktu yang dibutuhkan untuk menuangkan beton ke dalam bekisting jauh lebih cepat. Jadi dapat mengurangi waktu tunggu dan mempercepat kemajuan pembangunan.\n\nHasil yang Lebih Presisi\nDengan beton ready mix, campuran beton lebih presisi sesuai dengan rasio yang dibutuhkan. Ini membantu mengurangi kesalahan yang bisa terjadi pada pencampuran beton secara manual dan memastikan bahwa beton yang digunakan memiliki kekuatan dan ketahanan yang optimal. Mudah dalam Pengaturan Jumlah Beton Beton ready mix tersedia dalam berbagai jumlah, mulai dari skala kecil hingga besar, sesuai dengan kebutuhan proyek. Tidak perlu khawatir kelebihan atau kekurangan beton di lokasi, karena beton akan dikirim sesuai dengan jumlah yang telah dipesan. Ini juga mengurangi pemborosan material yang sering terjadi pada pencampuran manual.\n\nMinimalkan Risiko Kerusakan\nBeton yang dicampur secara manual seringkali memiliki risiko kekurangan atau kelebihan bahan campuran, yang dapat berdampak pada kualitas dan kekuatan beton. Dengan beton ready mix, setiap batch yang dikirim akan sesuai dengan standar kualitas yang diharapkan, mengurangi risiko kerusakan atau masalah di kemudian hari.\n\nDengan semua keunggulan tersebut, beton ready mix jelas menjadi pilihan yang lebih baik dibandingkan dengan beton yang dicampur di lokasi. Selain lebih cepat dan efisien, penggunaan beton ready mix juga membantu memastikan kualitas konstruksi yang lebih baik dan tahan lama. Jika sedang mencari solusi beton ready mix untuk proyek konstruksi, Fresh Beton Indonesia adalah pilihan yang tepat. Sediakan beton ready mix berkualitas tinggi dengan pengawasan ketat di setiap tahap produksi, pastikan beton yang kami kirim sesuai dengan kebutuhan proyekmu. Dengan pengalaman kami yang sudah terbukti, Fresh Beton Indonesia siap membantu mempercepat kemajuan pembangunan proyek mu tanpa mengorbankan kualitas.\n\nJadi, untuk memastikan proyek konstruksi berjalan cepat, efisien, dan berkualitas, mempercayai kebutuhan beton ready mix kepada Fresh Beton Indonesia. Hubungi kami sekarang untuk informasi lebih lanjut dan penawaran yang menarik!",
    },
    {
      title:
        "Fresh Beton Indonesia menyediakan Beton Berkualitas dengan 7 Cabang Strategis di Seluruh Indonesia",
      categories: [],
      date: "2025-01-22T00:00:00.000Z",
      excerpt:
        "Fresh Beton Indonesia hadir sebagai pionir dalam menyediakan beton berkualitas tinggi dengan jaringan cabang di berbagai lokasi strategis.",
      slug: "fresh-beton-indonesia-7-cabang-strategis",
      author: "Fresh Beton Indonesia",
      image: imgArtikel10,
      description:
        "Fresh Beton Indonesia menyediakan Beton Berkualitas dengan 7 Cabang Strategis di Seluruh Indonesia\n\nFresh Beton Indonesia hadir sebagai pionir dalam menyediakan beton berkualitas tinggi dengan jaringan yang luas dan cabang yang tersebar di berbagai lokasi strategis di Indonesia. Dengan 7 cabang yang tersebar di Meruya, Sentul, Cianjur, Sukabumi, Serpong, Balaraja, dan Cikembang, Fresh Beton Indonesia siap melayani kebutuhan konstruksi Anda dengan lebih cepat, efisien, dan terpercaya.\n\nKenapa Beton Segar Indonesia?\nFresh Beton Indonesia bukan hanya sekedar penyedia beton, namun juga partner yang dapat diandalkan dalam setiap proyek konstruksi. Dengan pengalaman bertahun-tahun dan komitmen untuk memberikan produk beton terbaik, Fresh Beton Indonesia memastikan bahwa setiap pelanggan mendapatkan layanan yang optimal.\n\nSetiap cabang Fresh Beton Indonesia berfungsi untuk menjangkau lokasi yang berbeda dan memenuhi kebutuhan beton sesuai dengan permintaan proyek, baik itu untuk pembangunan gedung, infrastruktur, jalan raya, hingga proyek kecil dan besar lainnya. Dengan 7 cabang yang tersebar di berbagai lokasi seperti Meruya, Sentul, Cianjur, Sukabumi, Serpong, Balaraja, dan Cikembang, Fresh Beton Indonesia memastikan distribusi yang cepat dan produk yang selalu dalam kondisi terbaik.\n\nKeunggulan 7 Cabang Fresh Beton Indonesia\nMeruya: Berada di pusat kota Jakarta, cabang Meruya memudahkan akses ke proyek-proyek besar di ibu kota, memastikan pengiriman tepat waktu ke lokasi konstruksi.\n\nSentul: Dikenal dengan pesatnya perkembangan sektor properti dan infrastruktur, cabang Sentul menjadi pilihan utama untuk proyek-proyek di kawasan ini.\n\nCianjur: Untuk proyek-proyek di wilayah Jawa Barat, cabang Cianjur hadir sebagai penyedia beton berkualitas dengan harga bersaing.\n\nSukabumi: Sebagai kota dengan potensi industri yang berkembang, cabang Sukabumi hadir untuk mendukung berbagai proyek pembangunan lokal dan industri.\n\nSerpong: Terletak di kawasan yang tengah berkembang pesat, cabang Serpong sangat strategis untuk melayani proyek-proyek di kawasan Tangerang Selatan dan sekitarnya.\n\nBalaraja: Dengan konektivitas yang baik ke berbagai kawasan industri, cabang Balaraja siap memenuhi kebutuhan beton untuk proyek-proyek besar dan konstruksi industri.\n\nCikembang: Cabang Cikembang, yang terletak di daerah yang berkembang, menjadi pilihan tepat untuk pembangunan infrastruktur dan proyek lainnya di wilayah Jawa Barat.\n\nDi mana pun kamu berada, Fresh Beton Indonesia siap menjangkau dan menjadi partner konstruksi terbaikmu!",
    },
    {
      title:
        "Mesin Pompa Beton Sewa dengan Layanan Profesional oleh Farrasindo Perkasa",
      categories: [],
      date: "2025-01-22T00:00:00.000Z",
      excerpt:
        "Farrasindo Perkasa menyediakan jasa sewa mesin pompa beton berkualitas tinggi untuk berbagai kebutuhan proyek konstruksi.",
      slug: "mesin-pompa-beton-sewa-farrasindo-perkasa",
      author: "Farrasindo Group",
      image: imgArtikel11,
      description:
        "Farrasindo Perkasa adalah perusahaan terpercaya yang menyediakan jasa sewa mesin pompa beton berkualitas tinggi untuk berbagai kebutuhan proyek konstruksi. Dengan pengalaman bertahun-tahun dan peralatan modern, kami siap memenuhi kebutuhan proyek Anda, baik skala kecil maupun besar. Kami menawarkan berbagai jenis pompa beton, masing-masing dengan fungsi spesifik untuk memastikan efisiensi dan hasil terbaik.\n\nJenis-Jenis Mesin Pompa Beton yang Tersedia\nPompa Beton Mini: Ideal untuk proyek skala kecil seperti pembangunan rumah atau rekonstruksi. Ukurannya yang ringkas memudahkan alat ini menjangkau area yang sulit diakses, seperti gang sempit atau lokasi terpencil. Fungsi: Ideal untuk proyek skala kecil seperti pembangunan rumah, rekonstruksi, atau proyek di area dengan akses terbatas. Panjang Boom: 10–15 meter. Keunggulan: Ringkas dan mudah dioperasikan di lokasi yang sempit.\n\nPompa Beton Standar: Cocok untuk proyek berukuran menengah. Alat ini memiliki jangkauan standar yang efisien untuk pekerjaan konstruksi gedung bertingkat rendah hingga menengah. Fungsi: Cocok untuk proyek berskala menengah seperti konstruksi gedung bertingkat rendah. Panjang Boom: 15–28 meter. Keunggulan: Serbaguna dan memiliki kemampuan jangkauan yang cukup luas.\n\nLong Boom Concrete Pump: Dengan jangkauan yang lebih panjang, alat ini mendukung proyek gedung tinggi dan jembatan. Teknologi long boom mempermudah pengaliran beton ke lokasi yang lebih tinggi atau sulit dijangkau. Fungsi: Mendukung proyek dengan jangkauan kebutuhan yang lebih luas, seperti pembangunan gedung bertingkat tinggi atau infrastruktur skala besar. Panjang Boom: 28–36 meter. Keunggulan: Efisien untuk lokasi akses dengan kesulitan atau tingkat ketinggian lebih tinggi.\n\nDouble Super Long Boom: Untuk proyek-proyek besar seperti konstruksi gedung pencakar langit atau infrastruktur skala besar, double super long boom memberikan transmisi dan jangkauan maksimum. Fungsi: dirancang untuk proyek besar seperti pembangunan jembatan atau gedung pencakar langit. Panjang Boom: 36–48 meter. Keunggulan: Memiliki kemampuan menjangkau area yang sangat luas dan tinggi.\n\nExtra Double Super Long Boom: Alat ini dirancang untuk proyek-proyek paling menantang dengan kebutuhan jangkauan beton ekstrem. Cocok untuk proyek dengan tingkat kompleksitas tinggi. Fungsi: Menjawab kebutuhan ekstrem pada proyek-proyek kompleks seperti bendungan atau struktur tinggi lainnya. Panjang Boom: 48–62 meter. Keunggulan: Daya jangkauan maksimum dengan kualitas terbaik.\n\nStationery Concrete Pump (Moli/Mounted Line Pump): Biasanya digunakan pada proyek yang membutuhkan aliran beton konstan dalam jarak jauh. Pompa stasioner cocok untuk infrastruktur jalan raya atau bendungan. Fungsi: Aliran beton jarak jauh untuk proyek seperti jalan raya, bendungan, atau proyek besar lainnya. Keunggulan: Stabil, konsisten, dan efisien untuk kebutuhan beton dalam volume besar.\n\nSelf-Loading Concrete Pump: Menggabungkan pencampuran fungsi dan pemompaan dalam satu alat. Alat ini memberikan efisiensi tinggi, terutama pada lokasi proyek terpencil yang memerlukan mobilitas. Fungsi: Menggabungkan pencampuran beton dan pemompaan dalam satu unit, cocok untuk lokasi proyek terpencil. Keunggulan: Efisien, hemat waktu, dan tenaga kerja.\n\nBatching Plant: Fasilitas ini memungkinkan pencampuran beton dalam jumlah besar dengan presisi tinggi. Batching plant sangat cocok untuk proyek besar dengan pasokan kebutuhan beton kontinyu. Fungsi: Memproduksi beton secara massal dengan presisi tinggi untuk mendukung kebutuhan proyek skala besar. Keunggulan: Menjamin kualitas beton yang seragam dan sesuai spesifikasi.\n\nMengapa Memilih Farrasindo Perkasa?\nPenanganan Profesional: Tim kami terdiri dari tenaga ahli berpengalaman yang memahami kebutuhan setiap proyek. Dengan perawatan berkala pada alat, kami menjamin kinerja optimal di lapangan.\nPengalaman Tinggi: Berbekal pengalaman dalam berbagai proyek, kami mampu memberikan solusi terbaik untuk mendukung keberhasilan konstruksi Anda.\nPeralatan Lengkap dan Modern: Dari mini Concrete Pump hingga Batching Plant, semua alat kami dirancang untuk memenuhi kebutuhan konstruksi dengan efisiensi maksimal.\nHarga Kompetitif: Kami menyediakan layanan berkualitas tinggi dengan harga yang terjangkau, menjadikan Farrasindo Perkasa sebagai mitra terbaik untuk proyek Anda.",
    },
    {
      title:
        "Inovasi terbaru, Farrasindo Perkasa Group meluncurkan Mobile Batching Plant",
      categories: [],
      date: "2024-12-16T00:00:00.000Z",
      excerpt:
        "PT Farrasindo Perkasa Group meluncurkan Mobile Batching Plant sebagai solusi inovatif untuk proyek konstruksi modern di Indonesia.",
      slug: "inovasi-mobile-batching-plant-farrasindo-perkasa",
      author: "Farrasindo Group",
      image: imgArtikel12,
      description:
        "PT Farrasindo Perkasa Group sebagai salah satu perusahaan penyedia layanan konstruksi bangunan perbetonan yang modern, ikut andil dalam perkembangan industri konstruksi yang terus meningkat. Menyanggapi perkembangan tersebut serta permintaan pasar yang tinggi di lapangan, PT Farrasindo Perkasa Group memberikan solusi dengan terus meningkatkan inovasi terbarunya.\n\nPada tahun 2013, PT Farrasindo Perkasa Group memperkenalkan inovasi terbaru dan pertama di Indonesia, yaitu Mobile Batching Plant dengan kapasitas 0,5 meter kubik, sebuah terobosan yang dirancang untuk memenuhi kebutuhan proyek-proyek kecil dan menengah. Alat ini memungkinkan pencampuran beton langsung di lokasi dengan akurasi tinggi, mengurangi ketergantungan pada pengiriman beton dari pabrik, serta menghemat waktu dan biaya. Dengan dimensi yang kompak dan mudah dipindahkan, alat ini menjadi solusi ideal untuk proyek konstruksi di lokasi terpencil atau dengan akses terbatas.\n\nTak berhenti di situ, seiring dengan semakin banyaknya permintaan pasar, PT Farrasindo Perkasa Group meluncurkan kembali inovasi Mobile Batching Plant dengan kapasitas 1 meter kubik pada tahun 2023. Versi terbaru ini dirancang untuk menangani proyek dengan skala yang lebih besar tanpa mengingatkan dan kemudahan transportasi. Selain peningkatan kapasitas, alat ini dilengkapi dengan teknologi terkini, termasuk sistem kontrol otomatis dan pemantauan digital yang memungkinkan operator untuk memadukan kinerja dan kualitas beton secara real-time.\n\nMenurut pernyataan resmi dari manajemen PT Farrasindo Perkasa Group, inovasi ini bertujuan untuk menjawab tantangan konstruksi modern yang membutuhkan solusi cepat, fleksibel, dan ramah lingkungan. “Kami ingin memastikan bahwa setiap proyek, baik besar maupun kecil, memiliki akses ke alat yang dapat meningkatkan efisiensi dan kualitas pekerjaan,” ujar perwakilan perusahaan.\n\nPenggunaan Mobile Batching Plant berkapasitas 1 meter kubik ini diharapkan dapat mengurangi limbah material konstruksi dan meminimalkan emisi karbon, sejalan dengan komitmen perusahaan terhadap kepunahan lingkungan. Selain itu, teknologi ini juga membantu perusahaan untuk mematuhi standar internasional dalam kualitas beton yang diproduksi.\n\nDengan berbagai inovasi ini, PT Farrasindo Perkasa Group memperkuat posisinya sebagai pelopor solusi konstruksi yang modern dan efisien di Indonesia. Kehadiran Mobile Batching Plant ini memberikan harapan baru bagi pelaku industri konstruksi untuk terus berkembang dengan cara yang lebih cerdas dan berkelanjutan.",
    },
    {
      title:
        "Tanam 1000 pohon, Farrasindo Perkasa Group dan Fresh Beton Indonesia mendukung pelestarian lingkungan",
      categories: ["csr-environment"],
      date: "2024-12-14T00:00:00.000Z",
      excerpt:
        "PT Farrasindo Perkasa Group dan PT Fresh Beton Indonesia menanam 1000 pohon sebagai bagian dari program pelestarian lingkungan dan tanggung jawab sosial perusahaan.",
      slug: "tanam-1000-pohon-farrasindo-fresh-beton",
      author: "Farrasindo Group",
      image: imgArtikel13,
      description:
        "PT Farrasindo Perkasa Group bersama dengan PT Fresh Beton Indonesia melaksanakan program pelestarian lingkungan dengan menanam 1000 pohon sekaligus sebagai salah satu tanggung jawab sosial perusahaan terhadap lingkungan. Program ini merupakan bagian inisiatif dari #FarraCare, yang menyoroti komitmen perusahaan terhadap lingkungan dan pembangunan berkelanjutan.\n\nAcara penanaman pohon ini dilaksanakan bersamaan dengan HUT Farrasindo Perkasa Group yang ke-22 tahun, serta melibatkan seluruh karyawan perusahaan yang berada di wilayah Jabodetabek. Lokasi penanaman difokuskan pada kawasan yang membutuhkan penghijauan, terutama di wilayah risiko dengan erosi tinggi di Sukabumi.\n\nDalam berbagai hal, Direktur PT Farrasindo Group menyampaikan bahwa inisiatif ini bukan hanya bentuk perayaan, tetapi juga merupakan wujud nyata dari tanggung jawab perusahaan terhadap lingkungan. “HUT ke-22 ini menjadi momen penting bagi kami untuk berkontribusi lebih besar dalam menjaga keseimbangan alam. Kami ingin mewariskan warisan positif tidak hanya bagi industri, tetapi juga bagi lingkungan dan masyarakat,” ujarnya. Ia juga menambahkan bahwa inisiatif ini bertujuan untuk mengurangi dampak karbon dari aktivitas industri, sekaligus memberikan kontribusi nyata dalam menjaga keseimbangan ekosistem.\n\nPerwakilan dari PT Fresh Beton Indonesia juga menambahkan bahwa kegiatan ini merupakan bagian dari visi perusahaan untuk menciptakan dampak positif melalui inovasi dan aksi nyata. “Melalui #Farracare, kami berharap dapat menginspirasi lebih banyak pihak untuk bersama-sama menjaga lingkungan. Kami percaya bahwa kolaborasi antara industri dan masyarakat adalah kunci untuk keinginan,” katanya.\n\nProgram ini tidak hanya mendukung pelestarian lingkungan, tetapi juga menunjukkan bagaimana perusahaan besar dapat memainkan peran penting dalam menciptakan perubahan positif. Melalui program ini, diharapkan dapat menjadi inspirasi bagi pelaku industri lain untuk ikut serta dalam menjaga kelestarian alam di tengah pesatnya pembangunan.",
    },
    {
      title:
        "Meriahkan HUT RI ke-80, Farrasindo Group Gelar Lomba dan Kuliner Nusantara",
      categories: [],
      date: "2025-08-15T00:00:00.000Z",
      excerpt:
        "Dalam rangka menyambut Hari Ulang Tahun Kemerdekaan Republik Indonesia ke-80, Farrasindo Group mengadakan acara kebersamaan pada 15 Agustus 2025. Perayaan ini berlangsung meriah, dipenuhi semangat persatuan dan kegembiraan seluruh karyawan.",
      link: "/news/meriahkan-hut-ri-80-farrasindo-group-lomba-kuliner-nusantara",
      slug: "meriahkan-hut-ri-80-farrasindo-group-lomba-kuliner-nusantara",
      author: "Farrasindo Group",
      image: imgArtikel14,
      description:
        "Dalam rangka menyambut Hari Ulang Tahun Kemerdekaan Republik Indonesia ke-80, Farrasindo Group mengadakan acara kebersamaan pada 15 Agustus 2025. Perayaan ini berlangsung meriah, dipenuhi semangat persatuan dan kegembiraan seluruh karyawan.\n\nDengan mengenakan pakaian adat dan kebaya, para karyawan menampilkan nuansa budaya yang kental. Suasana semakin hangat ketika berbagai lomba tradisional dimulai, di antaranya:\n\n- Tarik Tambang – seru dan penuh semangat tim.\n- Panjat Pinang – mengundang tawa sekaligus menguji kerja sama.\n- Kait Galon – mengasah ketelitian dan strategi.\n- Ular Balon – menghadirkan keceriaan dan kebersamaan.\n\nSelain keseruan lomba, acara ini juga menghadirkan aneka kuliner khas UMKM lokal yang menambah semarak suasana. Para karyawan dapat menikmati berbagai hidangan, seperti sate, bakso, rujak, hingga martabak mini. Kehadiran UMKM ini bukan hanya menyajikan cita rasa Nusantara, tetapi juga menjadi bentuk dukungan Farrasindo Group terhadap pertumbuhan usaha kecil di sekitar.\n\nKebersamaan, sportivitas, dan rasa nasionalisme benar-benar tercermin dalam perayaan ini. Melalui semangat kemerdekaan, Farrasindo Group berharap seluruh karyawan semakin solid, penuh energi positif, dan bersama-sama melangkah maju demi kemajuan perusahaan serta bangsa.\n\nDirgahayu Republik Indonesia ke-80!\nMerdeka!",
    },
    {
      title: "Farrasindo Esport Club: Membangun Kebersamaan Lewat Game",
      categories: ["csr-employee"],
      date: "2025-11-10T00:00:00.000Z",
      excerpt:
        "Farrasindo Esport Club hadir sebagai wadah hiburan positif untuk mempererat kebersamaan karyawan melalui game Mobile Legends dan FIFA.",
      link: "/news/farrasindo-esport-club",
      slug: "farrasindo-esport-club",
      author: "Farrasindo Group",
      image: imgArtikel15,
      description:
        "Di Farrasindo Group, kebersamaan dan kekompakan tim adalah kunci utama dalam menunjang keberhasilan kerja. Tidak hanya diwujudkan melalui aktivitas kantor dan proyek, tetapi juga lewat kegiatan positif yang bisa dinikmati bersama. Salah satunya adalah dengan hadirnya Farrasindo Esport Club.\n\n**Game yang Dipilih: Mobile Legends & FIFA**\nFarrasindo Esport Club berfokus pada dua game populer yang mudah dimainkan bersama, yaitu:\n\n- **Mobile Legends** – game strategi 5 vs 5 yang mengajarkan pentingnya kerjasama tim, komunikasi, serta kemampuan membaca situasi.\n- **FIFA** – game olahraga yang memberikan pengalaman bermain sepak bola virtual, melatih konsentrasi, strategi, sekaligus menjadi sarana hiburan bersama.\n\n**Tujuan Dibentuknya Esport Club**\nBerbeda dengan klub e-sport profesional, Farrasindo Esport Club tidak ditujukan untuk kompetisi besar atau mencari prestasi tertentu. Fokus utama klub ini adalah:\n\n- Membangun kebersamaan antar karyawan lewat permainan yang seru dan menyenangkan.\n- Menguatkan kekompakan tim di luar rutinitas kerja.\n- Menjadi sarana refreshing yang positif setelah aktivitas padat sehari-hari.\n\n**Lebih Dekat, Lebih Kompak**\nDengan adanya Farrasindo Esport Club, diharapkan hubungan antar karyawan semakin erat, komunikasi lebih cair, dan semangat kerja tim pun semakin solid. Karena di balik setiap permainan, ada nilai kebersamaan dan kekompakan yang dapat dibawa kembali ke lingkungan kerja.",
    },
    {
      title:
        "Farrasindo Group Rayakan Ulang Tahun ke-24 dengan Semangat “Stronger Together”",
      categories: [],
      date: "2025-12-03",
      excerpt:
        "Farrasindo Group merayakan ulang tahun ke-24 dengan tema “Stronger Together”, menghadirkan rangkaian acara penuh kebersamaan, apresiasi, dan rasa syukur.",
      link: "/news/farrasindo-group-ulang-tahun-24-stronger-together",
      slug: "farrasindo-group-ulang-tahun-24-stronger-together",
      author: "Farrasindo Group",
      image: imgArtikel16,
      description:
        "Perjalanan panjang selama 24 tahun menjadi momen penuh makna bagi Farrasindo Group, perusahaan yang dikenal sebagai penyedia solusi terdepan di industri beton dan alat berat. Tahun ini, perayaan ulang tahun ke-24 digelar dengan tema “Stronger Together”, mencerminkan semangat kebersamaan dan kekuatan kolektif yang telah membawa perusahaan ini terus bertumbuh hingga hari ini.\n\nAcara berlangsung meriah dengan berbagai rangkaian kegiatan, dimulai dari pemotongan tumpeng yang menjadi simbol rasa syukur atas perjalanan Farrasindo Group sekaligus peresmian dua anak perusahaan baru, yaitu Nafcon Konstruksi dan SIMI Sport Club. Keduanya menjadi langkah strategis dalam memperluas kiprah Farrasindo Group menuju masa depan yang lebih dinamis.\n\nMomen perayaan juga diisi dengan tausiyah dan doa bersama Ustadz Maulana, yang menambah suasana khidmat dan penuh makna. Tidak hanya itu, kegiatan berbagi kebahagiaan dengan anak yatim turut menjadi bagian penting dari acara, sebagai wujud kepedulian sosial dan rasa syukur atas setiap pencapaian yang telah diraih.\n\nSebagai bentuk apresiasi, Farrasindo Group juga memberikan penghargaan kepada karyawan terbaik dari seluruh cabang, menegaskan bahwa sumber daya manusia adalah fondasi utama keberhasilan perusahaan. Suasana semakin meriah dengan pembagian doorprize menarik, mulai dari jam tangan, televisi, emas, hingga hadiah utama berupa motor listrik dan umroh.\n\nMenambah kehangatan acara, berbagai hidangan khas favorit seperti bakso, siomay, es doger, kopi, dan popcorn turut disajikan, menciptakan suasana kebersamaan yang hangat dan penuh keceriaan.\n\nPerayaan ulang tahun ke-24 ini menjadi penegasan komitmen Farrasindo Group untuk terus berinovasi, memperkuat kolaborasi, dan memberikan kontribusi nyata bagi industri konstruksi di Indonesia. Dengan semangat “Stronger Together”, Farrasindo Group melangkah mantap menuju masa depan yang lebih kuat, solid, dan penuh keberkahan.",
    },
    {
      title:
        "Farrasindo Group Ikut Serta Menyalurkan Bantuan Donasi untuk Bencana di Sumatera",
      categories: [],
      date: "2025-12-10T00:00:00.000Z",
      excerpt:
        "Farrasindo Group menunjukkan komitmen kepeduliannya terhadap sesama dengan menyalurkan bantuan kemanusiaan untuk warga yang terdampak banjir bandang di Aceh, Sumatera Utara, dan Sumatera Barat",
      link: "/news/farrasindo-group-donasi-bencana-sumatera",
      slug: "farrasindo-group-donasi-bencana-sumatera",
      author: "Farrasindo Group",
      image: FarrasindoDonationDisasterSumatra,
      description: `Farrasindo Group menunjukkan komitmen kepeduliannya terhadap sesama dengan menyalurkan bantuan kemanusiaan untuk warga yang terdampak banjir bandang di Aceh, Sumatera Utara, dan Sumatera Barat. Melalui aksi solidaritas ini, Farrasindo Group menggalang donasi dan menghimpun bantuan kebutuhan darurat yang kemudian didistribusikan ke daerah yang paling membutuhkan.

    Bantuan yang telah dikumpulkan berupa keperluan makanan pokok, sembako, pembalut wanita, obat-obatan, dan kebutuhan medis lainnya. Seluruh bantuan ini berhasil dikumpulkan sebanyak 449 koli oleh seluruh karyawan internal perusahaan yang turut peduli terhadap kondisi bencana.

    Dalam proses penyalurannya, Farrasindo Group bekerja sama dengan Badan Nasional Penanggulangan Bencana (BNPB) sebagai mitra resmi pendistribusian bantuan. Kolaborasi ini memastikan seluruh bantuan dapat tersalurkan dengan tepat sasaran dan menjangkau warga di titik-titik yang sulit diakses.

    Pihak BNPB juga menyampaikan apresiasi yang mendalam kepada seluruh masyarakat dan donatur yang telah mendukung penanganan bencana. “BNPB mengucapkan terima kasih atas kepedulian Farrasindo Group dan semua pihak yang telah memberikan bantuan bagi warga terdampak. Dukungan ini sangat berarti dalam upaya penanggulangan dan pemulihan pascabencana,” ujar Pak Diaz, selaku perwakilan BNPB.

    Melalui aksi ini, Farrasindo Group berharap langkah ini dapat memberikan dukungan nyata bagi para korban, memberikan keringanan bagi masyarakat yang terdampak sekaligus menjadi wujud solidaritas dalam menghadapi situasi darurat. "Saya mewakili seluruh karyawan Farrasindo Group, kami berharap semoga bantuan ini dapat bermanfaat bagi warga yang terdampak bencana", ujar Pak E Suherman, selaku Direksi Farrasindo Group.

    Dengan tersalurkannya bantuan ini, Farrasindo Group semakin menegaskan komitmennya dalam mendukung aksi-aksi kemanusiaan serta mendorong kolaborasi lintas sektor untuk membantu masyarakat yang membutuhkan.

    "Bantuan kecil dari kita bisa jadi harapan besar bagi mereka"
    `,
    },
    {
      title:
        "Farrasindo Group Gelar Rapat Kerja Nasional (RAKERNAS) dan Apresiasi Karyawan di Bali",
      categories: [],
      date: "2025-12-26T00:00:00.000Z",
      excerpt:
        "Farrasindo Group sukses menyelenggarakan Rapat Kerja Nasional (Rakernas) 2026 dan Apresiasi Karyawan di Bali, menyatukan visi dan memperkuat strategi bisnis untuk masa depan.",
      link: "/news/farrasindo-group-rakernas-apresiasi-karyawan-di-bali",
      slug: "farrasindo-group-rakernas-apresiasi-karyawan-di-bali",
      author: "Farrasindo Group",
      image: imgArticleGlobalMeeting2026,
      description: `Farrasindo Group sukses menyelenggarakan Rapat Kerja Nasional (Rakernas) 2026 yang berlangsung pada 28–31 Januari 2026 di Bali. Kegiatan ini menjadi momentum strategis bagi seluruh karyawan dan divisi di bawah Farrasindo Group untuk menyatukan visi, menyelaraskan strategi, serta memperkuat arah bisnis perusahaan dalam menghadapi tantangan industri ke depan.

    Mengusung semangat One Vision Forward, Rakernas 2026 dirancang sebagai ruang kolaborasi lintas cabang dan divisi untuk memastikan setiap langkah bisnis berjalan selaras, terintegrasi, dan berkelanjutan.

    Hari Pertama: Penyelarasan Strategi Lintas Cabang dan Divisi
    Hari pertama Rakernas diisi dengan sesi presentasi dari seluruh cabang dan unit perusahaan lainnya, meliputi PT Farrasindo Perkasa, PT Inti Jaya Industri, PT Citi Crane Perkasa, Divisi IT, serta Divisi Marcomm.

    Dalam sesi ini, masing-masing unit memaparkan capaian kinerja, tantangan yang dihadapi, serta rencana pengembangan strategis guna mendukung penguatan bisnis grup secara menyeluruh. Diskusi berjalan dinamis dan konstruktif, mencerminkan komitmen Farrasindo Group untuk membangun sinergi yang solid dan konsisten antar lini usaha.

    Rakernas hari pertama menegaskan pentingnya kolaborasi sebagai fondasi utama dalam mencapai tujuan bersama serta memperkuat daya saing perusahaan di tengah dinamika industri yang terus berkembang.

    Hari Kedua: Evaluasi Kinerja dan Penguatan Operasional
    Memasuki hari kedua, rangkaian presentasi dilanjutkan oleh seluruh plant dan transport PT Fresh Beton Indonesia, disusul oleh PT Gunung Bumi Perkasa, PT Simi Reflexology, PT Farracon Precast Industri, PT Nafcon, serta unit operasional dan divisi pendukung lainnya, termasuk Purchasing & Logistik, HRD & HSE, Finance & Accounting, dan Audit.

    Fokus utama sesi ini adalah pemaparan kinerja, evaluasi operasional, serta rencana pengembangan masing-masing unit dalam mendukung efektivitas dan keberlanjutan bisnis grup secara menyeluruh.

    Melalui sinergi lintas perusahaan dan divisi, Farrasindo Group semakin memantapkan keselarasan strategi serta memperkuat komitmen bersama untuk menghadapi tantangan industri di masa depan, sejalan dengan semangat One Vision Forward.

    Employee Appreciation Night: Apresiasi untuk Karyawan Terbaik Farrasindo Group
    Sebagai penutup rangkaian Rakernas 2026, Farrasindo Group menggelar Employee Appreciation Night sebagai bentuk apresiasi atas dedikasi, loyalitas, dan kerja keras seluruh karyawan yang telah berkontribusi bagi pertumbuhan perusahaan.

    Malam apresiasi ini menjadi momen kebersamaan untuk merayakan pencapaian, mempererat kolaborasi, serta memberikan penghargaan kepada insan-insan terbaik Farrasindo Group.

    Penghargaan yang diberikan meliputi:
    1. Cabang Farrasindo Terbaik
    2. Plant Fresh Beton Terbaik
    3. Sales Beton Fresh Beton Terbaik
    4. Sales Pompa Beton Retail Terbaik
    5. Sales Pompa Beton Big Project Terbaik
    6. Sales dengan Masa Kerja Lebih dari 10 Tahun

    Penghargaan ini menjadi simbol apresiasi perusahaan atas kontribusi nyata para karyawan dalam mendorong pertumbuhan dan keberhasilan Farrasindo Group.

    Melangkah Maju Bersama
    Melalui Rapat Kerja Nasional 2026 dan Employee Appreciation Night, Farrasindo Group menegaskan komitmennya untuk terus melangkah maju secara terstruktur, adaptif, dan berkelanjutan. Dengan sinergi yang semakin kuat dan semangat One Vision Forward, Farrasindo Group optimis menghadapi masa depan dan terus menciptakan pertumbuhan yang solid bagi perusahaan, karyawan, serta seluruh pemangku kepentingan.
  `,
    },
    {
      title:
        "Farrasindo Group Rutin Bagikan Parcel Lebaran untuk Karyawan Setiap Tahun",
      categories: [],
      date: "2026-04-02T00:00:00.000Z",
      excerpt:
        "Menjelang Hari Raya Idulfitri 1447 H, Farrasindo Group kembali melanjutkan tradisi tahunan dengan membagikan parcel lebaran kepada seluruh karyawan. Kegiatan ini merupakan bentuk apresiasi perusahaan terhadap dedikasi dan kerja keras tim yang telah berkontribusi bagi pertumbuhan Farrasindo Group sepanjang tahun.",
      link: "/news/farrasindo-group-bagikan-parcel-lebaran-untuk-karyawan",
      slug: "farrasindo-group-bagikan-parcel-lebaran-untuk-karyawan",
      author: "Farrasindo Group",
      image: imgArtikelParcel,
      description: `Menjelang Hari Raya Idulfitri, banyak perusahaan memanfaatkan momen ini untuk mempererat hubungan dengan para karyawan. Hal yang sama juga dilakukan oleh Farrasindo Group, yang setiap tahunnya secara konsisten membagikan parcel Lebaran kepada seluruh karyawan sebagai bentuk apresiasi dan rasa terima kasih atas dedikasi mereka.

Tradisi pembagian parcel Lebaran ini telah menjadi salah satu budaya perusahaan yang selalu dinantikan oleh para karyawan menjelang libur Lebaran.

Tradisi Tahunan Menjelang Libur Lebaran
Kegiatan pembagian parcel Lebaran biasanya dilaksanakan beberapa hari sebelum libur Idulfitri dimulai. Parcel tersebut berisi berbagai kebutuhan khas Lebaran yang dapat dinikmati bersama keluarga di rumah.

Melalui kegiatan ini, Farrasindo Group ingin menghadirkan kebahagiaan kecil bagi para karyawan yang telah bekerja keras sepanjang tahun. Selain itu, parcel Lebaran juga menjadi simbol perhatian perusahaan terhadap kesejahteraan dan kebahagiaan tim yang menjadi bagian penting dari perjalanan perusahaan.

Bentuk Apresiasi kepada Karyawan
Bagi Farrasindo Group, karyawan merupakan aset utama perusahaan. Keberhasilan berbagai proyek dan kegiatan operasional perusahaan tidak terlepas dari kontribusi dan kerja sama seluruh tim.

Oleh karena itu, pemberian parcel Lebaran menjadi salah satu bentuk apresiasi nyata dari perusahaan kepada para karyawan. Tradisi ini juga menjadi cara sederhana namun bermakna untuk menunjukkan rasa terima kasih atas dedikasi, loyalitas, dan kerja keras yang telah diberikan.

Mempererat Kebersamaan di Lingkungan Kerja
Selain sebagai bentuk apresiasi, kegiatan ini juga menjadi momen untuk mempererat rasa kebersamaan di lingkungan kerja. Suasana hangat dan penuh kebersamaan terlihat saat para karyawan menerima parcel Lebaran yang dibagikan oleh perusahaan.

Momen seperti ini menjadi pengingat bahwa hubungan antara perusahaan dan karyawan bukan hanya sekadar hubungan profesional, tetapi juga bagian dari keluarga besar yang saling mendukung.

Komitmen Farrasindo Group dalam Membangun Budaya Perusahaan
Melalui tradisi pembagian parcel Lebaran yang rutin dilakukan setiap tahun, Farrasindo Group menunjukkan komitmennya dalam membangun budaya perusahaan yang positif, penuh kepedulian, dan menghargai kontribusi setiap individu.

Perusahaan berharap tradisi ini dapat terus dipertahankan di masa mendatang sebagai bagian dari nilai kebersamaan dan semangat berbagi yang menjadi fondasi dalam perjalanan Farrasindo Group.

Dengan semangat Ramadan yang penuh berkah, Farrasindo Group juga mengucapkan selamat menyambut Hari Raya Idulfitri kepada seluruh karyawan dan keluarga. Semoga kebahagiaan, kesehatan, dan keberkahan selalu menyertai kita semua.`,
    },
  ],
  en: [
    {
      title: "One Package: Concrete Pump and Ready-Mix Concrete",
      categories: [],
      date: "2025-07-25T00:00:00.000Z",
      excerpt:
        "In the world of construction, time is a valuable asset. However, many casting projects often face challenges.",
      link: "/news/one-package-concrete-pump-ready-mix",
      slug: "one-package-concrete-pump-ready-mix",
      image: imgArtikel1,
      author: "Farrasindo Group",
      description:
        "One Package: Concrete Pump and Ready-Mix Concrete\nIn the world of construction, time is a valuable asset. However, many casting projects often face challenges such as material delays, time-consuming casting processes, and inflated operational costs. The causes are varied, ranging from late concrete delivery and pump equipment not meeting requirements, to a lack of coordination between service providers.\n\nThese issues not only slow down work but also risk lowering the quality of the casting results, as concrete must be used within a certain timeframe to maintain its quality.\n\nThe Solution is Easy! Just Order 1 Package of Concrete Pump & Ready-Mix Concrete\nFarrasindo Perkasa presents a practical solution for those who want fast, efficient, and quality casting: The 1 Package of Concrete Pump & Ready-Mix Concrete.\n\nBy ordering this package, you receive:\n- Timely delivery of ready-mix concrete according to the casting schedule.\n- A concrete pump that is immediately stand-by at the location to speed up the concrete distribution process.\n- Integrated coordination between the concrete delivery team and the pump operator, ensuring smooth and seamless work.\n\nAdvantages of Ordering This Package\n- Time-Saving: Concrete is pumped directly to the casting point without the need for time-consuming manual processes.\n- Cost Efficiency: Reduces the risk of concrete waste and additional costs due to delays.\n- Maintained Quality: Concrete is used within the optimal duration, ensuring it meets project standards.\n- Easier Coordination: A single provider for two needs simultaneously minimizes miscommunication.\n\nFor concrete transport vehicles, 3 types of mixer trucks are available:\n- Mini Concrete (3 m³) – Suitable for small road access or small-scale volume casting.\n- Standard Truck Mixer (7–12 m³) – Used for medium to large-scale projects.\n- Truck Mixer Self Diesel Engine – A portable mixer powered by a diesel engine, flexible for use on project sites without relying on external electricity.\n\nVarious Types of Concrete Pumps Available\nFarrasindo Perkasa provides a variety of concrete pump options tailored to project needs, including:\n- Mini Boom 15–17 M\n- Mini Long Boom 18–21 M\n- Standard Boom 24 M\n- Semi Long Boom 26 M\n- Long Boom 27–30 M\n- Super Long Boom 33–36 M\n- Double Super Long Boom 37–40 M\n- Extra Double Super Long Boom 41–60 M",
    },
    {
      title:
        "Farrasindo Perkasa Holds Blood Donation Drive with PMI Tangerang, A Real Manifestation of Social Care",
      categories: ["csr-employee"],
      date: "2025-07-15T00:00:00.000Z",
      excerpt:
        "In the spirit of togetherness and care for others, Farrasindo Perkasa held a blood donation drive activity.",
      link: "/news/farrasindo-blood-donation-drive-with-pmi",
      slug: "farrasindo-blood-donation-drive-with-pmi",
      author: "Farrasindo Group",
      image: imgArtikel2,
      description:
        "Farrasindo Perkasa Holds Blood Donation Drive with PMI Tangerang, A Real Manifestation of Social Care for Others\nIn the spirit of togetherness and care for others, Farrasindo Perkasa held a blood donation drive in collaboration with the Indonesian Red Cross (PMI) of Tangerang Regency, on Thursday, July 10, 2025, from 09.00 to 12.00 WIB. Located at the Farrasindo Group head office on the 1st floor, this event is a tangible form of the company's commitment to supporting humanitarian efforts.\n\nCarrying the theme “Let’s Share Safety Together,” the blood donation activity was open to all employees within Farrasindo Perkasa. The enthusiasm of the participants was evident from the morning, as donors started arriving to register and undergo health checks by the PMI medical team.\n\nThe certificate of appreciation from Farrasindo Group to the PMI Tangerang Regency team (from left to right) Zikrullah Kumar, Eka Januarsa, and Adelia Novitasari was handed over by Farrasindo Perkasa Marketing Director, Evitha Annisa (center right), accompanied by Anjar Prambudi (far right) as the Blood Donation Activity Chairman and Antonius Trianto (second from left) as the HRD Manager. This activity is part of the #Farracare program, as a tangible manifestation of Farrasindo Perkasa's care for others.\n“The hope is that this activity can be done routinely to help those in need, because one drop of blood can save three lives,” said Adelia Novitasari from PMI, who was supervising the health check process at the time.\n\nSustainable Social Commitment\nAs part of the Corporate Social Responsibility (CSR) program through the #Farracare initiative, Farrasindo Perkasa not only focuses on business development and professional services but also contributes to the community through various social activities that bring positive impact.\n\n“This activity is part of our CSR program. Through blood donation, we want to make a direct contribution to the community and, of course, support the humanitarian work of PMI,” said Farrasindo Perkasa Marketing Director, Evitha Annisa.\n\nTangible Benefits for Health and Humanity\nBesides helping others, blood donation also brings various health benefits for the donor, ranging from maintaining heart health, increasing red blood cell production, to detecting serious diseases earlier. It is no wonder many participants expressed happiness at being able to participate, not only helping others but also maintaining their own health.\n\nFarrasindo Group employees also took part in the blood donation drive held with PMI Tangerang Regency.\nFarrasindo Perkasa believes that activities like this are not just ceremonial events, but part of an effort to build long-term solidarity and culture. In a warm and spirited atmosphere, the event concluded with smiles from the donors and a sense of gratitude for being part of a noble humanitarian action.\n\nFarrasindo Perkasa is committed to continuing to present other social programs that directly benefit the community. Farrasindo Perkasa's success is not only realized through business achievements but also through the humanitarian values that continue to be brought to life through concrete actions.",
    },
    {
      title: "Get to Know the Wheel Loader",
      categories: [],
      date: "2025-06-13T00:00:00.000Z",
      excerpt:
        "A wheel loader is one of the most popular heavy equipment machines and is widely used in various sectors.",
      link: "/news/get-to-know-the-wheel-loader",
      slug: "get-to-know-the-wheel-loader",
      author: "Farrasindo Group",
      image: imgArtikel3,
      description:
        "Get to Know the Wheel Loader\nA wheel loader is one of the most popular heavy equipment machines and is widely used in various industrial sectors. With its shape equipped with a bucket at the front, the wheel loader is designed to move large quantities of material quickly and efficiently.\n\nWhat is a Wheel Loader?\nA wheel loader is a wheeled heavy equipment machine that functions to load, move, and transport materials such as soil, sand, gravel, coal, and industrial waste. Compared to other heavy equipment, the wheel loader excels in its high mobility in the work area and good maneuverability even in confined spaces.\n\nUses of Wheel Loaders in Various Construction Fields\nWheel loaders are often used to transport building materials such as sand and cement. Their function is very important in the preparation and cleanup process of project areas.\n\nMining\nIn the mining industry, wheel loaders are used to move excavated materials such as coal or metal ore from the mining location to hauling trucks.\n\nPlantations and Agricultural Tools\nThey are also utilized to transport fertilizer, harvested crops, and clean up agricultural land areas.\n\nWaste Processing and Recycling\nWheel loaders assist in the transfer and arrangement of waste materials for easier reprocessing.\n\nPorts and Logistics\nAt ports, wheel loaders are useful for moving bulk cargo and assisting with loading and unloading activities.\n\nSelling Wheel Loaders at Farrasindo\nGiven the wide need for wheel loaders, it is important to choose the right equipment and a trusted service. Farrasindo Perkasa is here as a solution for those who need quality wheel loaders, both for purchase and rental. \n\nWe provide various types and capacities of wheel loaders ready for use for all your project needs. With over 20 years of experience, Farrasindo guarantees prime units, prompt technical support, and professional after-sales service.\n\nNeed a wheel loader for your project?\nContact Farrasindo now and find the best heavy equipment solution for all your needs!",
    },
    {
      title:
        "One Machine, Three Functions: The Superiority of Batchpump from Farrasindo",
      categories: [],
      date: "2025-06-13T00:00:00.000Z",
      excerpt:
        "Farrasindo Perkasa has expanded its service reach by opening 7 strategic branches across various regions in Indonesia.",
      slug: "superiority-of-farrasindo-batchpump",
      author: "Farrasindo Group",
      image: imgArtikel4,
      description:
        "One Machine, Three Functions: The Superiority of Batchpump from Farrasindo\nIn the world of modern construction, speed and work efficiency are key to completing projects on time and within budget. To meet this challenge, Farrasindo Perkasa introduces Batchpump, a 3-in-1 innovation that combines Batching, Mixing, and Pumping functions in a single machine unit.\n\nWhat is a Batchpump?\nBatchpump is a portable, multifunctional machine that can mix and pump concrete directly on the project site. Unlike conventional methods that require separate tools, a batching plant, a mixer truck, and a concrete pump, Batchpump integrates everything into one process sequence.\n\nWith its flexible capabilities and compact design, Batchpump is very suitable for small to medium-scale projects, especially in areas difficult to reach by large trucks or ready-mix concrete.\n\nThree Main Functions of Batchpump\nBatching\nBatchpump can measure and weigh the composition of concrete materials according to project needs.\n\nMixing\nThe mixing process is done directly within the unit to produce homogeneous concrete under controlled conditions.\n\nPumping\nOnce mixed, the concrete is pumped directly to the casting area without the need for additional assistance tools.\n\nAdvantages of Batchpump from Farrasindo Perkasa\n✅ Efficient & Time-Saving\nBatchpump shortens the process from batching to pumping in one single piece of equipment, reducing waiting time and increasing work speed in the field.\n\n✅ Suitable for Hard-to-Reach Locations\nWith its compact design and high mobility, Batchpump can reach project locations inaccessible to large mixer trucks.\n\n✅ More Cost-Effective\nWithout the need to separate a batching plant, mixer truck, and concrete pump, you can significantly save on operational expenses.\n\n✅ Flexible Operations\nBatchpump is ideal for small to medium-scale projects, such as residential housing, shop-houses (ruko), water channels, neighborhood roads, and even plantation and mining projects.\n\nAs an original product from Farrasindo, Batchpump has proven reliable for use in various construction projects throughout Indonesia, from village road construction, warehouse floor casting, to housing projects in remote areas. This innovation is the right solution when ready-mix concrete supply is difficult to access or inefficient in terms of logistics.\n\nWant to Know More?\nContact our team now for a product demo, rental prices, or Batchpump purchase.",
    },
    {
      title:
        "Farrasindo Sharing in Ramadan: Care for Orphans and the Surrounding Community",
      categories: ["csr-society"],
      date: "2025-03-20T00:00:00.000Z",
      excerpt:
        "Farrasindo shared joy during the month of Ramadan by providing assistance to orphans and the surrounding community.",
      slug: "farrasindo-sharing-ramadan-orphans",
      author: "Farrasindo Group",
      image: imgArtikel5,
      description:
        "Farrasindo Sharing in Ramadan: Care for Orphans and the Surrounding Community\n\nRamadan is a blessed time, where Muslims around the world fast and increase their acts of worship. In the spirit of this holy month, PT Farrasindo, a company known for its commitment to sharing and creating a positive impact on society, held a heartwarming social event: sharing with orphans in the company's surrounding neighborhood.\n\nThe sharing event took place in a warm atmosphere at the Farrasindo head office and was attended by various parties, including the local Head of RT 08 and the President Director of Farrasindo, Evitha Putri. This activity became a special moment that showed Farrasindo's focus is not only on business development but also on social development and care for the community.\n\nSharing Event with Orphans\nDuring this sharing event, Farrasindo provided assistance in the form of basic food packages (sembako) and gifts to orphans and less fortunate families around the company. This activity was carried out with the aim of easing their burden during the month of Ramadan, especially amidst challenging conditions.\n\nEvitha Putri, as the President Director of Farrasindo, stated in her speech that this event is a form of the company's social responsibility to provide direct benefits to the surrounding community. “We want to bring happiness and share blessings with the orphans and less fortunate families. We hope this can help them go through Ramadan with joy,” she said.\n\nPresence of the Head of RT 08\nThe Head of RT 08, who also attended the event, expressed high appreciation to Farrasindo for the company's attention and care for the local residents, especially the orphans. “We are very grateful to Farrasindo, who always cares for the residents in our area, especially the orphans. This is a real example of a company that not only focuses on business but also has a high social spirit,” said the Head of RT 08.\n\nRoutine Annual Event\nThis sharing event is not new to Farrasindo. Every year, the company routinely holds similar activities at its branches spread across various regions. This demonstrates Farrasindo's commitment to continuously play an active role in creating a positive impact on society. Not only during Ramadan, but Farrasindo is also involved in various social activities throughout the year, both in the form of educational and health assistance, and support for communities in need.\n\nStrengthening the Spirit of Sharing in Ramadan\nThis sharing activity is expected to inspire many parties to increase their sense of care for others, especially those who need a helping hand. In this blessed month of Ramadan, Farrasindo shows that the company's success is not only measured economically but also by how they can contribute positively to society.\n\nWith more companies adopting this principle of social responsibility, it is hoped that a more caring, sharing, and mutually supportive society can be created, thus leading to a more harmonious and prosperous environment for all.\n\nFarrasindo remains committed to running social programs that benefit the community, especially during Ramadan, as a tangible form of sustainable Corporate Social Responsibility (CSR).",
    },
    {
      title:
        "Employee Wellness Day: Farrasindo Collaborates with Srengseng Public Health Center for Employee Health Screening",
      categories: ["csr-employee"],
      date: "2025-02-14T00:00:00.000Z",
      excerpt:
        "Farrasindo Perkasa Group held an Employee Wellness Day event with Srengseng Public Health Center for employee health checks.",
      slug: "employee-wellness-day-farrasindo-health-screening",
      author: "Farrasindo Group",
      image: imgArtikel6,
      description:
        "Employee Wellness Day: Farrasindo Collaborates with Srengseng Public Health Center for Employee Health Screening\n\nPrioritizing employee health, Farrasindo Perkasa Group held an Employee Wellness Day event.\n\nOn February 14, 2024, Farrasindo Perkasa, in collaboration with the Srengseng Public Health Center (Puskesmas Srengseng), organized an Employee Wellness Day activity aimed at maintaining the health and well-being of its employees. The event was attended by more than 150 Farrasindo Perkasa employees, who enthusiastically participated in the various health screenings provided.\n\nGoal and Benefits of the Activity\nThe Employee Wellness Day was organized with the goal of providing health check facilities for all employees, as well as providing important education on the importance of maintaining body health. This activity serves not only as early detection of health problems but also as a highly beneficial preventive measure to create a healthy and productive work environment.\n\nTypes of Health Screenings Conducted\nIn this activity, various types of health checks were performed to gain a comprehensive understanding of the body's condition, including:\n\nHeight and Weight Measurement: This check aims to calculate the employee's Body Mass Index (BMI). BMI is a measure used to determine whether a person has an ideal weight or is at risk of health issues due to being overweight or underweight.\n\nBlood Pressure Check: One of the most critical checks is blood pressure. This check is performed to detect potential hypertension or high blood pressure, which can be dangerous if not addressed promptly.\n\nBlood Sugar Check: This blood sugar test is conducted to monitor glucose levels in the blood, for the early detection of possible disorders such as diabetes. This activity also serves as a preventative step for employees to maintain healthy eating habits and lifestyles.\n\nCholesterol Check: The cholesterol check is useful for determining the levels of total cholesterol, LDL (bad cholesterol), and HDL (good cholesterol) in the body. Detecting high cholesterol levels is very important for preventing heart and blood vessel diseases.\n\nTB (Tuberculosis) Screening: Puskesmas Srengseng also conducted TB screening to detect symptoms or indications of this contagious disease. With early detection, the spread of TB can be prevented and treated more quickly.\n\nPositive Impact Activity\nThe Employee Wellness Day held on February 14, 2024, at Farrasindo Perkasa is a positive step to increase the awareness and health of employees. By involving Puskesmas Srengseng in health checks covering various important aspects, the company demonstrates its commitment to the health and well-being of its employees. Hopefully, activities like this can continue and become a company culture, focusing not only on performance but also on the health and happiness of employees.",
    },
    {
      title: "RAKERNAS 2025: Farrasindo Carries the Theme 'Journey to the Top'",
      categories: ["csr-employee"],
      date: "2025-03-06T00:00:00.000Z",
      excerpt:
        "Farrasindo Group held the National Work Meeting (RAKERNAS) 2025 with the theme 'Journey to the Top'.",
      slug: "rakernas-2025-journey-to-the-top",
      author: "Farrasindo Group",
      image: imgArtikel7,
      description:
        "RAKERNAS 2025: Farrasindo Carries the Theme 'Journey to the Top'\n\nFarrasindo Group recently held its National Work Meeting (RAKERNAS) 2025 with the theme 'Journey to the Top'. The two-day event provided an opportunity for all departments and branches of Farrasindo Group across Indonesia to conduct an in-depth evaluation of achievements and challenges faced throughout 2024, and to formulate strategic steps that will lead the company to greater success in 2025.\n\nOn this occasion, Farrasindo Group also introduced its new President Director, Evitha Putri Annisa, who previously served as the Head of Marketing Communication and Growth. This appointment is a significant step in strengthening the leadership structure and preparing the company for future challenges.\n\nThe event was attended by all top executives, branch managers, and sales representatives of Farrasindo Group, comprising PT Farrasindo Perkasa, PT Fresh Beton Indonesia, PT Farracon Precast Industi, PT Gunung Bumi Perkasa, PT Citi Pump Perkasa, and CV. Simi Pijat Refleksi.\n\nDay One and Two: Evaluation of 2024 Achievements and Challenges\nOn the second day of RAKERNAS 2025, the main agenda was the evaluation of and challenges faced by each department and branch of every business unit during 2024. Each representative from the departments and branches was given the opportunity to present their performance across various aspects, including sales, operations, product development, and innovations that took place over the past year.\n\nNot only achievements, but the presentations also highlighted the challenges that confronted the teams throughout 2024. This open discussion allowed each department to share experiences regarding obstacles encountered, as well as the solutions attempted to overcome them. Thus, the event became a very useful forum for everyone to learn from each other and find new approaches to face similar challenges in the future.\n\nThe first and second days of RAKERNAS were also marked by in-depth discussions on how the company can improve operational efficiency and optimize existing results. This served as a strong foundation for planning strategic steps in the coming year.\n\nAppreciation Night: Awards and Entertainment Evening\nAfter two full days of discussions, the RAKERNAS 2025 event concluded with an awards night full of cheer on the second day. This evening was an occasion for Farrasindo Perkasa to recognize employees who had made the best contributions throughout 2024.\n\nVarious awards were presented that night, such as Best Sales, Best Branch, and other categories that acknowledged hard work and dedication. The awards aimed to motivate all employees to continue striving and giving their best in the following year.\n\nIn addition to the awards, the evening was also filled with enjoyable entertainment. Employees had the chance to participate in various exciting games that fostered team camaraderie, as well as a group singing session that created an atmosphere full of laughter and happiness. This culminating event concluded with a communal dinner that strengthened relationships among employees and provided an opportunity for informal conversations.\n\nThe RAKERNAS 2025 of Farrasindo Perkasa with the theme 'Journey to the Top' was not just an evaluation event but also a significant momentum for the company to plan strategic steps towards peak success. Through the discussion of 2024 achievements and challenges, and the recognition of the best employees, Farrasindo Perkasa is increasingly ready to face new challenges in 2025 and continue to optimize its performance with a spirit of collaboration and innovation.",
    },
    {
      title: "Celebrating its 23rd Anniversary, Farrasindo…",
      categories: [],
      date: "2025-02-07T00:00:00.000Z",
      excerpt:
        "Celebrating its 23rd Anniversary, Farrasindo Encourages All Employees to Appreciate Each Other.",
      slug: "celebrating-23rd-anniversary-farrasindo-appreciation",
      author: "Farrasindo Group",
      image: imgArtikel8,
      description:
        "Celebrating its 23rd Anniversary, Farrasindo Encourages All Employees to Appreciate Each Other\n\n2024 is a special moment for Farrasindo, a company that has been operating in the industry for 23 years. In celebration of its 23rd Anniversary, Farrasindo adopted the theme *Great Team, Great Work*, which reflects the importance of collaboration and team spirit in achieving success. This theme also encourages all employees to appreciate the collaboration in the company's long journey over 23 years.\n\nA Meaningful Event with Various Activities\nThis year's anniversary celebration was not just marked by ceremonies, but also filled with various meaningful activities. One of the most touching moments was the distribution of basic necessities (sembako) to orphans. Farrasindo demonstrated its care for others by providing assistance to orphans in the company's surrounding neighborhood. This is a tangible form of the company's social responsibility, which is constantly concerned with community welfare.\n\nFurthermore, the presentation of employee awards was also a key part of the celebration. Farrasindo honored employees who had shown outstanding dedication in their work. These awards aimed to motivate every individual to continue giving their best and be part of a solid and productive team.\n\nCommunal Dinner and Exciting Inter-Branch Competition\nThe event became even more lively with a communal dinner that strengthened the bond among employees. This shared meal moment was not just about delicious food but also a venue for sharing stories, experiences, and, of course, celebrating the company's outstanding achievements.\n\nNot to be missed, Farrasindo also held an exciting inter-branch competition, which served as a platform to showcase creativity and teamwork. Each branch displayed their best skills in creativity, collaboration, and innovation. The competition was not only entertaining but also highlighted that every branch makes an important contribution to the company's overall success.\n\nA Moment of Meaningful Celebration\nHUT ke-23 Farrasindo was a celebration of the hard work, dedication, and togetherness of all employees. With the theme *Great Team, Great Work*, the event symbolized the importance of teamwork and appreciation for every individual. Farrasindo remains committed to growing, not just as a company, but also as a family that supports and appreciates each other. Happy 23rd Anniversary, Farrasindo! May you continue to be successful and grow for many years to come.",
    },
    {
      title:
        "Want Your Construction Project On Time with the Best Quality? Choose Ready-Mix Concrete!",
      categories: [],
      date: "2025-01-22T00:00:00.000Z",
      excerpt:
        "The solution for fast and quality construction with ready-mix concrete from Fresh Beton Indonesia.",
      slug: "best-quality-ready-mix-concrete-for-construction",
      author: "Ready Mix",
      image: imgArtikel9,
      description:
        "Want Your Construction Project Fast and Quality? Choose Ready-Mix Concrete\n\nIn the construction world, time and quality are two critical factors. Delays in project completion or the use of substandard building materials can be dangerous and disrupt the entire construction process. One of the best solutions to ensure your construction project is completed quickly and with guaranteed quality is to use ready-mix concrete.\n\nReady-mix concrete is concrete that has been professionally produced and mixed in a factory, then transported using a mixer truck to the project site. With various advantages, ready-mix concrete is the favorite choice for many contractors and developers.\n\nAdvantages of Ready-Mix Concrete for Construction Projects:\nGuaranteed Quality\nReady-mix concrete is produced with a well-controlled system at the plant, using standardized materials. This ensures that the quality of the concrete used in the project is always consistent and meets technical requirements. There is no longer the risk of incorrect mixing or suboptimal concrete quality.\n\nTime-Saving\nMixing concrete on the project site often takes a considerable amount of time, especially if done manually. With ready-mix concrete, all mixing is done beforehand at the factory, so the time needed to pour the concrete into the formwork is much faster. This reduces waiting time and accelerates construction progress.\n\nMore Precise Results\nWith ready-mix concrete, the concrete mixture is more precise according to the required ratio. This helps reduce errors that can occur during manual concrete mixing and ensures that the concrete used has optimal strength and durability. Easy Volume Management\nReady-mix concrete is available in various volumes, from small to large scale, depending on project needs. No need to worry about excess or lack of concrete on site, as the concrete will be delivered according to the ordered amount. This also reduces material waste that often occurs with manual mixing.\n\nMinimize Risk of Damage\nConcrete mixed manually often runs the risk of having too little or too much of the ingredients, which can impact the quality and strength of the concrete. With ready-mix concrete, every batch delivered adheres to the expected quality standards, reducing the risk of damage or problems later on.\n\nWith all these advantages, ready-mix concrete is clearly a better choice compared to concrete mixed on-site. Besides being faster and more efficient, the use of ready-mix concrete also helps ensure better and more durable construction quality. If you are looking for a ready-mix concrete solution for your construction project, Fresh Beton Indonesia is the right choice. We provide high-quality ready-mix concrete with strict supervision at every production stage, ensuring the concrete we deliver meets your project needs. With our proven experience, Fresh Beton Indonesia is ready to help accelerate your project's progress without compromising quality.\n\nSo, to ensure your construction project runs fast, efficiently, and with quality, entrust your ready-mix concrete needs to Fresh Beton Indonesia. Contact us now for more information and attractive offers!",
    },
    {
      title:
        "Fresh Beton Indonesia Provides Quality Concrete with 7 Strategic Branches Across Indonesia",
      categories: [],
      date: "2025-01-22T00:00:00.000Z",
      excerpt:
        "Fresh Beton Indonesia is present as a pioneer in providing high-quality concrete with a network of branches in various strategic locations.",
      slug: "fresh-beton-indonesia-7-strategic-branches",
      author: "Fresh Beton Indonesia",
      image: imgArtikel10,
      description:
        "Fresh Beton Indonesia Provides Quality Concrete with 7 Strategic Branches Across Indonesia\n\nFresh Beton Indonesia is present as a pioneer in providing high-quality concrete with an extensive network and branches spread across various strategic locations in Indonesia. With 7 branches spread across Meruya, Sentul, Cianjur, Sukabumi, Serpong, Balaraja, and Cikembang, Fresh Beton Indonesia is ready to serve your construction needs more quickly, efficiently, and reliably.\n\nWhy Fresh Beton Indonesia?\nFresh Beton Ind",
    },
    {
      title:
        "Farrasindo Group Participates in Distributing Donation Aid for Disasters in Sumatra",
      categories: [],
      date: "2025-12-10T00:00:00.000Z",
      excerpt:
        "Farrasindo Group demonstrates its commitment to caring for others by distributing humanitarian aid to residents affected by flash floods in Aceh, North Sumatra, and West Sumatra.",
      link: "/news/farrasindo-group-donation-disaster-sumatera",
      slug: "farrasindo-group-donation-disaster-sumatera",
      author: "Farrasindo Group",
      image: FarrasindoDonationDisasterSumatra,
      description: `Farrasindo Group demonstrates its commitment to caring for others by distributing humanitarian aid to residents affected by flash floods in Aceh, North Sumatra, and West Sumatra. Through this act of solidarity, Farrasindo Group raised donations and collected emergency supplies, which were then distributed to the areas most in need.

    The aid collected included staple foods, groceries, sanitary pads, medicines, and other medical necessities. All of this assistance was successfully gathered in a total of 449 packages by all internal company employees who care about the disaster situation.

    In the distribution process, Farrasindo Group collaborated with the National Disaster Management Agency (BNPB) as the official partner for aid distribution. This collaboration ensures that all aid is delivered accurately and reaches residents in hard-to-access locations.

    BNPB also expressed deep appreciation to all communities and donors who have supported disaster response efforts. "BNPB thanks Farrasindo Group and everyone who has provided assistance to affected residents. This support is very meaningful in the efforts of disaster management and post-disaster recovery," said Mr. Diaz, a BNPB representative.

    Through this action, Farrasindo Group hopes this step can provide real support for the victims, ease the burden on affected communities, and serve as a form of solidarity in facing emergency situations. "On behalf of all Farrasindo Group employees, we hope this aid will be beneficial for those affected by the disaster," said Mr. E Suherman, Director of Farrasindo Group.

    With the distribution of this aid, Farrasindo Group further affirms its commitment to supporting humanitarian actions and encouraging cross-sector collaboration to help those in need.

    "A small help from us can be a great hope for them."
    `,
    },
    {
      title:
        "Farrasindo Group Holds National Work Meeting (RAKERNAS) and Employee Appreciation in Bali",
      categories: [],
      date: "2025-12-26T00:00:00.000Z",
      excerpt:
        "Farrasindo Group successfully held the 2026 National Work Meeting (Rakernas) and Employee Appreciation in Bali, uniting vision and strengthening business strategies for the future.",
      link: "/news/farrasindo-group-rakernas-employee-appreciation-at-bali",
      slug: "farrasindo-group-rakernas-employee-appreciation-at-bali",
      author: "Farrasindo Group",
      image: imgArticleGlobalMeeting2026,
      description: `
    Farrasindo Group successfully held the 2026 National Work Meeting (Rakernas) from January 28–31, 2026 in Bali. This event became a strategic momentum for all employees and divisions under Farrasindo Group to unite their vision, align strategies, and strengthen the company's business direction in facing future industry challenges.

    Carrying the spirit of One Vision Forward, Rakernas 2026 was designed as a collaborative space across branches and divisions to ensure every business step runs in harmony, is integrated, and sustainable.

    Day One: Strategy Alignment Across Branches and Divisions
    The first day of Rakernas was filled with presentation sessions from all branches and other company units, including PT Farrasindo Perkasa, PT Inti Jaya Industri, PT Citi Crane Perkasa, IT Division, and Marcomm Division.

    In these sessions, each unit presented their performance achievements, challenges faced, and strategic development plans to support the overall strengthening of the group’s business. The discussions were dynamic and constructive, reflecting Farrasindo Group’s commitment to building solid and consistent synergy across business lines.

    The first day of Rakernas emphasized the importance of collaboration as the main foundation for achieving common goals and strengthening the company’s competitiveness amid the ever-evolving industry dynamics.

    Day Two: Performance Evaluation and Operational Strengthening
    On the second day, the presentations continued with all plants and transport units of PT Fresh Beton Indonesia, followed by PT Gunung Bumi Perkasa, PT Simi Reflexology, PT Farracon Precast Industri, PT Nafcon, and other operational and supporting divisions, including Purchasing & Logistics, HRD & HSE, Finance & Accounting, and Audit.

    The main focus of these sessions was on performance presentations, operational evaluations, and development plans of each unit to support the effectiveness and sustainability of the group’s business as a whole.

    Through synergy across companies and divisions, Farrasindo Group further solidified strategic alignment and strengthened the shared commitment to face future industry challenges, in line with the spirit of One Vision Forward.

    Employee Appreciation Night: Appreciation for Farrasindo Group’s Best Employees
    As the closing of Rakernas 2026, Farrasindo Group held an Employee Appreciation Night as a form of appreciation for the dedication, loyalty, and hard work of all employees who have contributed to the company’s growth.

    This appreciation night became a moment of togetherness to celebrate achievements, strengthen collaboration, and give awards to the best people of Farrasindo Group.

    The awards given included:
    1. Best Farrasindo Branch
    2. Best Fresh Beton Plant
    3. Best Fresh Beton Sales
    4. Best Retail Concrete Pump Sales
    5. Best Big Project Concrete Pump Sales
    6. Sales with More Than 10 Years of Service

    These awards symbolize the company’s appreciation for the real contributions of employees in driving the growth and success of Farrasindo Group.

    Moving Forward Together
    Through the 2026 National Work Meeting and Employee Appreciation Night, Farrasindo Group reaffirms its commitment to continue moving forward in a structured, adaptive, and sustainable manner. With ever-stronger synergy and the spirit of One Vision Forward, Farrasindo Group is optimistic about the future and will continue to create solid growth for the company, employees, and all stakeholders.
  `,
    },
    {
      title:
        "Farrasindo Group Regularly Distributes Eid Parcels to Employees Every Year",
      categories: [],
      date: "2026-04-02T00:00:00.000Z",
      excerpt:
        "As Eid al-Fitr 1447 H approaches, Farrasindo Group is continuing its annual tradition of distributing Eid hampers to all employees. This initiative demonstrates the company's appreciation for the dedication and hard work of its team, which has contributed to Farrasindo Group's growth throughout the year.",
      link: "/news/farrasindo-group-regularly-distributes-eid-parcels-to-employees",
      slug: "farrasindo-group-regularly-distributes-eid-parcels-to-employees",
      author: "Farrasindo Group",
      image: imgArtikelParcel,
      description: `As Eid al-Fitr approaches, many companies use this opportunity to strengthen relationships with their employees. The Farrasindo Group does the same, consistently distributing Eid parcels to all employees every year as a token of appreciation and gratitude for their dedication.

This tradition of distributing Eid parcels has become a part of the company's culture, eagerly awaited by employees as the holiday approaches.

Annual Traditions Ahead of the Eid Holiday
The Eid parcel distribution activity usually takes place a few days before the Eid holiday begins. The parcels contain various Eid necessities that can be enjoyed with family at home.

Through this activity, the Farrasindo Group aims to bring small joys to employees who have worked hard throughout the year. Furthermore, the Eid parcels also symbolize the company's concern for the well-being and happiness of the team, which is a vital part of the company's journey.

A Form of Employee Appreciation
For the Farrasindo Group, employees are the company's primary asset. The success of various projects and operational activities is inseparable from the contribution and cooperation of the entire team.

Therefore, giving Eid hampers is a tangible form of appreciation from the company to its employees. This tradition is also a simple yet meaningful way to show gratitude for their dedication, loyalty, and hard work.

Strengthening Togetherness in the Workplace
Besides being a form of appreciation, this activity also serves as a moment to strengthen the sense of togetherness in the workplace. A warm and united atmosphere is evident when employees receive the Eid hampers distributed by the company.

Moments like this serve as a reminder that the relationship between the company and its employees is not merely professional, but also part of a large, supportive family.

Farrasindo Group's Commitment to Building a Corporate Culture
Through the annual tradition of distributing Eid hampers, Farrasindo Group demonstrates its commitment to building a positive, caring corporate culture that values ​​the contributions of each individual.

The company hopes this tradition will continue in the future as part of the values ​​of togetherness and the spirit of sharing that are the foundation of Farrasindo Group's journey.

In the spirit of a blessed Ramadan, Farrasindo Group also wishes all employees and their families a Happy Eid al-Fitr. May happiness, health and blessings always be with us all.`,
    },
  ],
};

// Pagination function for articles
export const paginationArticle = (
  page: number,
  pageSize: number,
  lang: string,
  filters?: {
    author?: string;
    title?: string;
  },
) => {
  let filtered = [...articles[lang as Locale]];

  // Apply filters
  if (filters?.author) {
    filtered = filtered.filter((article) =>
      article.author.toLowerCase().includes(filters.author!.toLowerCase()),
    );
  }

  if (filters?.title) {
    filtered = filtered.filter((article) =>
      article.title.toLowerCase().includes(filters.title!.toLowerCase()),
    );
  }

  // Sort by date
  const sorted = filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const total = sorted.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const hasNext = end < total;
  const hasPrev = start > 0;

  return {
    articles: sorted.slice(start, end),
    page,
    pageSize,
    total,
    totalPages: Math.ceil(total / pageSize),
    hasNext,
    hasPrev,
  };
};

export const getUniqueCategory = (locale: Locale) => {
  const authors = articles[locale as Locale].map((article) => article.author);
  return Array.from(new Set(authors));
};
