import Header from "@/components/vayu/components/generic/Headers";
import Questions from "@/components/vayu/components/generic/Questions";
import AnalyticsContextProvider from "@/components/vayu/context/AnalyticsContext";
import QuestionsContextProvider from "@/components/vayu/context/questions-store";
import { Suspense } from "react";
export default function page() {
  return (
    <>

      <QuestionsContextProvider>
        <AnalyticsContextProvider>
          <Header />
          <Suspense>
          <Questions />
          </Suspense>
        </AnalyticsContextProvider>
      </QuestionsContextProvider>
    </>
  );
}

export async function generateMetadata() {
  return {
    title: "Vayu Dx Skin Diagnosis",
  };
}