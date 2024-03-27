import React from "react";
import VayuHeader from "./VayuHeader";
import BannerSection from "./BannerSection";
import ListOfProblems from "./ListOfProblems";
import {
  listOfProblems,
  resultsAndTestimonials,
  howItWorks,
  ourInHouseDoctors,
  safeAndScintific,
} from "./allVayuData";
import VayuTestimonials from "./VayuTestimonials";
import VayuSciences from "./VayuSciences";
import VayuHowItWorks from "./VayuHowItWorks";
import OurInHouseDoctors from "./OurInHouseDoctors";
import ScintificAndDiagnose from "./ScintificAndDiagnose";
import VayuLandingGoogleReview from "./VayuLandingGoogleReview";
import VayuFooter from "./VayuFooter";

const VayuLanding = () => {
  const filteredTestimonials = [
    resultsAndTestimonials.roshniSinha,
    resultsAndTestimonials.samreenAnsari,
    resultsAndTestimonials.ananyaSharma,
    resultsAndTestimonials.swatiGoswami,
  ];

  const filteredDoctors = [
    ourInHouseDoctors.siddhiSonawane,
    ourInHouseDoctors.dhwaniSaxena,
    ourInHouseDoctors.aarushiMittal,
    ourInHouseDoctors.preetiSurname,
  ];

  return (
    <div>
      <VayuHeader />
      <BannerSection />
      <VayuLandingGoogleReview />
      <ListOfProblems listOfProblems={listOfProblems} />
      <VayuTestimonials resultsAndTestimonials={filteredTestimonials} />
      <VayuSciences />
      <VayuHowItWorks howItWorks={howItWorks} />
      <OurInHouseDoctors ourInHouseDoctors={filteredDoctors} />
      <ScintificAndDiagnose safeAndScintific={safeAndScintific} />
      <VayuFooter  />
    </div>
  );
};

export default VayuLanding;
