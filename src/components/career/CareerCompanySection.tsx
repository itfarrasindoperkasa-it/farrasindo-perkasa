"use client";

import { useState } from "react";
import CompanyCards, { type CompanyEntry } from "@/components/CompanyCards";
import { Company } from "@/lib/datas/companies";
import { Locale } from "@/lib/datas/global";

interface CareerCompanySectionProps {
  companies: Company[];
  careerCompanySection: any;
}

export default function CareerCompanySection({
  companies,
  careerCompanySection,
}: CareerCompanySectionProps) {
  const [showAllCompanies, setShowAllCompanies] = useState(false);

  return (
    <div className="w-full lg:w-3/5">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
        {careerCompanySection.title}
      </h2>

      {/* Company Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6">
        <CompanyCards
          companies={
            showAllCompanies
              ? (companies as CompanyEntry[])
              : (companies as CompanyEntry[]).slice(0, 6)
          }
        />
      </div>

      {/* Show More/Less Button */}
      {companies.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAllCompanies(!showAllCompanies)}
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            {showAllCompanies ? careerCompanySection.lessViewText : careerCompanySection.loadMoreText}
          </button>
        </div>
      )}
    </div>
  );
}
