/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { REVIEW_DATA } from "@/Data/Home"; // Using your existing data
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react"; // install lucide-react or use SVGs

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function StoriesFromCommunity() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Fallback data if REVIEW_DATA doesn't have the exact fields from the image
  const fallbackData = [
    {
      title: '"Found My Kind of People"',
      info: "I moved to a new city and knew nobody. MingleWise helped me find a hiking group and I've made some amazing friends!",
      name: "Riya Sharma",
      role: "Hiking Enthusiast",
      image: "/assets/usp/usp-1.png", // Adjust your image path
    },
    {
      title: '"A Great Way to Explore New Hobbies"',
      info: "I joined a board game meetup through MingleWise and ended up making some great friends. It's such an easy way to explore new activities and meet like-minded people.",
      name: "Arjun Mehta",
      role: "Hiking Enthusiast",
      image: "/assets/usp/usp-1.png",
    },
    {
      title: '"Perfect Platform for Community Events"',
      info: "As a club host, MingleWise made it very easy for me to organize events and bring people together. It's a great platform for building a community around your passion.",
      name: "Neha Verma",
      role: "Hiking Enthusiast",
      image: "/assets/usp/usp-1.png",
    },
  ];

  const displayData = REVIEW_DATA?.length > 0 ? REVIEW_DATA : fallbackData;

  return (
    <section className="bg-[#FDF5FF] py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-[900] text-[#333] text-center mb-16 tracking-tight"
        >
          Stories From Our Community
        </motion.h2>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full relative"
        >
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12 !px-4"
          >
            {displayData.map((item, index) => {
              // index 0 = false (Orange), index 1 = true (Purple), index 2 = false (Orange)
              const isPurple = index % 2 !== 0;
              const cardBg = isPurple
                ? "bg-[linear-gradient(to_bottom,_#9600E9_0%,_#D093FF_100%)]"
                : "bg-[linear-gradient(to_right,_#FA7757_0%,_#F99A82_100%)]";
              const rotate = isPurple ? "rotate-3" : "-rotate-3";
              const conrotate = isPurple ? "-rotate-3" : "rotate-3";

              return (
                <SwiperSlide key={index} className="py-8">
                  <div className="relative group h-[300px] w-full mx-auto">
                    {/* Layered Offset Background Shadow */}
                    <div
                      className={`absolute w-full h-full bg-[#E5E2EC]  rounded-[1.8rem] -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 duration-300`}
                    />

                    {/* Main Card */}
                    <div
                      className={`absolute -top-2 h-full w-full ${cardBg} rounded-[1.8rem] p-8   shadow-md transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 duration-300 ${rotate}`}
                    >
                      <div
                        className={`${conrotate} flex flex-col justify-between text-white h-full`}
                      >
                        <div>
                          {/* Custom Title from image */}
                          <h3 className="text-xl md:text-2xl font-bold italic mb-6 leading-tight">
                            &quot;{item?.title || '"Found My Kind of People"'}
                            &quot;
                          </h3>
                          <p className="text-[15px] leading-relaxed font-medium text-white/90">
                            {item?.info}
                          </p>
                        </div>

                        {/* Footer: User Details */}
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden flex-shrink-0 relative">
                            <Image
                              src={item?.image || "/assets/logo/mingle.webp"}
                              alt={item?.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-extrabold text-lg leading-tight">
                              {item?.name}
                            </span>
                            <span className="text-xs font-medium text-white/80">
                              {item?.role || "Hiking Enthusiast"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Arrows at Bottom Center */}
          <div className="flex items-center justify-center gap-5 mt-4">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
