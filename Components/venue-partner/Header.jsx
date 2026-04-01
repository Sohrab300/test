import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  // Exact gradient from your color picker image
  const brandGradient =
    "bg-gradient-to-r from-[#F0015F] via-[#ED006A] via-[#D602AF] to-[#C301EA]";
  const textGradient =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F0015F] via-[#ED006A] via-[#D602AF] to-[#C301EA]";

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-36 overflow-visible">
      <div className="absolute top-0 left-0 w-full h-[107%] z-0">
        <Image
          src="/venue-partner/VP-bg.png"
          alt="Top Background"
          fill
          priority
          className="object-cover object-top"
        />
      </div>
      {/* 1. Bottom Background Layer */}
      <div className="absolute bottom-0 left-0 w-full h-[90%] z-10">
        <Image
          src="/venue-partner/hero-b.png"
          alt="Bottom Background"
          fill
          className="object-cover object-bottom"
        />
      </div>
      {/* 2. Content Layer */}
      <div className="relative z-30 flex flex-col items-center text-center px-6 max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base font-bold tracking-[0.25em] text-[#3D3D3D] mb-6"
        >
          VENUE PARTNER
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-[900] text-[#3D3D3D] leading-[1.1] tracking-tight"
        >
          Turn Your Venue Into a <br />
          <span className={textGradient}>Community</span> Hub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-gray-700 text-lg md:text-xl max-w-3xl font-medium leading-relaxed"
        >
          Host experiences, attract new customers, and grow your business by
          partnering with Minglewise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <button
            className={`${brandGradient} text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-all active:scale-95`}
            onClick={() => router.push("/venue-partner/form")}
          >
            Let&apos;s Partner
          </button>
        </motion.div>
      </div>
      {/* 3. Foreground Image (Sketch of people at table) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-20 w-full mt-auto"
      >
        <Image
          src="/venue-partner/hero-t.png"
          alt="Venue Community Sketch"
          width={1920}
          height={600}
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </motion.div>
    </section>
  );
}
