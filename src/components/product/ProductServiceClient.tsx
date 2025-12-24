"use client";

import HomeBannerData from "@/lib/datas/home_banner";
import ProductData from "@/lib/datas/product";
import { ArrowRight, Check, Eye, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import ComparisonModal from "@/components/product/ComparisonModal";
import ProductDetailModal from "@/components/product/ProductDetailModal";
import { motion, AnimatePresence } from "framer-motion";
import { Locale } from "@/lib/datas/global";

const getImage = (imageStr: string) => {
  if (imageStr && imageStr.startsWith("ProductData[")) {
    const index = parseInt(imageStr.match(/\[(\d+)\]/)?.[1] || "0");
    return ProductData[index];
  }
  return imageStr;
};

export default function ProductServiceClient({
  messages,
  locale,
}: {
  messages: any;
  locale: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [showQuickFind, setShowQuickFind] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeBrand, setActiveBrand] = useState<string>("All");
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Sync state with URL searchParams
  React.useEffect(() => {
    const quickFindParam = searchParams.get("quickFind");
    if (quickFindParam !== null) {
      setShowQuickFind(quickFindParam === "true");
    } else if (typeof window !== "undefined") {
      setShowQuickFind(window.innerWidth >= 768);
    } else {
      setShowQuickFind(true);
    }

    setActiveCategory(searchParams.get("category") || "All");
    setActiveBrand(searchParams.get("brand") || "All");
  }, [searchParams]);

  // Function to update URL params
  const updateURLParams = (params: Record<string, string>) => {
    const current = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value && value !== "All") {
        current.set(key, value);
      } else {
        current.delete(key);
      }
    });

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`, { scroll: false });
  };

  React.useEffect(() => {
    const handleResize = () => {
      const shouldShow = window.innerWidth >= 768;
      setShowQuickFind(shouldShow);
      updateURLParams({
        quickFind: shouldShow.toString(),
        category: activeCategory,
        brand: activeBrand,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeCategory, activeBrand]);

  // Flatten products for easier access if needed, or just use the nested structure
  const allProducts = useMemo(() => {
    return messages.ProductPage.flatMap((cat: any) =>
      cat.products.map((prod: any) => ({ ...prod, category: cat.category }))
    );
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((p: any) => p.category === activeCategory);
    }

    // Filter by brand (only for Concrete Pump)
    if (activeCategory === "Concrete Pump" && activeBrand !== "All") {
      if (activeBrand === "Schwing") {
        filtered = filtered.filter((p: any) =>
          p.name.toLowerCase().includes("schwing")
        );
      } else if (activeBrand === "IHI") {
        filtered = filtered.filter((p: any) => {
          const name = p.name.toLowerCase();
          return (
            name.includes("ihi") ||
            name.includes("ipg") ||
            name.startsWith("pg")
          );
        });
      } else if (activeBrand === "Kyokuto") {
        filtered = filtered.filter((p: any) => p.slug.includes("kyokuto"));
      }
    }

    // Filter by brand (for Stationery Concrete)
    if (activeCategory === "Stationery Concrete" && activeBrand !== "All") {
      if (activeBrand === "Zoomlion") {
        filtered = filtered.filter((p: any) => p.name.includes("HBT"));
      } else if (activeBrand === "Schwing") {
        filtered = filtered.filter((p: any) => p.name.includes("SP"));
      } else if (activeBrand === "CITI PUMP") {
        filtered = filtered.filter((p: any) => p.brand === "Citi Pump");
      }
    }

    // Filter by brand (for Moli)
    if (activeCategory === "Moli" && activeBrand !== "All") {
      if (activeBrand === "Zoomlion MOLI") {
        filtered = filtered.filter((p: any) =>
          p.name.toLowerCase().includes("zoomlion")
        );
      } else if (activeBrand === "Truemax") {
        filtered = filtered.filter((p: any) =>
          p.name.toLowerCase().includes("truemax")
        );
      }
    }

    return filtered;
  }, [activeCategory, activeBrand, allProducts]);

  const toggleProductSelection = (product: any) => {
    if (selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      if (selectedProducts.length >= 4) {
        alert("Maksimal 4 produk untuk perbandingan");
        return;
      }
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const isInitialMount = React.useRef(true);

  // Reset page when category or brand changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeBrand]);

  // Reset brand when category changes (but not on initial mount)
  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setActiveBrand("All");
    updateURLParams({
      category: activeCategory,
      brand: "All",
      quickFind: showQuickFind.toString(),
    });
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categories = messages.ProductPage.map((c: any) => c.category);

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        id="productRange"
        className="w-screen max-w-[120rem] mx-auto bg-white"
      >
        <div className="h-[40vh] md:h-[60vh] bg-black mb-20 relative">
          <Image
            src={HomeBannerData[0]}
            fill={true}
            alt="Product Range Banner"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className=" text-2xl md:text-4xl font-bold">
            {locale == `id` ? `Rangkaian Produk` : `Product Range`}
          </h1>
        </div>
        <div className="flex gap-8 py-10 px-4 md:px-10 flex-col md:flex-row mx-auto max-w-360 ">
          {/* Sidebar */}
          <section id="quickFindProduct" className="md:w-1/6 shrink-0">
            <div className="bg-slate-100 p-6 rounded-xl sticky top-24">
              <div className="flex w-full justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-orange-600">
                  {locale == "id" ? `PENCARIAN CEPAT` : `QUICK FIND`}
                </h2>
                <button
                  className={`text-orange-600 cursor-pointer md:hidden`}
                  onClick={() => {
                    const newValue = !showQuickFind;
                    setShowQuickFind(newValue);
                    updateURLParams({
                      quickFind: newValue.toString(),
                      category: activeCategory,
                      brand: activeBrand,
                    });
                  }}
                >
                  {/* Prevent hydration mismatch by rendering icon only after mount */}
                  {mounted && (showQuickFind ? <X /> : <Eye />)}
                </button>
              </div>

              <div
                className={`${
                  showQuickFind ? "block" : "hidden"
                } md:block space-y-2`}
              >
                {categories.map((cat: any, idx: number) => (
                  <div key={idx}>
                    <button
                      onClick={() => {
                        setActiveCategory(cat);
                        updateURLParams({
                          category: cat,
                          brand: "All",
                          quickFind: showQuickFind.toString(),
                        });
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeCategory === cat
                          ? "bg-orange-500 text-white font-semibold shadow-md"
                          : "hover:bg-orange-100 text-gray-700"
                      }`}
                    >
                      {cat}
                    </button>

                    {/* Brand filters for Concrete Pump */}
                    {activeCategory === "Concrete Pump" &&
                      cat === "Concrete Pump" && (
                        <div className="ml-4 mt-2 space-y-1">
                          <button
                            onClick={() => {
                              setActiveBrand("Schwing");
                              updateURLParams({
                                category: activeCategory,
                                brand: "Schwing",
                                quickFind: showQuickFind.toString(),
                              });
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              activeBrand === "Schwing"
                                ? "bg-orange-400 text-white font-medium"
                                : "bg-white hover:bg-orange-50 text-gray-600"
                            }`}
                          >
                            SCHWING
                          </button>
                          <button
                            onClick={() => {
                              setActiveBrand("IHI");
                              updateURLParams({
                                category: activeCategory,
                                brand: "IHI",
                                quickFind: showQuickFind.toString(),
                              });
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              activeBrand === "IHI"
                                ? "bg-orange-400 text-white font-medium"
                                : "bg-white hover:bg-orange-50 text-gray-600"
                            }`}
                          >
                            IHI
                          </button>
                          <button
                            onClick={() => {
                              setActiveBrand("Kyokuto");
                              updateURLParams({
                                category: activeCategory,
                                brand: "Kyokuto",
                                quickFind: showQuickFind.toString(),
                              });
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              activeBrand === "Kyokuto"
                                ? "bg-orange-400 text-white font-medium"
                                : "bg-white hover:bg-orange-50 text-gray-600"
                            }`}
                          >
                            Kyokuto
                          </button>
                        </div>
                      )}

                    {/* Brand filters for Stationery Concrete */}
                    {activeCategory === "Stationery Concrete" &&
                      cat === "Stationery Concrete" && (
                        <div className="ml-4 mt-2 space-y-1">
                          <button
                            onClick={() => {
                              setActiveBrand("Zoomlion");
                              updateURLParams({
                                category: activeCategory,
                                brand: "Zoomlion",
                                quickFind: showQuickFind.toString(),
                              });
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              activeBrand === "Zoomlion"
                                ? "bg-orange-400 text-white font-medium"
                                : "bg-white hover:bg-orange-50 text-gray-600"
                            }`}
                          >
                            Zoomlion
                          </button>
                          <button
                            onClick={() => {
                              setActiveBrand("Schwing");
                              updateURLParams({
                                category: activeCategory,
                                brand: "Schwing",
                                quickFind: showQuickFind.toString(),
                              });
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              activeBrand === "Schwing"
                                ? "bg-orange-400 text-white font-medium"
                                : "bg-white hover:bg-orange-50 text-gray-600"
                            }`}
                          >
                            Schwing
                          </button>
                          <button
                            onClick={() => {
                              setActiveBrand("CITI PUMP");
                              updateURLParams({
                                category: activeCategory,
                                brand: "CITI PUMP",
                                quickFind: showQuickFind.toString(),
                              });
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              activeBrand === "CITI PUMP"
                                ? "bg-orange-400 text-white font-medium"
                                : "bg-white hover:bg-orange-50 text-gray-600"
                            }`}
                          >
                            CITI PUMP
                          </button>
                        </div>
                      )}

                    {/* Brand filters for Moli */}
                    {activeCategory === "Moli" && cat === "Moli" && (
                      <div className="ml-4 mt-2 space-y-1">
                        <button
                          onClick={() => {
                            setActiveBrand("Zoomlion MOLI");
                            updateURLParams({
                              category: activeCategory,
                              brand: "Zoomlion MOLI",
                              quickFind: showQuickFind.toString(),
                            });
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            activeBrand === "Zoomlion MOLI"
                              ? "bg-orange-400 text-white font-medium"
                              : "bg-white hover:bg-orange-50 text-gray-600"
                          }`}
                        >
                          Zoomlion MOLI
                        </button>
                        <button
                          onClick={() => {
                            setActiveBrand("Truemax");
                            updateURLParams({
                              category: activeCategory,
                              brand: "Truemax",
                              quickFind: showQuickFind.toString(),
                            });
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            activeBrand === "Truemax"
                              ? "bg-orange-400 text-white font-medium"
                              : "bg-white hover:bg-orange-50 text-gray-600"
                          }`}
                        >
                          Truemax
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Grid */}
          <section id="productCard" className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product: any, idx: number) => {
                const isSelected = selectedProducts.some(
                  (p) => p.id === product.id
                );
                const imageSrc = getImage(product.imageUrl);

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`group bg-white p-6 shadow-sm hover:shadow-xl rounded-2xl border transition-all duration-300 flex flex-col items-center gap-4 relative cursor-pointer ${
                      isSelected
                        ? "border-orange-500 ring-2 ring-orange-200"
                        : "border-gray-100"
                    }`}
                    key={product.id || idx}
                    onClick={() => {
                      setSelectedProduct({ ...product, imageUrl: imageSrc });
                      setIsDetailModalOpen(true);
                    }}
                  >
                    <div className="relative w-full h-48 flex items-center justify-center">
                      <Image
                        src={imageSrc}
                        width={500}
                        height={500}
                        alt={product.name}
                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="text-center w-full">
                      <p className="text-lg text-gray-600 mb-1">
                        {product.category || product.brand}
                      </p>
                      <h3 className="text-xl font-bold text-gray-800">
                        {product.name}
                      </h3>
                    </div>

                    <div className="w-full border-t border-gray-100 pt-4 space-y-2 text-sm text-gray-700">
                      {/* Concrete Pump Specs */}
                      {product.details?.BOOM && (
                        <table className="w-full text-sm">
                          <tbody>
                            <tr className="border-b border-gray-100">
                              <td className="font-bold py-2 align-bottom">
                                Max Vertical Reach:
                              </td>
                              <td className="py-2 align-bottom">
                                {product.details.BOOM[
                                  "Maximum vertical reach"
                                ] || "-"}
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="font-bold py-2 align-bottom">
                                Max Horizontal Reach:
                              </td>
                              <td className="py-2 align-bottom">
                                {product.details.BOOM[
                                  "Maximum horizontal reach"
                                ] || "-"}
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="font-bold py-2 align-bottom">
                                Output:
                              </td>
                              <td className="py-2 align-bottom">
                                {product.details.PUMP?.[
                                  "Maximum theoretical output"
                                ] || "-"}
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="font-bold py-2 align-bottom">
                                Pressure:
                              </td>
                              <td className="py-2 align-bottom">
                                {product.details.PUMP?.[
                                  "Maximum theoretical pressure on concrete"
                                ] || "-"}
                              </td>
                            </tr>
                            <tr>
                              <td className="font-bold py-2 align-bottom">
                                Chassis:
                              </td>
                              <td className="py-2 align-bottom">
                                {product.details.CHASSIS?.["Chassis brand"] ||
                                  "-"}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      )}

                      {/* Fallback for other types (e.g. Self Loading Mixer) */}
                      {!product.details?.BOOM && (
                        <table className="w-full text-sm">
                          <tbody>
                            {Object.keys(product.details)
                              .slice(0, 5)
                              .map((key, index) => (
                                <tr
                                  key={key}
                                  className={
                                    index < 4 ? "border-b border-gray-100" : ""
                                  }
                                >
                                  <td className="font-bold capitalize py-2 align-bottom">
                                    {key.replace(/_/g, " ")}:
                                  </td>
                                  <td className="py-2 align-bottom">
                                    {typeof product.details[key] === "object"
                                      ? "-"
                                      : product.details[key]}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      )}
                    </div>

                    <div className="w-full mt-auto pt-6 border-t border-gray-100">
                      <label
                        className="flex items-center gap-3 cursor-pointer group/checkbox"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div
                          className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-blue-600 border-blue-600"
                              : "border-gray-300 group-hover/checkbox:border-blue-500"
                          }`}
                        >
                          {isSelected && (
                            <Check size={14} className="text-white" />
                          )}
                        </div>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleProductSelection(product)}
                          className="hidden"
                        />
                        <span
                          className={`font-medium ${
                            isSelected
                              ? "text-blue-600"
                              : "text-gray-600 group-hover/checkbox:text-gray-800"
                          }`}
                        >
                          {locale == "id" ? `Bandingkan` : `Compare`}
                        </span>
                      </label>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                Tidak ada produk ditemukan untuk kategori ini.
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                        currentPage === page
                          ? "bg-orange-500 text-white"
                          : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Floating Compare Button */}
      <AnimatePresence>
        {selectedProducts.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-white shadow-2xl rounded-full px-6 py-3 flex items-center gap-4 border border-gray-200"
          >
            <div className="flex -space-x-2">
              {selectedProducts.map((p, i) => (
                <div
                  key={p.id}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative"
                >
                  <Image
                    src={getImage(p.imageUrl)}
                    fill
                    alt={p.name}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800">
                {selectedProducts.length} Produk Dipilih
              </span>
              <span className="text-xs text-gray-500">Maksimal 4 produk</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2"
            >
              {locale == "id" ? `Bandingkan Sekarang` : `Compare Now`}{" "}
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setSelectedProducts([])}
              className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <ComparisonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        products={selectedProducts.map((p) => ({
          ...p,
          imageUrl: getImage(p.imageUrl),
        }))}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}
