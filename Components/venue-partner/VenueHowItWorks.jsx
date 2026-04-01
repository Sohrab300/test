import Image from "next/image";
import React from "react";

export default function VenueHowItWorks() {
  const textGradient =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F0015F] via-[#ED006A] via-[#D602AF] to-[#C301EA]";

  const steps = [
    {
      id: 1,
      numberImg: "/1.png",
      title: "Submit Your Venue Details",
      desc: "Fill out the venue partner form with your location, venue type, and facilities available.",
    },
    {
      id: 2,
      numberImg: "/2.png",
      title: "Get Verified by Our Team",
      desc: "Our team reviews your venue details to ensure it fits the community event experience.",
    },
    {
      id: 3,
      numberImg: "/3.png",
      title: "Get Listed on Minglewise",
      desc: "Your venue becomes visible to club hosts and communities looking for places to host events.",
    },
    {
      id: 4,
      numberImg: "/4.png",
      title: "Venue launch",
      desc: "Club hosts and organizers can discover your venue and collaborate with you to host meetups, workshops, and experiences.",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden flex flex-col items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/venue-partner/vps2-bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl font-[800] text-[#3D3D3D] text-center mb-16 md:mb-24">
          How it works?
        </h2>

        {/* 2x2 Grid Container */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-32 lg:gap-y-40 sm:gap-x-32 lg:gap-x-52">
          {/* Arrow: 1 to 2 (Right) */}
          <div className="block absolute max-sm:top-[21%] max-sm:rotate-90 top-[15%] left-1/2 -translate-x-1/2 z-20 w-16 h-8">
            <Image
              src="/arrow.png"
              alt="arrow"
              fill
              className="object-contain"
            />
          </div>

          {/* Arrow: 2 to 3 (Down) */}
          <div className="block absolute max-sm:top-[49%] top-[48%] max-sm:right-[40%] right-[15%] -translate-y-1/2 z-20 w-16 h-8 rotate-90">
            <Image
              src="/arrow.png"
              alt="arrow"
              fill
              className="object-contain"
            />
          </div>

          {/* Arrow: 3 to 4 (Left) */}
          <div className="block absolute bottom-[25%] max-sm:bottom-[23%] left-1/2 max-sm:rotate-90 -translate-x-1/2 z-20 w-16 h-8 rotate-180 sm:scale-y-[-1]">
            <Image
              src="/arrow.png"
              alt="arrow"
              fill
              className="object-contain"
            />
          </div>

          {/* Mapping Steps in order: 1, 2, 3, 4 */}
          {/* Note: In a 2-col grid, the order is 1(TL), 2(TR), 3(BR), 4(BL) */}
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center text-center max-w-xs mx-auto ${
                step.id === 3 ? "sm:col-start-2" : "" // Forces 3 to be on the right
              } ${
                step.id === 4 ? "sm:col-start-1 sm:row-start-2" : "" // Forces 4 to be on the left below 1
              }`}
            >
              {/* Number Image */}
              <div className="relative w-32 h-32 md:w-44 md:h-44 mb-4">
                <Image
                  src={step.numberImg}
                  alt={step.id.toString()}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Step Title */}
              <h3
                className={`text-xl md:text-2xl font-[900] mb-3 leading-tight ${textGradient}`}
              >
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[#4A4A4A] text-base md:text-lg font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
