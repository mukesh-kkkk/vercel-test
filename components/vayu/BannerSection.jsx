import { CDN_BASE_URL } from "@/constants/config";
import Image from "next/image";
import React from "react";
import VayuTakeTheSkinTest from "../generic/VayuTakeTheSkinTest";

const mobile_banner = `${CDN_BASE_URL}website_images/vayu_images/vayu_banner.webp`;
const desktop_banner = `${CDN_BASE_URL}website_images/vayu_images/vayu_desktop_banner.webp`;

const BannerSection = () => {
  return (
    <>
      <div className="flex sm:hidden flex-col items-start relative justify-center custom-black min-h-[250px]">
        <Image
          src={mobile_banner}
          alt="vayu_mobile_banner"
          height={70}
          width={500}
          responsive
          objectFit="cover"
          loading="eager"
        />
        <div
          className="absolute items-start top-20 m-auto left-[50%] w-[100%] px-4"
          style={{ transform: "translateX(-50%)" }}
        >
          <p className="font-jakara text-start text-[36px] font-[700] text-[#fff] leading-10">
            {" "}
            Healthy skin <br />
            starts here
          </p>
          <p className="font-jakara text-left text-[16px] text-[#fff] font-[500] w-[16rem] pt-3">
            Address your skin issues with our personalized solutions based on
            your skin test
          </p>
          <VayuTakeTheSkinTest
            variant={"white"}
            text={"TAKE THE SKIN TEST"}
            tm={" "}
            redirectTo={'/skin-test'}
            size={"mobileBig"}
          />
        </div>
      </div>
      <div className="sm:flex hidden flex-col items-start relative justify-center custom-black min-h-[20%] mt-14">
        <Image
          src={desktop_banner}
          alt="vayu_desktop_banner"
          height={150}
          width={1500}
          responsive
          className="w-full"
          objectFit="cover"
          loading="eager"
        />
        <div className="absolute items-start ps-20">
          <p className="font-jakara text-left text-[64px] font-[700] text-[#fff] leading-[5rem]">
            Healthy skin
            <br />
            starts here
          </p>
          <p className="font-jakara text-left text-[28px]  text-[#fff] font-[400] leading-[35px] mt-6 ">
            Address your skin issues with our personalized
            <br /> solutions based on your skin test
          </p>
          <div className="flex justify-start mt-6">
            <VayuTakeTheSkinTest
              variant={"white"}
              text={"TAKE THE SKIN TEST"}
              tm={" "}
              redirectTo={'/skin-test'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
