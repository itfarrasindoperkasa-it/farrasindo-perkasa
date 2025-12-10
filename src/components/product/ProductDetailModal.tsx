"use client";

import  { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

interface Product {
  id: string | number;
  name: string;
  brand?: string;
  category?: string;
  imageUrl: string | StaticImageData;
  details: Record<string, any>;
  [key: string]: any;
}

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductDetailModal({
  isOpen,
  onClose,
  product,
}: ProductDetailModalProps) {
  const [activeTab, setActiveTab] = useState<string>("BOOM");

  // Get available sections from product details
  const sections = product ? Object.keys(product.details).filter(
    (key) => typeof product.details[key] === "object" && product.details[key] !== null
  ) : [];

  // If no sections, use "General" as default
  const tabs = sections.length > 0 ? sections : ["General"];

  // Set initial active tab
  useEffect(() => {
    if (product && tabs.length > 0) {
      setActiveTab(tabs[0]);
    }
  }, [product]);

  // Get details for active tab
  const getActiveDetails = () => {
    if (!product) return {};
    if (activeTab === "General") {
      return product.details;
    }
    return product.details[activeTab] || {};
  };

  const activeDetails = getActiveDetails();

  // Return null if no product (after all hooks)
  if (!product) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-50" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[95vw] max-w-4xl translate-x-[-50%] translate-y-[-50%] bg-white shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-lg max-h-[90vh] overflow-y-auto">
          {/* Close Button - Sticky */}
          <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-white">
            <Dialog.Close asChild>
              <button className="px-4 py-2 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Close
              </button>
            </Dialog.Close>
          </div>

          {/* Header - Product Image and Name */}
          <div className="flex flex-col items-center px-4 pb-6">
            <div className="relative w-full max-w-md h-64 mb-6 bg-gradient-to-br from-gray-50">
              {typeof product.imageUrl === "string" ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-contain w-full h-full drop-shadow-xl"
                />
              ) : (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-xl"
                />
              )}
            </div>
            <Dialog.Title asChild>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
            </Dialog.Title>
            {product.brand && (
              <p className="text-lg text-gray-600">
                Brand: {product.brand}
              </p>
            )}
          </div>

          {/* Tab Navigation - Sticky */}
          <div className="sticky top-[72px] z-10 flex border-b border-gray-200 bg-white">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 font-bold text-center transition-colors ${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {activeTab} Details
            </h3>

            <div className="space-y-4">
              {Object.entries(activeDetails).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-start py-3 border-b border-gray-100"
                >
                  <span className="font-medium text-gray-700 capitalize flex-1">
                    {key.replace(/_/g, " ")}
                  </span>
                  <span className="text-gray-900 font-semibold flex-1 text-right">
                    {typeof value === "object" ? JSON.stringify(value) : String(value)}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Notes if any */}
            {product.notes && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Additional Information</h4>
                <p className="text-gray-700 text-sm italic">{product.notes}</p>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
