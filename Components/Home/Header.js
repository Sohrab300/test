import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  // Gradient string from your color picker
  const brandGradient =
    "bg-gradient-to-r from-[#F0015F] via-[#ED006A] via-[#D602AF] to-[#C301EA]";
  const textGradient =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F0015F] via-[#ED006A] via-[#D602AF] to-[#C301EA]";

  const scrollToNewsletter = (e) => {
    e.preventDefault();
    const element = document.getElementById("newsletter-signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDownloadapp = (e) => {
    e.preventDefault();
    const element = document.getElementById("download-the-app");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#FDF9FF] pt-32 md:pt-44 flex flex-col items-center overflow-hidden">
      {/* Background soft glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(240,1,95,0.05)_0%,_transparent_50%)] pointer-events-none" />

      <div className="relative w-[100%] z-10 flex flex-col items-center text-center">
        <div className="mx-auto px-4 flex flex-col items-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-[900] text-[#333] leading-tight max-w-5xl tracking-tight"
          >
            Your <span className={textGradient}>Gateway</span> to Clubs,
            <br className="hidden md:block" /> Events, and Communities
          </motion.h1>

          {/* Sub Heading */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl font-medium leading-relaxed"
          >
            Join clubs, attend meetups, and build real friendships offline. Your
            next adventure is just a click away.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {/* Join Now Button */}
            <button
              onClick={scrollToNewsletter}
              className={`${brandGradient} text-white px-10 py-2.5 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-all active:scale-95`}
            >
              Join Now
            </button>

            {/* Become a Host Button */}
            <button
              onClick={scrollToDownloadapp}
              className="bg-[#4B4B4B] text-white px-10 py-2.5 rounded-full font-bold text-lg shadow-lg hover:bg-black transition-all active:scale-95"
            >
              Become a Host
            </button>
          </motion.div>
        </div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="w-full mt-12"
        >
          <Image
            src="/Hero-main.png"
            alt="MingleWise Community"
            width={1400}
            height={800}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
