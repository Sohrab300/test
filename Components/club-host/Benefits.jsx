import Image from "next/image";
import React from "react";

export default function Benefits() {
  // Exact gradient from your color picker image
  const textGradient =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F0015F] via-[#ED006A] via-[#D602AF] to-[#C301EA]";

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden flex flex-col items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/club-host/chs-hero-2.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[800] text-[#3D3D3D] text-center mb-16 md:mb-24">
          What does a Club Leader get?
        </h2>

        {/* Benefits Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 lg:gap-16 w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center max-w-sm">
            <div className="relative w-40 h-40 md:w-56 md:h-56 mb-4">
              <Image src="/1.png" alt="1" fill className="object-contain" />
            </div>
            <h3
              className={`text-2xl md:text-3xl font-[900] mb-3 ${textGradient}`}
            >
              Community Love
            </h3>
            <p className="text-[#4A4A4A] text-lg font-medium leading-tight px-4">
              Leaders are the heart of Clubs, celebrated for creating belonging
              and passion. (Trust us, we know)
            </p>
          </div>

          {/* Arrow (Hidden on mobile or centered) */}
          <div className="relative w-16 h-8 md:w-24 md:h-12 rotate-90 md:rotate-0">
            <Image
              src="/arrow.png"
              alt="Arrow"
              fill
              className="object-contain"
            />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center max-w-sm">
            <div className="relative w-40 h-40 md:w-56 md:h-56 mb-4">
              <Image src="/2.png" alt="2" fill className="object-contain" />
            </div>
            <h3
              className={`text-2xl md:text-3xl font-[900] mb-3 ${textGradient}`}
            >
              Monetary Benefits
            </h3>
            <p className="text-[#4A4A4A] text-lg font-medium leading-tight px-4">
              Club Leaders can charge community fees for meet-ups. We take a
              minor cut, and the rest goes to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
