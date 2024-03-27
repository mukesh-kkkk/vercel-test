import { CDN_BASE_URL } from "@/constants/config";
import Image from "next/image";


const Header = () => {
  
  return (
    <>
    <div className="bg-[#3b3a3b]"> 
        <div className=" py-2 sm:py-4">
            <div className="text-white  text-[20px] font-[700] ml-[5%]">
              <Image 
              width={'100'}
              height={'50'}
              src={`${CDN_BASE_URL}website_images/vayu_images/vayu_logo.webp`}
               alt="" />
            </div>
            <p className="text-white  ml-[5%]" >This skin test is co-created with doctors</p>
        </div>
    </div>
    </>
       
  );
};

export default Header;


