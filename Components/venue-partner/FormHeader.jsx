import React from "react";

const FormHeader = () => {
  return (
    <>
      <div className="bg-[#FA7957] sm:hidden h-[150px] flex flex-col justify-end"></div>
      <div
        className="relative w-full h-[400px] md:h-[400px] flex items-center lg:justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/venue-partner/form-hero.png')" }}
      >
        {/* Centered Text */}
        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight z-10 ml-5 max-sm:absolute max-sm:top-0">
          Let’s Partner Up!
        </h1>

        {/* Mascot Image */}
        <div className="absolute right-4 bottom-0 h-[85%] md:h-[95%]">
          <img
            src="/venue-partner/form-hero-img.png"
            alt="Mascot"
            className="h-full w-auto object-contain object-bottom"
          />
        </div>
      </div>
    </>
  );
};

export default FormHeader;
