"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import ProductRanges from "@/lib/datas/product_range";

// function SampleNextArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         left: 20,
//         zIndex: 10,
//       }}
//       onClick={onClick}
//     />
//   );
// }

export default function ProductRange({ message }: { message: any }) {
  var settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-bold text-center">{message.title}</h2>
      <div className="filter-product flex gap-2 justify-center md:max-w-[70vw] mx-auto flex-wrap">
        {message.filters.map((filter: any, idx: any) => (
          <button
            className="border border-1 border-orange-400 px-2 py-1 text-orange-400 rounded-md cursor-pointer hover:shadow-md hover:scale-105 transition-all"
            key={idx}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="products">
        <Slider {...settings} className={``}>
          {ProductRanges.map((product: any, idx: any) => (
            <div key={idx} className={`py-10`}>
              <div className="w-[80%] shadow-lg/20 relative h-[300px] rounded-xl flex flex-col p-4 items-center hover:bg-orange-400 hover:text-white transition-all">
                <span className="font-bold text-3xl text-center mb-20 z-20">
                  {product.category}
                </span>
                <Image
                  src={product.image}
                  fill={true}
                  alt={`Product Range ${idx}`}
                  className={`object-contain hover:scale-130 cursor-pointer transition-all`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
