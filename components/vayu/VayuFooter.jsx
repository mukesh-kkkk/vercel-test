"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CDN_BASE_URL } from "@/constants/config";
import WhatsAppSvgFooter from "@/assets/svg/WhatsAppSvgFooter.jsx"
import MobileWhatsAppIcon from "./helpers/MobileWhatsAppIcon";

const vayuLogo = `${CDN_BASE_URL}website_images/vayu_images/vayu_logo.webp`;

const VayuFooter = () => {
  return (
    <div className="bg-[#656565] xl:h-[15rem] pb-0 flex xs:flex-col xl:flex-col justify-between xl:px-12">
      <div className="hidden xl:block lg:block md:block">
        <div className="flex justify-between">
          <div className="flex gap-12 pt-3">
            <div className="flex flex-col">
              <div className="w-fit">
                <Link href="/vayu" target="_blank">
                  <Image
                    className=""
                    alt="vayu_logo"
                    src={vayuLogo}
                    width="80"
                    height="20"
                    loading="lazy"
                  />
                </Link>
              </div>
              <Link target="_blank" href="/vayu/skin-test">
                <p className="font-jakara text-[15px] text-white hover:text-[#C0C0C0] xl:w-[10rem]">
                  Take The Skin Test
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <Link href="tel:+91 9152511116">
                <p className="font-jakara text-[15px] text-white hover:text-[#C0C0C0] tracking-widest">
                  +91 9152511116
                </p>
              </Link>
              <div>
                <Link href="mailto:info@vayuskin.in">
                  <p className="font-jakara text-[15px] text-white hover:text-[#C0C0C0]">
                    info@vayuskin.in
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B919152511116&text=Hi%2C+I+would+like+to+speak+to+a+Care+Expert%21&type=phone_number&app_absent=0"
              aria-describedby="a11y-new-window-external-message"
              rel="null noopener"
              style={{
                display: "flex",
                justifyContent: "center",
                borderBottom: "0px",
              }}
              target="_blank"
            >
              <WhatsAppSvgFooter />
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile version */}
      <div className="block xl:hidden lg:hidden md:hidden">
        <div className="flex py-3 px-3 justify-between">
          <div className="flex flex-col">
            <div className="w-fit">
              <Link href="/vayu" target="_blank">
                <Image
                  className=""
                  alt="vayu_logo"
                  src={vayuLogo}
                  width="80"
                  height="20"
                  loading="lazy"
                />
              </Link>
            </div>
            <div>
              <Link target="_blank" href="/vayu/skin-test">
                <p className="font-jakara text-[15px] text-white hover:text-[#C0C0C0] xl:w-[10rem]">
                  Take The Skin Test
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <Link href="tel:+91 9152511116">
                <p className="font-jakara text-[15px] text-white hover:text-[#C0C0C0] tracking-widest">
                  +91 9152511116
                </p>
              </Link>
              <div className="">
                <Link
                  href="https://api.whatsapp.com/send/?phone=%2B919152511116&text=Hi%2C+I+would+like+to+speak+to+a+Care+Expert%21&type=phone_number&app_absent=0"
                  aria-describedby="a11y-new-window-external-message"
                  rel="null noopener"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    borderBottom: "0px",
                  }}
                  target="_blank"
                >
                  <MobileWhatsAppIcon />
                </Link>
              </div>
            </div>
            <div>
              <Link href="mailto:info@vayuskin.in">
                <p className="font-jakara text-[15px] text-white hover:text-[#C0C0C0] xs:w-[8rem]">
                  info@vayuskin.in
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end xl:w-full justify-center py-1 xs:py-3">
        <p
          className="text-white"
          style={{
            lineHeight: "1.6",
            fontSize: "12px",
          }}
        >
          &#169; Registered Copyright 2024
        </p>
      </div>
    </div>
  );
};

export default VayuFooter;
