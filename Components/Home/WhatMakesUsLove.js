import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const WhatMakesUsLove = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <>
        <motion.p
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 70,
              restDelta: 0.001,
            },
          }}
          className="text-2xl md:text-3xl font-semibold poppins-text text-center"
        >
          What makes us loved
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-[80%] lg:w-[90%] xl:w-[85%] 2xl:w-[90%] mx-auto justify-center items-center py-10 xl:py-16 overflow-hidden">
          <div className="flex flex-col items-center gap-1 justify-center min-h-[200px] max-h-[400px]">
            <motion.div
              initial={{ scale: 0.5, y: -80, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
            >
              <Image
                className="w-40 mt-10 lg:mt-5 lg:w-52"
                width={100}
                height={100}
                src="/assets/what-makes-us-love/earth.svg"
                alt=""
              />
            </motion.div>
            <m.h1
              initial={{ y: -60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
              className="text-3xl lg:text-4xl font-bold flex h-[70px] items-center justify-center poppins-text text-[#4F4F4F]"
            >
              {counterOn && (
                <CountUp start={0} end={176} duration={5} delay={0} />
              )}
            </m.h1>
            <m.p
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
              className="text-center w-[95%] text-lg sm:text-[21px] font-semibold text-[#4F4F4F] h-[40px] flex justify-center poppins-text"
            >
              Countries Live In
            </m.p>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center min-h-[200px] mt-4 md:mt-auto">
            <motion.div
              initial={{ scale: 0.5, y: -80, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
            >
              <Image
                className="w-40 mt-10 lg:mt-5 lg:w-52"
                width={100}
                height={100}
                src="/assets/what-makes-us-love/followers.svg"
                alt=""
              />
            </motion.div>
            <m.h1
              initial={{ y: -60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
              className="text-3xl lg:text-4xl font-bold flex h-[70px] items-center justify-center poppins-text text-[#4F4F4F]"
            >
              {counterOn && (
                <CountUp start={0} end={39576} duration={5} delay={0} />
              )}
            </m.h1>
            <m.p
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
              className="text-center w-[95%] text-lg sm:text-[21px] font-semibold text-[#4F4F4F] h-[40px] flex justify-center poppins-text"
            >
              Number of followers on Social Media
            </m.p>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center min-h-[200px] mt-4 md:mt-auto">
            <motion.div
              initial={{ scale: 0.5, y: -80, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
            >
              <Image
                className="w-40 mt-10 lg:mt-5 lg:w-52"
                width={100}
                height={100}
                src="/assets/what-makes-us-love/stars.svg"
                alt=""
              />
            </motion.div>
            <m.h1
              initial={{ y: -60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
              className="text-3xl lg:text-4xl font-bold flex h-[70px] items-center justify-center poppins-text text-[#4F4F4F]"
            >
              {counterOn && (
                <CountUp start={0} end={7524} duration={5} delay={0} />
              )}
            </m.h1>
            <m.p
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
              className="text-center w-[95%] text-lg sm:text-[21px] font-semibold text-[#4F4F4F] h-[40px] flex justify-center poppins-text"
            >
              5 star reviews
            </m.p>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center min-h-[200px] mt-4 md:mt-auto">
            <motion.div
              initial={{ scale: 0.5, y: -80, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
            >
              <Image
                className="w-40 mt-10 lg:mt-5 lg:w-52"
                width={100}
                height={100}
                src="/assets/what-makes-us-love/DOWNLAODS ILL.svg"
                alt=""
              />
            </motion.div>
            <m.h1
              initial={{ y: -60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
              className="text-3xl lg:text-4xl font-bold flex h-[70px] items-center justify-center poppins-text text-[#4F4F4F]"
            >
              {counterOn && (
                <CountUp start={0} end={200000} duration={5} delay={0} />
              )}
            </m.h1>
            <m.p
              initial={{ x: 60 }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 15,
                  stiffness: 70,
                  restDelta: 0.001,
                },
              }}
              className="text-center w-[95%] text-lg sm:text-[21px] font-semibold text-[#4F4F4F] h-[40px] flex justify-center poppins-text"
            >
              Number of app downloads
            </m.p>
          </div>
        </div>
      </>
    </ScrollTrigger>
  );
};

export default WhatMakesUsLove;
