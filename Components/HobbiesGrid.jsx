import Image from "next/image";
import React from "react";

const hobbies = [
  {
    name: "Hiking",
    src: "/assets/hobbies-svg/SVG-1.png",
    size: "w-7 h-8",
    bgColor: "bg-[linear-gradient(to_right,_#FA7757_0%,_#F99A82_100%)]",
    borderColor: "border-[#E86D48]",
  },
  {
    name: "Photography",
    src: "/assets/hobbies-svg/SVG-2.svg",
    size: "w-9 h-7",
    bgColor: "bg-[linear-gradient(to_right,_#9600E9_0%,_#B35EF5_100%)]",
    borderColor: "border-[#8125F1]",
  },
  {
    name: "Cooking",
    src: "/assets/hobbies-svg/SVG-3.png",
    size: "w-8 h-8",
    bgColor: "bg-[linear-gradient(to_right,_#FF9A44_0%,_#FFBE8A_100%)]",
    borderColor: "border-[#E98D3B]",
  },
  {
    name: "Book Clubs",
    src: "/assets/hobbies-svg/SVG-4.svg",
    size: "w-9 h-8",
    bgColor: "bg-[linear-gradient(to_right,_#3B82F6_0%,_#60A5FA_100%)]",
    borderColor: "border-[#2978E5]",
  },
  {
    name: "Fitness",
    src: "/assets/hobbies-svg/SVG-5.svg",
    size: "w-9 h-8",
    bgColor: "bg-[linear-gradient(to_right,_#10B981_0%,_#34D399_100%)]",
    borderColor: "border-[#1EA26F]",
  },
  {
    name: "Gaming",
    src: "/assets/hobbies-svg/SVG-6.png",
    size: "w-9 h-7",
    bgColor: "bg-[linear-gradient(to_right,_#EF4444_0%,_#F87171_100%)]",
    borderColor: "border-[#E33E3E]",
  },
  {
    name: "Live Music",
    src: "/assets/hobbies-svg/SVG-7.svg",
    size: "w-7 h-8",
    bgColor: "bg-[linear-gradient(to_right,_#F59E0B_0%,_#FBBF24_100%)]",
    borderColor: "border-[#E89D14]",
  },
  {
    name: "Cycling",
    src: "/assets/hobbies-svg/SVG-8.png",
    size: "w-9 h-8",
    bgColor: "bg-[linear-gradient(to_right,_#8B5CF6_0%,_#A78BFA_100%)]",
    borderColor: "border-[#7245F1]",
  },
];

const HobbiesGrid = () => {
  const scrollToDownloadapp = (e) => {
    e.preventDefault();
    const element = document.getElementById("download-the-app");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="bg-[#FBF5FF] py-18 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-[900] text-center text-[#4B4B4B] mb-12 tracking-tight">
          Explore Popular Hobbies
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`${hobby.bgColor} ${hobby.borderColor} border-2 rounded-[1.8rem] p-7 flex flex-col justify-between h-[210px] transition-transform hover:scale-[1.02] cursor-pointer shadow-sm`}
            >
              {/* Top Content */}
              <div className="text-white">
                <div className="mb-3">
                  <Image
                    src={hobby.src}
                    alt=""
                    width={52}
                    height={42}
                    className={hobby.size}
                  />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  {hobby.name}
                </h3>
              </div>

              {/* Glassmorphic Button */}
              <button
                onClick={scrollToDownloadapp}
                className="w-full py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white font-bold text-lg hover:bg-white/30 transition-colors"
              >
                Join Club
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesGrid;
