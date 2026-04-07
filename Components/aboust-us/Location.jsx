import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Location = () => {
  // Using the transition style from your reference code
  const transitionStyle = {
    duration: 0.7,
    scale: {
      type: "tween",
      damping: 50,
      stiffness: 200,
      restDelta: 0.001,
    },
  };

  return (
    <>
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={transitionStyle}
            className="text-4xl md:text-5xl font-bold text-[#333333] mb-6"
          >
            Our Location
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ...transitionStyle, delay: 0.1 }}
            className="text-gray-500 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-['Poppins']"
          >
            Our presence is all over the world but we have our office setup in
            United Kingdom and India
          </motion.p>

          {/* Map Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ...transitionStyle, delay: 0.2 }}
            className="relative w-full flex justify-center"
          >
            <Image
              src="/about-us/map.png"
              alt="World Map showing UK and India locations"
              width={1392}
              height={658}
              unoptimized
              className="w-full h-auto object-contain pointer-events-none select-none"
            />
          </motion.div>
        </div>
      </section>
      <section className="bg-[#FAF7FF] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          {/* LEFT BOX: Visit Our Offices In */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={transitionStyle}
            className="bg-white border-2 w-full md:w-[35%] border-[#8A33FD] rounded-[40px] p-10 flex flex-col items-center justify-center text-center shadow-sm min-h-[250px]"
          >
            <Image
              src="/about-us/pin.png"
              alt="Location Pin"
              width={124}
              height={124}
              unoptimized
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-[#E63946] text-2xl font-black  uppercase w-full">
              VISIT OUR OFFICES IN
            </h2>
          </motion.div>
          <div className="w-full md:w-[65%] flex gap-2">
            {/* MIDDLE BOX: India Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={transitionStyle}
              className="bg-white border-2 w-1/2 border-[#8A33FD] rounded-tl-[30px] rounded-bl-[30px] p-8 flex flex-col md:flex-row items-center justify-between shadow-sm min-h-[250px]"
            >
              <div className="flex flex-col items-center text-center md:w-[40%]">
                <Image
                  src="/about-us/india-map.png"
                  alt="India Map"
                  width={125}
                  height={125}
                  unoptimized
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-[#E63946] font-bold text-lg uppercase tracking-wide">
                  INDIA (HQ)
                </h3>
              </div>

              <div className="flex flex-col items-center text-center w-full md:w-2/3 md:pl-4">
                <p className="text-[#333333] text-sm md:text-base leading-relaxed mb-4">
                  D-1602, Orchid Suburbia, Link Road, Kandivali West, Mumbai
                  400067
                </p>
                <a
                  href="https://www.google.com/maps/place/Orchid+Suburbia/@19.2096925,72.8249702,16z/data=!4m10!1m2!2m1!1sD-1602,+Orchid+Suburbia,+Link+Road,+Kandivali+West,+Mumbai+400067!3m6!1s0x3be7b6cf25574699:0x11f8e40f536d2cee!8m2!3d19.2096925!4d72.8344974!15sCkFELTE2MDIsIE9yY2hpZCBTdWJ1cmJpYSwgTGluayBSb2FkLCBLYW5kaXZhbGkgV2VzdCwgTXVtYmFpIDQwMDA2N1o_Ij1kIDE2MDIgb3JjaGlkIHN1YnVyYmlhIGxpbmsgcm9hZCBrYW5kaXZhbGkgd2VzdCBtdW1iYWkgNDAwMDY3kgESYXBhcnRtZW50X2J1aWxkaW5n4AEA!16s%2Fg%2F1td1hg3d?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3875EA] flex items-center gap-1 font-medium hover:underline text-sm"
                >
                  Locate on map
                  <span
                    className="w-4 h-4 bg-[#3875EA]"
                    style={{
                      maskImage: "url('/about-us/resize.svg')",
                      WebkitMaskImage: "url('/about-us/resize.svg')", // For Safari support
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      maskPosition: "center",
                    }}
                  />
                </a>
              </div>
            </motion.div>

            {/* RIGHT BOX: UK Office */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transitionStyle}
              className="bg-white border-2 w-1/2 border-[#8A33FD] rounded-tr-[30px] rounded-br-[30px] p-8 flex flex-col md:flex-row items-center justify-between shadow-sm min-h-[250px]"
            >
              <div className="flex flex-col items-center text-center md:w-[40%]">
                <Image
                  src="/about-us/uk-map.png"
                  alt="UK Map"
                  width={125}
                  height={125}
                  unoptimized
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-[#E63946] font-bold text-lg uppercase tracking-wide">
                  UK OFFICE
                </h3>
              </div>

              <div className="flex flex-col items-center text-center md:w-2/3 pl-4">
                <p className="text-[#333333] text-sm md:text-base leading-relaxed mb-4">
                  186 Malvern Avenue, Harrow, HA2 9HD, United Kingdom
                </p>
                <a
                  href="https://www.google.com/maps/place/186+Malvern+Ave,+Harrow+HA2+9HD,+UK/@51.5643377,-0.3810632,17z/data=!3m1!4b1!4m6!3m5!1s0x48766cd3276dc685:0xe149f89f737f66f5!8m2!3d51.5643344!4d-0.3784883!16s%2Fg%2F11rp2nxqdw?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3875EA] flex items-center gap-1 font-medium hover:underline text-sm"
                >
                  Locate on map
                  <span
                    className="w-4 h-4 bg-[#3875EA]"
                    style={{
                      maskImage: "url('/about-us/resize.svg')",
                      WebkitMaskImage: "url('/about-us/resize.svg')", // For Safari support
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      maskPosition: "center",
                    }}
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
