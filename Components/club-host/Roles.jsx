import Image from "next/image";
import React from "react";

const hostSteps = [
  {
    title: "Set the Stage",
    description:
      "Decide what your club is all about (think painting, board games, or hiking).",
    icon: "/club-host/chs-1.svg",
    bgColor: "bg-[linear-gradient(to_right,_#FA7757_0%,_#F99A82_100%)]",
    borderColor: "border-[#E86D48]",
  },
  {
    title: "Plan the Fun",
    description:
      "Set a regular meet-up schedule and create exciting activities.",
    icon: "/club-host/chs-2.svg",
    bgColor: "bg-[linear-gradient(to_right,_#9600E9_0%,_#B35EF5_100%)]",
    borderColor: "border-[#8125F1]",
  },
  {
    title: "Be the Host",
    description:
      "Organise meetups, foster a friendly atmosphere, and make sure everyone has a great time.",
    icon: "/club-host/chs-3.svg",
    bgColor: "bg-[linear-gradient(to_right,_#FF9A44_0%,_#FFBE8A_100%)]",
    borderColor: "border-[#E98D3B]",
  },
  {
    title: "Grow Your Community",
    description:
      "Build a strong community of like-minded people who call themselves great friends",
    icon: "/club-host/chs-4.svg",
    bgColor: "bg-[linear-gradient(to_right,_#3B82F6_0%,_#60A5FA_100%)]",
    borderColor: "border-[#2978E5]",
  },
];

export default function Roles() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[800] text-[#3D3D3D] text-center mb-16">
          What does a Club Host do?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostSteps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgColor} ${step.borderColor} border-2 rounded-[18px] p-6 flex flex-col items-start text-white shadow-lg transition-transform hover:scale-[1.02] duration-300`}
            >
              {/* Icon */}
              <div className="mb-4 h-8 w-8 relative">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-[900] mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-white/90 text-sm md:text-lg font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
