import Image from "next/image";
import React from "react";

export default function ReadyToLead() {
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
    <section className="py-20 px-6 bg-[#FDF9FF]">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Wrapper */}
        <div className="relative w-full min-h-[300px] md:h-[450px] rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col md:flex-row items-center">
          {/* Layer 1: Background Image (Gradient + Faint Text) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/club-host/chs4-bg.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Layer 2: Middle Image (The People) */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/club-host/chs4-mid.png"
              alt="Club Leaders"
              fill
              className="object-contain object-right-bottom"
            />
          </div>

          {/* Layer 3: Top Image (Overlays/Effects) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <Image
              src="/club-host/chs4-top.png"
              alt="Overlay Effect"
              fill
              className="object-contain object-right-bottom"
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-30 w-full md:w-1/2 p-10 md:p-20 flex flex-col items-start text-left">
            <h2 className="text-[40px] lg:text-[60px] font-[800] text-white leading-[1.1] mb-8">
              Ready to Lead Your Club?
            </h2>

            <p className="text-white text-lg md:text-xl font-medium max-w-lg mb-10 leading-relaxed opacity-90">
              Become a Minglewise Club Leader and start your community journey
              today! We&apos;re here to support you every step of the way.
            </p>

            <button
              onClick={scrollToDownloadapp}
              className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all active:scale-95 shadow-xl"
            >
              Run a Club
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
