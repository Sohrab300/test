import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ClubHostHeader() {
  // Matching the pink color from the image
  const brandPink = "text-[#E900B0]";
  const buttonGradient = "bg-gradient-to-r from-[#F0015F] to-[#C301EA]";

  const scrollToDownloadapp = (e) => {
    e.preventDefault();
    const element = document.getElementById("download-the-app");

    if (element) {
      // 1. Add a class to body to disable pointer events (hovers)
      document.body.classList.add("is-scrolling");

      // 2. Perform the scroll
      element.scrollIntoView({ behavior: "smooth" });

      // 3. Remove the class after the scroll completes
      // (Roughly 1000ms is enough for most smooth scrolls)
      setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 1200);
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-start pt-20 md:pt-32 overflow-hidden bg-white lg:h-[980px]">
      {/* 1. Background Layer (Grid and Radial Lines) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/club-host/Hero-bg.png"
          alt="Background Grid"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* 2. Content Layer */}
      <div className="absolute z-20 flex flex-col items-center text-center px-6 max-w-4xl mt-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-[24px] lg:text-[32px] font-medium text-gray-800 mb-4 font-['Poppins']"
        >
          CLUB HOST
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl lg:text-7xl font-[900] text-[#3D3D3D] leading-tight"
        >
          Start Your Own <br />
          <span className={brandPink}>Club</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-gray-700 text-lg md:text-xl max-w-2xl font-medium leading-relaxed"
        >
          Want to build your own community? Create your own club or host events
          around the hobbies you love and bring people together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <button
            onClick={scrollToDownloadapp}
            className={`${buttonGradient} text-white px-10 py-3.5 rounded-full font-bold text-lg shadow-[0_10px_20px_rgba(233,0,176,0.3)] hover:scale-105 transition-transform active:scale-95`}
          >
            Become a Host
          </button>
        </motion.div>
      </div>

      {/* 3. Foreground Image Layer (People Silhouettes) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full mt-auto"
      >
        <Image
          src="/club-host/hero-img.png"
          alt="Community Silhouettes"
          width={1920}
          height={600}
          className="w-full h-auto object-contain object-bottom"
          priority
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
