"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "../../constants/functions";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow variant={"dark"} />,
  prevArrow: <SamplePrevArrow variant={"dark"} />,
  adaptiveHeight: true,
};

let settingsNoArrow = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  lazyload: true,
  adaptiveHeight: true,
  className: "center",
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        centerMode: false,
        adaptiveHeight: true,
      },
    },
  ],
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};
export default function VayuHowItWorks({ howItWorks }) {
  return (
    <>
      <div className="xl:pt-6 xl:w-11/12 xl:mx-auto xs:pt-3 flex justify-center mb-3">
        <h2 className="text-center xl:pb-8 xs:px-4 font-jakara font-[700] text-[#212121] xl:text-[40px] xs:text-[36px] xs:w-full xl:w-full leading-10">
          How it works
        </h2>
      </div>
      <div className=" justify-center ms-12 xl:flex md:flex lg:flex xs:hidden sm:hidden">
        <Slider
          {...settings}
          className="2xl:w-9/12 xl:w-10/12 xs:w-11/12 flex items-center justify-center"
        >
          {howItWorks.map((value, index) => {
            return (
              <div key={index} className="p-3">
                <CustomerCard value={value} />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="justify-center xl:hidden md:hidden lg:hidden xs:flex mb-8 xs:px-2">
        <Slider
          {...settingsNoArrow}
          className="w-[100%] xl:pt-9 md:pt-9 lg:pt-9 py-0 block mx-auto hide-next-arrow"
        >
          {howItWorks.map((value, index) => {
            return (
              <div className="p-2 rounded-lg w-[100%] ms-8" key={index}>
                <CustomerCard value={value} />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

function CustomerCard({ value }) {
  return (
    <div className="border rounded-lg xs:h-fit xs:w-full xl:h-full xl:w-[25rem] relative">
      <div className="rounded-lg mx-auto ">
        <Image
          height={157}
          width={300}
          loading="lazy"
          src={value.src}
          className={"mx-auto rounded-lg xs:w-full xs:h-full xl:h-full"}
          alt={value.alt}
        />
      </div>
      <div className="flex flex-col justify-end px-3 rounded-lg absolute bottom-0 w-full h-48 bg-gradient-to-b from-white/0 to-black/95">
        <h2 className="text-[18px] pb-1 pt-2 text-[#fff] xl:text-[20px] font-sans font-[800]">
          {value.title}
        </h2>
        <p className="xl:text-[14px] xs:text-[14px] xl:w-[19rem] xs:w-full text-[#fff] pb-3 font-[300]">
          {value.description}
        </p>
      </div>
    </div>
  );
}
