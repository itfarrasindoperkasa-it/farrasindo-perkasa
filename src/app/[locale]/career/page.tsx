"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CareerData from "@/lib/datas/career"
import CompaniesData, { type Company } from "@/lib/datas/companies"
import HomeBannerData from "@/lib/datas/home_banner"
import LatestNewsData from "@/lib/datas/latest_news"
import CompanyCards, { type CompanyEntry } from "@/components/CompanyCards"

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const [showAllCompanies, setShowAllCompanies] = useState(false)

  const jobs = [
    {
      id: 1,
      title: "Sales Unit Alat Berat",
      location: "Jakarta Barat, Jakarta Raya",
      department: "Penjualan/Kemitraan Perusahaan (Perusahaan)",
      type: "Full time",
      icon: "🏗️",
    },
    {
      id: 2,
      title: "Sales Alat Berat",
      location: "Jakarta Barat, Jakarta Raya",
      department: "Management Alat & Mesin (Perusahaan)",
      type: "Full time",
      icon: "🏗️",
    },
    {
      id: 3,
      title: "Multimedia Internship",
      location: "Jakarta Barat, Jakarta Raya",
      department: "Desain Grafis Kesehatan & Arsitektur",
      type: "Internship",
      icon: "🎨",
    },
    {
      id: 4,
      title: "Sales Beton",
      location: "Subang, Jawa Barat",
      department: "Konstruksi",
      type: "Full Time",
      icon: "🏗️",
    },
  ]

  const companies = CompaniesData

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const nextJobs = () => {
    setCurrentJobIndex((prev) => (prev + 1) % Math.ceil(jobs.length / 1))
  }

  const prevJobs = () => {
    setCurrentJobIndex((prev) => (prev - 1 + Math.ceil(jobs.length / 1)) % Math.ceil(jobs.length / 1))
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
       <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background image (no overlay) */}
      <Image
        src={CareerData.banner}
        alt="Career Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Content: placed above image (no overlay) */}
      <div className="relative z-10 h-full flex items-center justify-center flex-col text-center px-4">
        <h1
          className="text-[52px] sm:text-6xl font-extrabold text-white mb-3"
        >
          K a r i e r
        </h1>

        <p
          className="text-2xl sm:text-3xl text-white mb-6"
          style={{ textShadow: "0 6px 18px rgba(0,0,0,0.45)" }}
        >
          Bergabunglah dengan Tim
        </p>

        <a
          href="#job-section"
          aria-label="Lihat Lowongan"
          className="inline-flex items-center bg-orange-500 hover:bg-orange-600 
                     text-white font-semibold px-6 py-3 rounded-full shadow-lg
                     transition-all duration-200 text-lg"
        >
          Lihat Lowongan
        </a>
      </div>
    </section>

      {/* Ready to Grow Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-360 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Siap berkembang bersama kami?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Farrasindo Group adalah grup bisnis yang sedang berkembang dengan beragam operasi di bidang konstruksi, manufaktur beton, alat berat, dan layanan kesehatan. Kami menawarkan peluang karier yang menarik di berbagai industri
          </p>
              </div>
      </section>

      {/* Join Our Group Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-360 mx-auto">
          
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Logo and Equipment Image */}
            <div className="relative w-full lg:w-2/5">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden ">
                <Image
                  src={HomeBannerData[6]}
                  alt="Farrasindo Group Equipment"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Company Grid with Show More */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Bergabunglah dengan Grup Kami!</h2>
              
              {/* Company Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6">
                <CompanyCards 
                  companies={
                    showAllCompanies 
                      ? companies as CompanyEntry[] 
                      : (companies as CompanyEntry[]).slice(0, 6)
                  } 
                />
              </div>

              {/* Show More/Less Button */}
              {companies.length > 6 && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowAllCompanies(!showAllCompanies)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    {showAllCompanies ? "Tampilkan Lebih Sedikit" : "Selengkapnya"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Explore job and send us your resume today
          </h2>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by job title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {(searchTerm ? filteredJobs : jobs).map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{job.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-orange-500 text-sm">📍</span>
                      <p className="text-sm text-gray-600">{job.location}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-500 text-sm">💼</span>
                      <p className="text-sm text-gray-600">{job.department}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-500 text-sm">⏰</span>
                      <p className="text-sm text-gray-600">{job.type}</p>
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors">
                    Apply!
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: Math.ceil(jobs.length / 4) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentJobIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === currentJobIndex ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Farracare Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-360 mx-auto">
          <h2 className="text-4xl font-bold mb-6">Farracare</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 md:w-1/2">
            Di Farrasindo Group, kami percaya bahwa pertumbuhan bisnis harus berjalan seiring dengan kepedulian dan tanggung jawab. Melalui FARRACARE, kami berkomitmen untuk memberikan keunggulan di industri kami sekaligus memberikan dampak positif bagi lingkungan, komunitas, dan masyarakat di sekitar kami.
          </p>
          <button className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
           Baca Lebih Lanjut ...
          </button>

          {/* Image Slider */}
          <div className="mt-12">
            <Slider
              dots={false}
              arrows={false}
              infinite={true}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                }
              ]}
            >
              {[8, 13, 5, 7, 6, 15, 16, 17, 2].map((imageIndex, index) => (
                <div key={index} className="px-2">
                  <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={LatestNewsData[imageIndex - 1]}
                      alt={`Farracare Activity ${index + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}
