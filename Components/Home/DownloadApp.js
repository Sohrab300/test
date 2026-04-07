import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const DownloadApp = () => {
  // Exact gradient from your color picker image
  const containerGradient = {
    background:
      "linear-gradient(160deg, #FA7757 0%, #FFB09D 34%, #DFA6FF 61%, #9600E9 100%)",
  };

  const springTransition = {
    type: "spring",
    damping: 15,
    stiffness: 70,
    restDelta: 0.001,
  };

  return (
    <AnimatePresence>
      <section
        id="download-now"
        className="py-10 bg-[#FDF5FF] px-6 overflow-hidden"
      >
        <div
          style={containerGradient}
          className="max-w-7xl mx-auto rounded-[32px] p-5 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Left Side: Content */}
          <div className="w-full md:w-[50%] text-white z-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ...springTransition }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8 leading-tight poppins-text">
                Start Your Journey Today
              </h2>
              <p className=" md:text-md lg:text-xl font-medium leading-relaxed mb-3 md:mb-6 lg:mb-12 text-white/90 poppins-text">
                Download MingleWise to escape endless scrolling and empty online
                interactions. Discover clubs, join Events, host events, and
                connect with real people through shared passions—all in one
                smart, AI-powered app.
              </p>
            </motion.div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-5">
              {/* App Store Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://apps.apple.com/in/app/minglewise-dating-pro-events/id1574084760"
                target="_blank"
                className="bg-[#1e1e1e] flex items-center gap-1 px-4 py-3 rounded-lg border border-white/10 transition-shadow hover:shadow-2xl"
              >
                <div className="w-8 h-8 relative">
                  <Image
                    src="/assets/icons/App_Store.svg"
                    alt="Apple"
                    width={32}
                    height={32}
                    unoptimized
                    className="w-full h-full scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold">
                    Download on the
                  </span>
                  <span className="text-xl font-bold leading-none">
                    App Store
                  </span>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.appsynergies.minglewise"
                target="_blank"
                className="bg-[#1e1e1e] flex items-center gap-1 px-4 py-3 rounded-lg border border-white/10 transition-shadow hover:shadow-2xl"
              >
                <div className="w-8 h-8 relative">
                  <Image
                    src="/assets/icons/Play_Store.svg"
                    alt="Play Store"
                    width={32}
                    height={32}
                    unoptimized
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold">
                    GET IT ON
                  </span>
                  <span className="text-xl font-bold leading-none">
                    Google Play
                  </span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right Side: Mobile Screens Image */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ...springTransition }}
            className="w-full lg:w-[50%] flex justify-center lg:justify-end items-end relative mt-10 lg:mt-0"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              <Image
                src="/hero-download.png"
                alt="MingleWise App Interface"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default DownloadApp;
