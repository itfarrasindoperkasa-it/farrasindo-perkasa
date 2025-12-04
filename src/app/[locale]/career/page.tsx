"use client"

import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import Image from "next/image"
import CareerData from "@/lib/datas/career"
import CompaniesData, { type Company } from "@/lib/datas/companies"
import HomeBannerData from "@/lib/datas/home_banner"
import CompanyCards, { type CompanyEntry } from "@/components/CompanyCards"

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentJobIndex, setCurrentJobIndex] = useState(0)

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
          
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Logo and Equipment Image */}
            <div className="relative">
              <div className="w-full aspect-[4/3] bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={HomeBannerData[6]}
                  alt="Farrasindo Group Equipment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Company Grid with Scroll */}
            <div>
              {/* Scrollable container - max 2 rows (6 items), then scroll */}
               <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Bergabunglah dengan Grup Kami!</h2>
              <div className="max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6">
                  <CompanyCards companies={companies as CompanyEntry[]} />
                </div>
              </div>
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Farracare</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At Farrasindo Group, we believe that business growth must go hand in hand with care and responsibility.
            Through FARRACARE, we are committed to deliver excellence in our industries while also making a positive
            impact on the environment, communities, and the society around us.
          </p>
          <button className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Read more ...
          </button>

          {/* Team Images */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
