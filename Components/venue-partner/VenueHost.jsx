import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function VenueHost() {
  const router = useRouter();

  return (
    <section className="py-20 px-6">
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
          <div className="absolute inset-0 z-20 pointer-events-none h-[90%] top-7">
            <Image
              src="/venue-partner/vps4-top.png"
              alt="Overlay Effect"
              fill
              className="object-contain object-right-bottom"
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-30 w-full md:w-[60%] p-10 md:p-20 flex flex-col items-start text-left">
            <h2 className="text-[40px] lg:text-[50px] font-[800] text-white leading-[1.1] mb-4 lg:mb-5">
              Ready to Host Amazing <br className="hidden lg:block" /> Community
              Experiences?
            </h2>

            <p className="text-white text-md md:text-lg font-medium max-w-lg mb-5 leading-relaxed opacity-90">
              List your venue on Minglewise and connect with clubs and
              communities searching for the perfect place to meet, learn, and
              celebrate shared passions.
            </p>

            <button
              className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all active:scale-95 shadow-xl"
              onClick={() => router.push("/venue-partner/form")}
            >
              Let&apos;s Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
