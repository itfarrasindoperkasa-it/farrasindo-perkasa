"use client";

import Image from "next/image";
import OurServiceSellImage from "@/asset/images/homes/our-service-sell.png";
import React from "react";
import HomeBannerData from "@/lib/datas/home_banner";
import { Eye, X } from "lucide-react";

const categories = [
  "Concrete Pump",
  "Moli",
  "Stationery Concrete Pump",
  "Self Loading Mixer",
  "Placing Boom",
  "Blend Plant",
];

const merks = ["Zoomlion", "Truemax", "Citipump"];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const vehicles = Array.from({ length: 100 }, (_, i) => {
  const category = getRandomItem(categories);
  const merk = getRandomItem(merks);
  return {
    category,
    merk,
    type: `${merk} S${20 + (i % 10)}`,
    spesification: {
      "max vertical reach": `${19.4 + (i % 5) * 0.5} m`,
      "max horizontal reach": `${15.8 + (i % 5) * 0.5} m`,
      output: `${111 + (i % 10) * 2} cu m/h`,
      pressure: `${70 + (i % 5) * 2} bar`,
      chassis: "multiple choices",
      "Max. rated lifting capacity": i % 2 === 0 ? "55t" : "25t",
      "Max. load moment of basic boom": i % 2 === 0 ? "1568kN.m" : "1067kN.m",
      "Max. load moment of main boom (fully extended)":
        i % 2 === 0 ? "940.8kN.m" : "700kN.m",
      "Max. lifting height of basic boom": i % 2 === 0 ? "11.8m" : "11.3m",
      "Max. lifting height of main boom": i % 2 === 0 ? "44m" : "42.1m",
      "Max. lifting height of jib": i % 2 === 0 ? "60m" : "50m",
    },
  };
});

const quickFindCategories = [
  { label: "Concrete Pump" },
  {
    label: "Moli",
    childrens: [{ label: "Zoomlion MOLI" }, { label: "Truemax" }],
  },
  {
    label: "Stationery Concrete Pump",
    childrens: [
      { label: "Zoomlion" },
      { label: "Schwing" },
      { label: "Citi Pump" },
    ],
  },
  { label: "Self Loading Mixer" },
  { label: "Placing Boom" },
  { label: "Blend Plant" },
];

export default function ProductService() {
  const [showQuickFind, setShowQuickFind] = React.useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return true;
  });

  React.useEffect(() => {
    const handleResize = () => {
      setShowQuickFind(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [openCategory, setOpenCategory] = React.useState<{
    [key: string]: boolean;
  }>(
    quickFindCategories.reduce((acc, category) => {
      acc[category.label] = false;
      return acc;
    }, {} as { [key: string]: boolean })
  );
  return (
    <>
      <div id="productRange" className="w-full">
        <div className="h-[40vh] md:h-[60vh] bg-black mb-20 relative">
          <Image
            src={HomeBannerData[0]}
            fill={true}
            alt="Product Range Banner"
            className="object-cover"
          />
        </div>
        <h1 className="text-center text-4xl font-bold">Product Range</h1>
        <div className="flex gap-5 py-20 px-10 flex-col md:flex-row">
          <section id="quickFindProduct">
            <div className="flex w-full justify-between min-w-[230px]">
              <h2 className="text-3xl text-orange-400 mb-3">Quick Find</h2>
              <button
                className={`text-orange-400 cursor-pointer`}
                onClick={() => setShowQuickFind(!showQuickFind)}
              >
                {showQuickFind && <X />}
                {!showQuickFind && <Eye />}
              </button>
            </div>
            <hr className="bg-orange-400 h-[2px] text-orange-400 rounded-full mb-5" />
            <ul className={`quick-find-list ${showQuickFind ? `` : `hidden`}`}>
              {quickFindCategories.length > 0 &&
                quickFindCategories.map((category, idx) => {
                  return (
                    <li
                      key={idx}
                      onClick={() =>
                        setOpenCategory((prev) => ({
                          ...prev,
                          [category.label]: !prev[category.label],
                        }))
                      }
                    >
                      <p>{category.label}</p>
                      {category.childrens && category.childrens.length > 0 && (
                        <ul
                          className={`child ${
                            openCategory[category.label] == true
                              ? `block`
                              : `hidden`
                          }`}
                        >
                          {category.childrens.map((child, idx) => (
                            <li key={idx}>
                              <p>{child.label}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
            </ul>
          </section>
          <section id="productCard" className="grid md:grid-cols-3 gap-4">
            {vehicles.length > 0 &&
              vehicles.map((vehicle: any, idx: any) => (
                <div
                  className="product-card p-5 shadow-lg/20 rounded-xl flex flex-col items-center gap-2"
                  key={idx}
                >
                  <Image
                    src={OurServiceSellImage}
                    width={230}
                    height={230}
                    alt="Test Vehicle"
                  />
                  <p className="text-2xl font-bold text-center">
                    {vehicle.category}
                  </p>
                  <small className="text-xl text-center">{vehicle.type}</small>
                  <hr className="my-3 h-[2px] rounded-full bg-gray-200 w-full" />
                  <table className="w-full">
                    {/* {console.log(vehicle.spesification)} */}
                    <tbody>
                      {Object.keys(vehicle.spesification)
                        .slice(0, 5)
                        .map((key, idx) => (
                          <tr key={idx}>
                            <td className="font-semibold capitalize">
                              {key.replace(/_/g, " ")}
                            </td>
                            <td>{vehicle.spesification[key]}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ))}
          </section>
        </div>
      </div>
    </>
  );
}
