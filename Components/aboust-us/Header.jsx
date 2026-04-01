import React from "react";

const Header = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden flex flex-col items-center justify-center">
      {/* Left Pattern Block */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block select-none pointer-events-none">
        <img
          src="/about-us/left.png"
          alt=""
          className="h-24 md:h-20 lg:h-30 xl:h-32 w-auto object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="text-center z-10 px-6">
        <h4 className="text-gray-600 font-bold uppercase tracking-[0.2em] text-sm md:text-lg mb-4">
          ABOUT US
        </h4>

        <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-[#333333] tracking-tight leading-tight">
          The{" "}
          <span className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent">
            Minglewise
          </span>{" "}
          Way
        </h2>
      </div>

      {/* Right Pattern Block */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block select-none pointer-events-none">
        <img
          src="/about-us/right.png"
          alt=""
          className="h-24 md:h-20 lg:h-30 xl:h-32 w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Header;
