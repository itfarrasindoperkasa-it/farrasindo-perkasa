"use client";

import { Job } from "@/lib/datas/jobs";
import Image from "next/image";
import FPLogo from "@/asset/images/logo_partner/fp-logo.png";

interface CareerJobListProps {
  jobs: Job[];
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export default function CareerJobList({
  jobs,
  page,
  totalPages,
  setPage,
}: CareerJobListProps) {
  return (
    <>
      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500"
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Image src={FPLogo} alt="Farrasindo Logo" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {job.title}
              </h3>
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
              <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-lg transition-colors">
                Apply!
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-1 mt-8 flex-wrap">
          {/* Previous Page */}
          <button
            className="px-3 py-2 rounded-lg bg-gray-200 hover:bg-orange-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            title="Previous"
          >
            &lsaquo;
          </button>

          {/* Page Numbers */}
          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              // Show first page, last page, current page, and 1 page before/after current
              const showPage =
                pageNum === 1 ||
                pageNum === totalPages ||
                (pageNum >= page - 1 && pageNum <= page + 1);

              // Show ellipsis
              const showEllipsisBefore = pageNum === page - 2 && page > 3;
              const showEllipsisAfter =
                pageNum === page + 2 && page < totalPages - 2;

              if (showEllipsisBefore || showEllipsisAfter) {
                return (
                  <span key={i} className="px-3 py-2 text-gray-400 text-sm">
                    ...
                  </span>
                );
              }

              if (!showPage) return null;

              return (
                <button
                  key={i}
                  className={`px-3 py-2 rounded-lg transition-colors text-sm ${
                    page === pageNum
                      ? "bg-orange-400 text-white font-semibold"
                      : "bg-gray-200 hover:bg-orange-400 hover:text-white"
                  }`}
                  onClick={() => setPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Page */}
          <button
            className="px-3 py-2 rounded-lg bg-gray-200 hover:bg-orange-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            title="Next"
          >
            &rsaquo;
          </button>
        </div>
      )}
    </>
  );
}
