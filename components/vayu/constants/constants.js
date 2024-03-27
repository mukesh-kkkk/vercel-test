// import Cookies from "js-cookie";
// import { CDN_BASE_URL } from "./config";

// export const COOKIES_EXPIRY = 60; // Days
// var CONSULT_DOCTOR_FEES = "";
// var MALE_RESULT_PAGE = "";
// var FEMALE_RESULT_PAGE = "";

// if (Cookies.get("DOCTOR_LANDING") == "landingV2") {
//   CONSULT_DOCTOR_FEES = 399.0;
// } else if (Cookies.get("DOCTOR_LANDING") == "landingV3") {
//   CONSULT_DOCTOR_FEES = 299.0;
// } else {
//   CONSULT_DOCTOR_FEES = 499.0;
// }

// export var CONSULT_DOCTOR_FEES;

// if (
//   (typeof window !== "undefined" &&
//     window.location.pathname == "/femaleV2/question") ||
//   (typeof window !== "undefined" &&
//     window.location.pathname == "/home/question")
// ) {
//   MALE_RESULT_PAGE = "/pages/result4";
//   FEMALE_RESULT_PAGE = "/pages/female-result";
// } else {
//   MALE_RESULT_PAGE = "https://traya.health/pages/result4";
//   FEMALE_RESULT_PAGE = "https://traya.health/pages/female-result";
// }
// export var MALE_RESULT_PAGE;
// export var FEMALE_RESULT_PAGE;

export const TRAYA_MINI_HOME_URL = "https://traya.health/pages/transplant";
export const APP_TRAYA_DASHBOARD = "https://app.traya.health/login/";
export const APP_DEV_TRAYA_DASHBOARD = "https://portal.dev.hav-g.in/login/";
export const DEFAULT_FORM_CATEGORY = "next_form";
export const WAIT_FOR_PAYMENT = 1000 * 60 * 3; // MilliSeconds

export const SHOPIFY_REPEAT_RESULT = "https://traya.health/pages/Result-repeat";
export const TRAYA_FEMALE_URL = "https://traya.health/pages/female";

export const CLICK_POST_URL = "https://trayahealth.clickpost.ai/returns";

export const PLATFORM = "web_native";

export const LODHA_KEY = "FRsdTOje52Xf1S78vv1gmiyPpDcxtgPw";
export const TOTAL_USERS_FILLED_HAIR_TEST = 2493346;
const apiKeyGoogle = 'AIzaSyDzuBCDe6OnXZYSCaWytymFlMVEKeHTUq8'
export const googleScalpApiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKeyGoogle}`;

// export const trayaLogo = require("../assets/images/traya_logo.jpg");
// export const trayaLogoDark = `${CDN_BASE_URL}website_images/localImages/TrayaLogoDark.webp`;
// // export const traya = require("../assets/images/traya.png");
// export const traya2x = require("../assets/images/traya@2x.png");
// export const traya3x = require("../assets/images/traya@3x.png");

// export const GooglePlayIcon = `${CDN_BASE_URL}website_images/localImages/play_store.webp`;
// export const AppStoreIcon = `${CDN_BASE_URL}website_images/localImages/app_store.webp`;
// export const trayalogo = `${CDN_BASE_URL}website_images/localImages/traya.webp`;

export const productArray = [
  "Digest Boost for Improved Digestivr Ability",
  "Consti Clear for Improved Bowel movement",
  "Cholest Vati Natural Metabolic Booster that Lowers Cholesterol",
  "Scalp Oil with Growth Therapy Booster Shots Regular price Regular priceSale price",
  "Scalp oil with Calm Therapy Booster Oil",
  "Scalp oil with Dandruff Therapy Booster Oil",
  "Scalp oil with Scalp Therapy Booster Oil",
  "Meno Santhulan Tablets",
  "Mom Santhulan Tablets",
  "PCOS Santhulan",
  "Thyro Santhulan Tablets",
  "Dandruff night lotion",
];

export const FAQContent = [
  {
    title: "How can I get my prescription?",
    content:
      "Once your monthly kit is delivered, you can access your digital prescription by scanning the code inside the box. You can also view your prescription by logging into the Traya app or website. Your prescription will have the details about the dosage and usage of each product in your kit.",
  },
  {
    title: "Who is a Traya hair coach and how can I connect with them?",
    content:
      "A Traya hair coach is like a bridge between you and the doctors, who's assigned to you to help you stay on track. The hair coach guides you throughout the treatment journey, takes updates from doctors to monitor your progress and follows up to ensure better results. You can book a call with your hair coach by scheduling a time slot after logging into the Traya app or website.",
  },
  {
    title: "How can I get my diet plan?",
    content:
      "Your customised diet plan is available on the app or can be accessed anytime by logging into the Traya website. Our nutritionist curates these healing diet plans to keep your hair internally nourished.",
  },
  {
    title: "When can I expect results?",
    content:
      "On average, people start seeing results with Traya's hair growth treatment in 5–6 months for the early stages of hair loss. The exact time taken to see these results also depends on factors like age, type, stage, and the reason behind your hair loss. Collectively, over 2.5 lakh Indians have chosen Traya. 93% of customers have seen results with Traya's treatment plans.",
  },
  {
    title: "Will Traya's treatment work on genetic cases of hairfall?",
    content:
      "In early stages, Traya's customised treatment plans can help manage your genetic hair loss and prevent it from developing into baldness, as the plans are carefully curated with our Holistic 3 Science Formula that blends dermatology, ayurveda and nutrition.",
  },
  {
    title:
      "I have a health/medical condition. Can I still take Traya's hair growth treatment?",
    content:
      "In most cases, hair loss is a result of an underlying condition. That is why Traya doctors go through each and every case before approving the treatment plan and then customise the dosage accordingly. However, please make sure you specify your condition to the experts before starting the treatment.",
  },
];
