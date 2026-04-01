import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const uspData = [
  {
    id: 1,
    endValue: 175,
    suffix: "+",
    label: "Partnered Venues",
    img: "/assets/usp/usp-1.png",
    layout: "flex-row",
  },
  {
    id: 2,
    endValue: 120,
    suffix: "K+",
    label: "App Downloads",
    img: "/assets/usp/usp-2.png",
    layout: "flex-row-reverse",
  },
  {
    id: 3,
    endValue: 40,
    suffix: "K+",
    label: "Social Media Follows",
    img: "/assets/usp/usp-3.png",
    layout: "flex-row",
  },
  {
    id: 4,
    endValue: 4,
    suffix: "K+",
    label: "5 star reviews",
    img: "/assets/usp/usp-4.png",
    layout: "flex-row",
  },
];

const USP = () => {
  // Hook to detect when the section is visible
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the section is visible
    triggerOnce: true, // Only animate once
  });

  return (
    <section ref={ref} className="bg-[#FDF5FF] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-[900] text-center text-[#4B4B4B] mb-16 tracking-tight">
          Why We Stand Out
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uspData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              className={`bg-[#F9F5FF] border-2 border-[#D602AF]/20 rounded-[2.5rem] p-8 md:p-10 flex items-center justify-between overflow-hidden h-[240px] md:h-[280px] relative ${
                item.layout === "flex-row-reverse"
                  ? "flex-row-reverse"
                  : "flex-row"
              }`}
            >
              {/* Text Content */}
              <div className="flex flex-col z-10">
                <div className="text-5xl md:text-7xl font-extrabold text-[#111] tracking-tighter">
                  {/* CountUp Logic */}
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.endValue}
                      duration={2.5}
                      suffix={item.suffix}
                    />
                  ) : (
                    <span>0{item.suffix}</span>
                  )}
                </div>
                <span className="text-xl md:text-2xl font-semibold text-[#4B4B4B] mt-2">
                  {item.label}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative w-1/2 h-full flex items-center justify-center">
                <div className="relative w-full h-full transform transition-transform hover:scale-110 duration-500">
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
