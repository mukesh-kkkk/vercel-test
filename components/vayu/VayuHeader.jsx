// import BurgerMenuSvg from "@/assets/svgs/BurgerMenuSvg";
// import CartSvg from "@/assets/svgs/CartSvg";
// import ProfileSvg from "@/assets/svgs/ProfileSvg";
import WhatsAppSvg from "../../assets/svg/WhatsAppSvg";
import { CDN_BASE_URL } from "../../constants/config";
import Image from "next/image";
import React from "react";
import VayuTakeTheSkinTest from "../generic/VayuTakeTheSkinTest";
import Link from "next/link";

const vayuLogo = `${CDN_BASE_URL}website_images/vayu_images/vayu_logo.webp`;

const VayuHeader = () => {
  return (
    <>
      <nav
        className={
          "bg-custom-black w-full fixed top-0 z-50 xl:py-[0.8rem] xs:py-[0.4rem]"
        }
      >
        <div className="flex flex-wrap justify-between items-center px-2 xl:px-[43px] md:px-6">
          <Link href="/vayu">
            <Image
              src={vayuLogo}
              alt="Vayu Logo"
              className="cursor-pointer xs:w-[83px] xs:h-[25px] xl:w-[120px] xl:h-[37px]"
              unoptimized={true}
              height={37}
              width={120}
            />
          </Link>
          <div className="flex items-center">
            <div className="hidden xl:block lg:block md:block">
              <VayuTakeTheSkinTest
              redirectTo={'/skin-test'}
                variant={"white"}
                text={"TAKE THE SKIN TEST"}
                tm={" "}
              />
            </div>
            <div className="xl:px-[10px] xs:px-[5px] cursor-pointer">
              <a href="https://api.whatsapp.com/send/?phone=%2B919152511116&text=Hi%2C+I+would+like+to+speak+to+a+Care+Expert%21&type=phone_number&app_absent=0">
                <WhatsAppSvg theme={"light"} />
              </a>
            </div>
            {/* <div className="xl:px-[10px] xs:px-[5px] cursor-pointer">
              <ProfileSvg />
            </div>
            <div className="xl:px-[10px] xs:px-[5px] cursor-pointer">
              <CartSvg />
            </div>
            <div className="self-center py-[1px] pl-[10px] cursor-pointer">
              <BurgerMenuSvg />
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default VayuHeader;
