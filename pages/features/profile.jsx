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
      title: "Create Your Profile",
      description:
        "Set up your profile by adding your interests, hobbies, and preferences. This helps Minglewise show clubs and events that match your vibe. Start building your personal community space.",
      image: "/features/pp-1.png", // Ensure these are in your public folder
      imageWidth: 418,
      imageHeight: 810,
      reverse: false,
    },
    {
      title: "Interest-Based Discovery",
      description:
        "Explore clubs and events related to the hobbies you love. Find communities that share the same passions. Discover something exciting every time you explore.",
      image: "/features/pp-2.png",
      imageWidth: 410,
      imageHeight: 810,
      reverse: true,
    },
    {
      title: "Live the Moments",
      description:
        "Dive into unforgettable experiences from your favorite clubs. From electrifying nights to exclusive events—see what’s happening now. Feel the energy, anytime.",
      image: "/features/pp-3.png",
      imageWidth: 466,
      imageHeight: 810,
      reverse: false,
    },
  ];

  return (
    <div className="bg-[#fbf5ff] min-h-screen font-sans pb-20">
      <Head>
        <title>Profile & Personalization | MingleWise</title>
      </Head>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Main Header */}
        <div className="text-center my-20">
          <h1 className="text-5xl md:text-6xl font-bold poppins-text">
            <span className="text-[#F0015F]">Profile &</span>{" "}
            <span className="text-[#444444]">Personalization</span>
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

              {/* Phone Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <div className="relative w-full max-w-[320px] md:max-w-[420px]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={feature.imageWidth}
                    height={feature.imageHeight}
                    sizes="(min-width: 768px) 420px, 320px"
                    unoptimized
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

export default ProfileFeatures;
