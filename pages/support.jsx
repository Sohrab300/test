import FAQSection from "@/Components/FAQSection";
import DownloadApp from "@/Components/Home/DownloadApp";
import Head from "@/Head";
import React, { useEffect } from "react";

const faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textGradient =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F0015F] via-[#ED006A] via-[#D602AF] to-[#C301EA]";
  return (
    <div className="bg-[#fbf5ff] pt-36 pb-20">
      <Head title={"FAQ"} description={"Frequently Asked Questions"} />
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-3xl md:text-5xl font-semibold poppins-text flex flex-col gap-4 mt-10">
          <span>
            Frequently Asked{" "}
            <span className={`${textGradient}`}>Questions</span>
          </span>
          <p className="text-[#4A5568] text-lg leading-relaxed md:leading-snug px-6 max-w-4xl md:max-w-6xl mx-auto font-['Poppins']">
            Find answers to the most popular questions about MingleWise here. If
            you are facing any issue using the app, contact us at
            support@minglewise.com or via the form below. We are here to help
            you 24/7.
          </p>
        </p>
        <FAQSection />
      </div>
      <DownloadApp />
    </div>
  );
};

export default faq;
