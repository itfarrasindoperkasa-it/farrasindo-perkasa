"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

interface Product {
  id: string | number;
  name: string;
  imageUrl: string | StaticImageData;
  details: Record<string, any>;
  [key: string]: any;
}

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

export default function ComparisonModal({
  isOpen,
  onClose,
  products,
}: ComparisonModalProps) {
  // Extract all unique keys from all products' details to form the rows
  const allDetailKeys = Array.from(
    new Set(
      products.flatMap((p) =>
        Object.keys(p.details).flatMap((sectionKey) => {
          // Handle nested details (e.g., BOOM, PUMP) or flat details
          const section = p.details[sectionKey];
          if (
            typeof section === "object" &&
            section !== null &&
            !Array.isArray(section)
          ) {
            return Object.keys(section).map((k) => `${sectionKey}.${k}`);
          }
          return sectionKey;
        })
      )
    )
  );

  // Helper to get value from nested keys like "BOOM.Maximum vertical reach"
  const getValue = (product: Product, key: string) => {
    const dotIndex = key.indexOf(".");
    if (dotIndex !== -1) {
      const section = key.substring(0, dotIndex);
      const field = key.substring(dotIndex + 1);
      return product.details[section]?.[field] ?? "-";
    }
    return product.details[key] ?? "-";
  };

  // Helper to format key for display
  const formatKey = (key: string) => {
    if (key.includes(".")) {
      return key.substring(key.indexOf(".") + 1); // Show everything after the first dot
    }
    return key;
  };

  // Group keys by section if possible
  const sections: Record<string, string[]> = {};
  allDetailKeys.forEach((key) => {
    const parts = key.split(".");
    const section = parts.length > 1 ? parts[0] : "General";
    if (!sections[section]) sections[section] = [];
    sections[section].push(key);
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-50 " />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[95vw] max-w-5xl translate-x-[-50%] translate-y-[-50%] bg-white shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-lg max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200 shrink-0">
            <Dialog.Title className="text-xl font-bold text-gray-900">
              Perbandingan Produk
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="px-4 py-2 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Close
              </button>
            </Dialog.Close>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1 overscroll-contain">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="p-4 text-left bg-white border-r border-gray-300 font-bold text-gray-900">
                    Product Info
                  </th>
                  {products.map((product) => (
                    <th
                      key={product.id}
                      className="p-4 bg-white border-r border-gray-300 last:border-r-0 text-center font-bold text-gray-900"
                    >
                      {product.name}
                    </th>
                  ))}
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4 bg-white border-r border-gray-300 font-medium text-gray-700">
                    Image
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="p-4 bg-white border-r border-gray-300 last:border-r-0"
                    >
                      <div className="flex justify-center">
                        <div className="relative w-40 h-28">
                          {typeof product.imageUrl === "string" ? (
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="object-contain w-full h-full"
                            />
                          ) : (
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              fill
                              className="object-contain"
                            />
                          )}
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(sections).map(([sectionName, keys]) => (
                  <React.Fragment key={sectionName}>
                    {sectionName !== "General" && (
                      <tr>
                        <td
                          colSpan={products.length + 1}
                          className="bg-orange-500 text-white font-bold p-3 text-center uppercase tracking-wider"
                        >
                          {sectionName}
                        </td>
                      </tr>
                    )}
                    {keys.map((key, idx) => (
                      <tr
                        key={key}
                        className={`border-b border-gray-300 ${
                          idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="p-4 border-r border-gray-300 font-medium text-gray-700 capitalize">
                          {formatKey(key).replace(/_/g, " ")}
                        </td>
                        {products.map((product) => (
                          <td
                            key={`${product.id}-${key}`}
                            className="p-4 text-center text-gray-800 border-r border-gray-300 last:border-r-0"
                          >
                            {getValue(product, key)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
