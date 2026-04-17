"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative flex h-16 w-16 items-center justify-center">
        {/* Animated outer ring */}
        <div className="absolute h-full w-full rounded-full border-4 border-gray-200 border-t-[#f97d00] animate-spin"></div>
        {/* Minimalist central pulse */}
        <div className="h-4 w-4 rounded-full bg-[#f97d00] animate-pulse"></div>
      </div>
    </div>
  );
}
