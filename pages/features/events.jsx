import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import DownloadApp from "@/Components/Home/DownloadApp";

const ProfileFeatures = () => {
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
      title: "Discover Mingle Events",
      description:
        "Explore upcoming events hosted by clubs and communities. Find activities happening around you. Never miss something exciting.",
      image: "/features/em-1.png",
      imageWidth: 507,
      imageHeight: 810,
      reverse: true,
    },
    {
      title: "Explore and Join Events",
      description:
        "Join meetups, hobby sessions, and group activities. Enjoy your interests with like-minded people. Turn simple activities into fun experiences.",
      image: "/features/em-2.png",
      imageWidth: 452,
      imageHeight: 810,
      reverse: false,
    },
    {
      title: "Host Your Own Events",
      description:
        "Create and organize events for your club. Plan activities that bring members together. Make every meetup memorable.",
      image: "/features/em-3.png",
      imageWidth: 345,
      imageHeight: 810,
      reverse: true,
    },
  ];

  return (
    <div className="bg-[#fbf5ff] min-h-screen font-sans pb-20">
      <Head>
        <title>Events & Meetups | MingleWise</title>
      </Head>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Main Header */}
        <div className="text-center my-20">
          <h1 className="text-5xl md:text-6xl font-bold poppins-text">
            <span className="text-[#F0015F]">Events &</span>{" "}
            <span className="text-[#444444]">Meetups</span>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#222222] mb-6 leading-tight poppins-text">
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

              {/* Fixed Image Container */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                {/* 
                  1. Defined a fixed height (h-[500px] or h-[600px])
                  2. aspect-[9/16] ensures they all follow a phone ratio
                  3. "object-contain" prevents stretching 
                */}
                <div className="relative w-full aspect-[9/16] h-[500px] md:h-[600px]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(min-width: 768px) 400px, 320px"
                    unoptimized
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
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

export default ProfileFeatures;
