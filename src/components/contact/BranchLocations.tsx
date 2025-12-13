"use client";

import React, { useState } from "react";
import branches, { Branch } from "@/lib/datas/contact";
import { MapPin, ExternalLink } from "lucide-react";

export default function BranchLocations() {
  const [selectedCompany, setSelectedCompany] = useState<string>("all");
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 6; // Number of branches per page

  // Get unique companies
  const companies = [
    "all",
    ...Array.from(new Set(branches.map((b) => b.company))),
  ];

  // Filter branches based on selected company
  const filteredBranches =
    selectedCompany === "all"
      ? branches
      : branches.filter((b) => b.company === selectedCompany);

  // Pagination logic
  const totalPages = Math.ceil(filteredBranches.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBranches = filteredBranches.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  const handleCompanyChange = (company: string) => {
    setSelectedCompany(company);
    setSelectedBranch(null);
    setCurrentPage(1);
  };

  // Google Maps iframe src with all branch markers
  const getMapSrc = () => {
    const center = selectedBranch
      ? `${selectedBranch.coordinates.lat},${selectedBranch.coordinates.lng}`
      : "-6.1664,106.7629"; // Default center (Head Office)

    const zoom = selectedBranch ? "15" : "6";

    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${center}&zoom=${zoom}`;
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Branch Locations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find our offices across Indonesia. Select a company to view specific
            branch locations.
          </p>
        </div>

        {/* Google Maps - Multiple Markers */}
        <div className="mb-12">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
            {/* Google My Maps with all 16 branch locations */}
            <iframe
              src="https://www.google.com/maps/d/embed?mid=11LmjOSVOUqSbCt9jGcbfhI_8yHhInU4&ehbc=2E312F&noprof=1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Company Filter */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Company
          </label>
          <select
            value={selectedCompany}
            onChange={(e) => {
              setSelectedCompany(e.target.value);
              setSelectedBranch(null);
            }}
            className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
          >
            <option value="all">All Companies</option>
            {companies.slice(1).map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        {/* Branch List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className={`bg-white border-2 rounded-xl p-6 transition-all cursor-pointer hover:shadow-lg ${
                selectedBranch?.id === branch.id
                  ? "border-orange-500 shadow-lg"
                  : "border-gray-200 hover:border-orange-300"
              }`}
              onClick={() => setSelectedBranch(branch)}
            >
              {/* Company Badge */}
              <div className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {branch.abbreviation}
              </div>

              {/* Branch Name */}
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                {branch.name}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-2 text-gray-600 mb-4">
                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0 text-orange-500"
                />
                <p className="text-sm">{branch.address}</p>
              </div>

              {/* Google Maps Link */}
              <a
                href={branch.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors"
              >
                <ExternalLink size={16} />
                View on Google Maps
              </a>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBranches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No branches found for the selected company.
            </p>
          </div>
        )}

        {/* Selected Branch Detail */}
        {selectedBranch && (
          <div className="mt-12 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Selected Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Branch Name</p>
                <p className="font-semibold text-gray-900 mb-4">
                  {selectedBranch.name}
                </p>

                <p className="text-sm text-gray-600 mb-1">Address</p>
                <p className="text-gray-900 mb-4">{selectedBranch.address}</p>

                <p className="text-sm text-gray-600 mb-1">Coordinates</p>
                <p className="text-gray-900 font-mono text-sm">
                  {selectedBranch.coordinates.lat},{" "}
                  {selectedBranch.coordinates.lng}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href={selectedBranch.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <MapPin size={20} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
