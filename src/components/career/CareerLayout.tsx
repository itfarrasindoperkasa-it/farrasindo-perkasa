"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Locale } from "@/lib/datas/global";
import { Job } from "@/lib/datas/jobs";
import CareerJobList from "@/components/career/CareerJobList";

interface CareerLayoutProps {
  allJobs: Job[];
  locale: string;
}

export default function CareerLayout({ allJobs, locale }: CareerLayoutProps) {
  // Responsive items per page: mobile = 1, desktop = 4
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(allJobs.length / 4));
  const [paginatedJobs, setPaginatedJobs] = useState<Job[]>(
    allJobs.slice(0, 4)
  );

  // Detect screen size and update itemsPerPage
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const newItemsPerPage = isMobile ? 1 : 4;
      setItemsPerPage(newItemsPerPage);

      // Recalculate pagination with new items per page
      const filtered = searchTerm
        ? allJobs.filter(
            (job) =>
              job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
              job.department.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : allJobs;

      const newTotalPages = Math.ceil(filtered.length / newItemsPerPage);
      setTotalPages(newTotalPages);
      setPage(1); // Reset to first page
      setPaginatedJobs(filtered.slice(0, newItemsPerPage));
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [allJobs, searchTerm]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setPage(1);

    // Filter jobs
    const filtered = allJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(value.toLowerCase()) ||
        job.location.toLowerCase().includes(value.toLowerCase()) ||
        job.department.toLowerCase().includes(value.toLowerCase())
    );

    // Calculate new total pages with current itemsPerPage
    const newTotalPages = Math.ceil(filtered.length / itemsPerPage);
    setTotalPages(newTotalPages);

    // Get first page of filtered results
    setPaginatedJobs(filtered.slice(0, itemsPerPage));
  };

  const handlePageChange = (newPage: number) => {
    const filtered = searchTerm
      ? allJobs.filter(
          (job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.department.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allJobs;

    const start = (newPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedJobs(filtered.slice(start, end));
    setPage(newPage);
  };

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-4 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by job title or location..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Job List with Pagination */}
      <CareerJobList
        jobs={paginatedJobs}
        page={page}
        totalPages={totalPages}
        setPage={handlePageChange}
      />
    </>
  );
}
