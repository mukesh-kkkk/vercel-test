"use client";
import React from "react";
import Cookies from "js-cookie";

const VayuTakeTheSkinTest = ({
  variant,
  redirectTo,
  cookiesOne,
  cookiesTwo,
  hairTestId,
  text,
  tm,
  size,
}) => {
  const hairTestButtonColor = {
    white: "bg-[#fff] hover:bg-[#3e3e3e] text-[#000] hover:text-[#fff]",
    black: "bg-[#3e3e3e] hover:bg-[#fff] text-[#fff] hover:text-[#000]",
    green: "bg-[#3e3e3e] hover:bg-[#b7d340] text-[#fff] hover:text-[#fff]",
    dark: "bg-[#3e3e3e] hover:bg-[#272728] text-[#fff]",
    mobileSmall: "w-[12rem] text-[14px] tracking-wider",
    mobileBig: "w-[14rem] text-[18px] tracking-wide",
  };

  const handleClick = () => {
    Cookies.set(`${cookiesOne}`, `${cookiesTwo}`);
  };

  return (
    <div>
      <div className="block xl:hidden lg:hidden md:hidden">
        <a
          href={redirectTo}
          onClick={handleClick}
          className={`flex ${hairTestButtonColor[variant]} h-[2.8rem] ${hairTestButtonColor[size]} mt-4 items-center justify-center font-jakara font-[800] rounded-[5px] md:rounded-[10px] uppercase cursor-pointer`}
          id={hairTestId}
        >
          {text ? text : "Take The Hair Test"}{" "}
          <sup
            style={{
              fontSize: 4,
              position: "relative",
              top: 3,
              left: 3,
            }}
          >
            {tm ? tm : "TM"}
          </sup>
        </a>
      </div>
      <div className="hidden xl:flex lg:flex md:flex justify-start">
        <a
          href={redirectTo}
          onClick={handleClick}
          className={`flex ${hairTestButtonColor[variant]} justify-center items-center h-[3rem] w-[16rem] mt-0 text-[16px] md:text-xl lg:text-xl xl:text-[19px] font-jakara font-[700] rounded-[5px] md:rounded-[10px] uppercase cursor-pointer`}
          id={hairTestId}
        >
          {text ? text : "Take The Hair Test"}{" "}
          <sup
            style={{
              fontSize: 9,
              position: "relative",
              top: 5,
              left: 5,
            }}
          >
            {tm ? tm : "TM"}
          </sup>
        </a>
      </div>
    </div>
  );
};

export default VayuTakeTheSkinTest;
