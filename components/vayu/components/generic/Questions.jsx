"use client";

import { Suspense, lazy, useContext, useEffect, useState } from "react";
// import isEmpty from "lodash/isEmpty";
import { usePathname, useSearchParams } from "next/navigation";

import ProgressBar from "../form/ProgressBar";
import components from "./components";
import { BsArrowLeftShort } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import data from "@components/vayu/assets/questions.json";
// import { sendUtmDataToMoengage } from "@helpers/handleMoengage";
import Loader from "../../components/generic/Loader";
// import { FEMALE_RESULT_PAGE, MALE_RESULT_PAGE } from "@constants/constants";
import useMediaQuery from "../../hooks/useMediaQuerry";
import FormSubmission from "../form/FormSubmission";
import { QuestionsContext } from "../../context/questions-store";
const OnloadFormPage = lazy(() => import("../form/OnloadFormPage"));

const Questions = () => {
  const {
    currentQuestion,
    firstQuestion,
    init,
    removeFromPreviousQuestion,
    allQuestionsFilled,
  } = useContext(QuestionsContext);


  const pathname = usePathname();
  const searchParams = useSearchParams();
  const _page = searchParams.get("page");

  const mobileScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    // if (pathname === "/questions") {
    //   router.push(`${pathname}?cohort=1&lcn=HomeSlideshow&page=homev2`);
    // }
    init(data, "vayu");
  }, []);

  const [formStatus, setFormStatus] = useState("");
  const [tabClosed, setTabClosed] = useState("");
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type == 1) {
        setIsReload(true);
      }
    }
    const val = window.localStorage.getItem("form_status");
    const tabStatus = window.localStorage.getItem("tabclosed");
    if (tabStatus && val) {
      setTabClosed(tabStatus);
      setFormStatus(val);
      window.addEventListener(
        "beforeunload",
        window.localStorage.setItem("tabclosed", "true")
      );
    }
    window.addEventListener(
      "beforeunload",
      window.localStorage.setItem("tabclosed", "true")
    );
  }, []);


  const exitURL = () => {
    if (pathname == "/femaleV2/question") {
      return (
        typeof window !== "undefined" && window.location.assign("/femaleV2")
      );
    } else if (pathname == "/female") {
      // return (
      //   typeof window !== "undefined" && window.location.assign("/pages/female")
      // );
      return (
        typeof window !== "undefined" &&
        window.location.assign("https://traya.health/pages/female")
      );
    } else if (pathname == "/home/question") {
      return typeof window !== "undefined" && window.location.assign("/");
    } else if (pathname == "/questions" && _page === "doctor-landingV1") {
      return (
        typeof window !== "undefined" &&
        window.location.assign("/doctor-landingV1")
      );
    } 
    
   
  };

  console.log(currentQuestion,'currentQuestion');
  return formStatus == "filled" || (tabClosed == "true" && !isReload) ? (
    <OnloadFormPage />
  ) : (
    <>
    {/* <p className="text-center text-[24px] text-[red] font-bold">{currentQuestion?.id}</p> */}
      {!allQuestionsFilled ? (
        <div className="px-4 sm:px-[10%] lg:px-[20%] font-sans vayu">
          {currentQuestion && (
            <>
              <div
                className={`${
                  hidePreviousButton.has(currentQuestion.id) && mobileScreen
                    ? "justify-end"
                    : "justify-between"
                } flex flex-row flex-wrap `}
              >
                <button
                  className="inline-flex items-center focus:outline-none text-brand-dark font-sans"
                  onClick={() =>
                    currentQuestion.id === firstQuestion
                      ? exitURL()
                      : removeFromPreviousQuestion()
                  }
                  id="previous_button"
                >
                  {currentQuestion.id !== firstQuestion && (
                    <>
                      <div className="hidden sm:block md:block lg:block xl:block mt-0.5">
                        <BsArrowLeftShort color="#414042" size={27} />
                      </div>
                      {!hidePreviousButton.has(currentQuestion.id) && (
                        <div className="block sm:hidden md:hidden lg:hidden xl:hidden mt-0.5">
                          <BsArrowLeftShort color="#414042" size={40} />
                        </div>
                      )}
                      <span className="font-[700] hidden sm:block md:block lg:block xl:block underline underline-offset-2">
                        Previous
                      </span>
                    </>
                  )}
                </button>
                <button
                  className="inline-flex items-center my-2 focus:outline-none text-brand-dark"
                  onClick={() => exitURL()}
                  id="exit_button"
                >
                  <span className="hidden sm:block md:block lg:block xl:block font-[700] underline underline-offset-2">
                    Exit
                  </span>

                  <span className="block sm:hidden md:hidden lg:hidden xl:hidden mt-1">
                    <RxCross2 color="#414042" size={27} />
                  </span>
                </button>
              </div>
              <ProgressBar context={"questions"} />
              <Suspense fallback={<Loader />}>
                <div className="flex flex-col items-center justify-center font-sans">
                  {components(currentQuestion, QuestionsContext)}

                  {currentQuestion.id === "phone_number" && (
                    <p className="py-2 px-1 text-xs text-left sm:text-sm text-brand-disgray">
                      *Your contact details will be used by Vayu team to
                      reach out to you via call/sms/whatsapp.
                    </p>
                  )}
                </div>
              </Suspense>
            </>
          )}
        </div>
        
      ) : (
        <FormSubmission />
      )}
    {/* <p className="text-center text-[24px] text-[red] font-bold">{currentQuestion?.id}</p> */}

    </>
  );
};
export default Questions;

// eslint-disable-next-line no-undef
const hidePreviousButton = new Set([
  "first_name",
  "phone_number",
  "email",
  "C1d",
]);
