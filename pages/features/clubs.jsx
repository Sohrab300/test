import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import DownloadApp from "@/Components/Home/DownloadApp";

const ClubsFeatures = () => {
  const downloadGradient =
    "bg-[linear-gradient(90deg,_#FA7558_5%,_#F95A63_100%)]";

  const handleDownloadClick = () => {
    const element = document.getElementById("download-app");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featureData = [
    {
      title: "Discover your Clubs",
      description:
        "Browse clubs across hobbies like sports, art, music, games, and more. Explore communities built around shared interests. Find the perfect club for you.",
      image: "/features/cc-1.png",
      reverse: false,
    },
    {
      title: "Join your Interested Clubs",
      description:
        "Become a member of clubs that match your passions. Connect with people who enjoy the same activities. Be part of a growing community.",
      image: "/features/cc-2.png",
      reverse: true,
    },
    {
      title: "Become a Club Host",
      description:
        "Start your own club around a hobby you love. Invite people who share your interests. Build a thriving community together.",
      image: "/features/cc-3.png",
      reverse: false,
    },
    {
      title: "Community Engagement",
      description:
        "Interact with members through updates and discussions. Share experiences and stay connected. Keep your club active and engaging.",
      image: "/features/cc-4.png",
      reverse: true,
    },
  ];

  return (
    <div className="bg-[#fbf5ff] min-h-screen font-sans pb-20">
      <Head>
        <title>Clubs & Communities | MingleWise</title>
      </Head>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Main Header */}
        <div className="text-center my-20">
          <h1 className="text-4xl md:text-5xl font-bold poppins-text">
            <span className="text-[#F0015F]">Clubs &</span>{" "}
            <span className="text-[#444444]">Communities</span>
          </h1>
        </div>

        {/* Feature Sections */}
        <div className="space-y-24 md:space-y-10">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center justify-between gap-10 md:gap-20`}
            >
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 flex flex-col items-start text-left"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] mb-6 leading-tight poppins-text">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-lg poppins-text">
                  {feature.description}
                </p>

                {/* Download Button */}
                <button
                  onClick={handleDownloadClick}
                  className={`${downloadGradient} text-white px-5 py-2.5 rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg group`}
                >
                  <span className="font-semibold text-lg">Download</span>
                  <div className="scale-[1.3]">
                    <ArrowDownToLine className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  </div>
                </button>
              </motion.div>

              {/* Phone Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <div className="relative w-full max-w-[320px] md:max-w-[420px]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* This is the target for the scroll - You can place your DownloadApp component here */}
      <div id="download-app" className="">
        <DownloadApp />
      </div>
    </div>
  );
};

export default ClubsFeatures;
