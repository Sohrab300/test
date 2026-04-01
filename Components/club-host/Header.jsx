import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ClubHostHeader() {
  // Matching the pink color from the image
  const brandPink = "text-[#E900B0]";
  const buttonGradient = "bg-gradient-to-r from-[#F0015F] to-[#C301EA]";

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-start pt-20 md:pt-32 overflow-hidden bg-white">
      {/* 1. Background Layer (Grid and Radial Lines) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/club-host/hero-bg.png"
          alt="Background Grid"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base font-bold tracking-[0.2em] text-gray-800 mb-4"
        >
          CLUB HOST
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-[900] text-[#3D3D3D] leading-tight"
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
        />
      </motion.div>
    </section>
  );
}
