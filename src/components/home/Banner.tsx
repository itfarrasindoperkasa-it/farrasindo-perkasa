"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeBannerData from "@/lib/datas/home_banner";
import Image from "next/image";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: 20,
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

function Banner({
  height,
  className,
  messages,
  ...props
}: {
  height: string;
  className?: string;
  messages: any[];
}) {
  console.log(messages[0]);
  const banners = HomeBannerData;

  var settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <Slider {...settings} className={`${className} bg-white`}>
      {banners.map((banner: any, idx: any) => (
        <div key={idx} className={`${height} relative`}>
          <span
            className="z-20 absolute text-white font-bold left-5 top-60 text-5xl max-w-[60vw] animate-bannerText"
            style={{
              animation: "bannerTextFadeUp 1s cubic-bezier(0.4,0,0.2,1) both",
            }}
          >
            {messages[idx].title}
          </span>
          <Image
            src={banner}
            fill={true}
            alt={`Home Banner ${idx}`}
            className="object-cover"
          />
        </div>
      ))}
    </Slider>
  );
}

export default Banner;
