/* eslint-disable no-mixed-spaces-and-tabs */
import type { Config } from "tailwindcss";

const config: Config = 
{
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      xsm: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },

    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
      fredoka: "Fredoka One",
      Nunito: "Nunito Sans",
      rubik: ["Rubik", "sans-serif"],
      mukta: ["Mukta", "sans-serif"],
      jakara: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      animation: {
        "bounce-200": "bounce 1s infinite 200ms",
        "bounce-400": "bounce 1s infinite 400ms",
      },
      colors: {
        brand: {
          dark: "#414042",
          accent: {
            DEFAULT: "#9bba70",
            light: "#d0d8ba",
          },
          darkgray: "#4d4d4d",
          lightgrey: "#e6e7e8",
          lightGreen: "#a5c174",
          disgray: "#9ca3af",
          error: "#e7aa68",
        },
        textWhite: {
          white: "#ffffff",
        },
        "custom-yellow": "#a5c174",
        "custom-green": "#b7d340",
        "custom-gray": "#414042",
        "custom-black": "#3e3e3e",
        "custom-light-gray": "#414042",
        "custom-blue": "#eaf4f1",
        "custom-lightGray": "#C1C1C1",
        "custom-lightGreen": "#C4DA62",
        "custom-lightBlack": "#414042",
        "custom-blueshade1": "#68aa9e",
        "custom-lightgrey": "#F8F8F8",
        "custom-verylightgreen": "#CDE07A",
        "custom-bordergrey": "#C8D0CE",
        "custom-borderdarkgrey": "#D9D7D7",
        "custom-light": "#F1F1F1",
        "custom-fontgrey": "#73767d",
        "custom-grey": "#e6e7eb",
        "custom-bordercolor": "#ebf1e2",
        "custom-headergrey": "#9ca3ad",
        "custom-orange": "#F2E5A5",
        "custom-pink": "#F7D0A6",
        "custom-lightpink": "#F7E0D0",
        "custom-newverylightgreen": "#F0F9FF",
        "custom-boxgreen": "#E0F0C8",
        "custom-newpink": "#F7CFB5",
        "custom-neworange": "#FFF3C9",
        "custom-fontorange": "#F2B46A",
        "custom-rootCauseBg": "#F7F7F7",
        "custom-rootCauseBgMobile": "#EAF4F1",
        "custom-footerpink": "#FFB7A1",
        "custom-logingrey": "#F4F8EF",
        "custom-loginbordergreen": "#96CF8D",
        "custom-logintextgrey": "#7C7D7A",
        "custom-loginheadergreen": "#B6D748",
        "custom-border-login": "#96CF8D",
        "custom-border-blue": "#40D3B9",
        "custom-disable-grey":"#D0CFCF",
        "custom-light-grey": "#B0B0B0"
      },
      fontSize: {
        xxs: "0.6rem",
        xx4l: "44px",
        x4l: "40px",
		x2l: "27px",
		x1s: "16px"
      },
      height: {
        84: "19.0rem",
        85: "22rem",
        400: "25rem",
      },
      screens: {
        landscape: { raw: "(max-height: 640px)" },
      },
	  lineHeight: {
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
      },
    },
  },
  variants: {
    backgroundColor: ({ after }:any) => after(["disabled"]),
    textColor: ({ after }:any) => after(["disabled"]),
    cursor: ({ after }:any) => after(["disabled"]),
  },
};

export default config;
