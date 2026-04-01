import React, { useEffect, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Head from "@/Head";

const ProfessionalNetworkingFeatures = () => {
 
  return (
    <>
      <Head title={"Professional Networking Features"} description={"We offer Professional Networking Features to access a suite of tools that elevate your networking game. With a focus on security, build valuable connections."}/>
      <AnimatePresence>
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.1,
              scale: {
                type: "spring",
                damping: 50,
                stiffness: 200,
                restDelta: 0.001,
              },
            }}
            className="py-20 w-[95%] md:w-[90%] lg:w-[70%] xl:w-[65%] mx-auto"
          >
            <motion.div className="md:flex items-center md:gap-20 py-10">
              <motion.div
                initial={{ opacity: 0, scale: 1.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="poppins-text flex flex-col justify-center md:w-[70%] text-center md:text-left"
              >
                <motion.p className="text-2xl md:text-3xl font-semibold mb-2">
                  PROFESSIONAL NETWORKING FEATURES
                </motion.p>
                <motion.p className="text-[#828282] text-justify">
                  We offer exciting features for dating, professional networking
                  & events with an extra level of safety and peace of mind so no
                  more catfishing, just real people looking for real
                  connections. Our Mission is to bring people together, be a
                  part of their daily lives by helping them build lasting
                  relationships in an environment of trust & respect and create
                  life-long memories along the way.
                </motion.p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="w-full flex flex-col items-center md:block md:w-[30%]"
              >
                <Image
                  className=""
                  width={498}
                  height={548}
                  src="/assets/features/professional_networking/professional_networking.svg"
                  alt="Dating Profile Features"
                />
              </motion.div>
            </motion.div>

            <motion.div className="mt-10 flex flex-col gap-24">
              {/* Panel - 1 */}
              {/* <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    scale: {
                      type: "spring",
                      damping: 14,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/professional_networking/feed_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold montserrat">
                      Feed
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    Swipe up and down for the profiles you like or dislike and
                    talk to them.
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    scale: {
                      type: "spring",
                      damping: 14,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    className="mx-auto"
                    height={612}
                    width={304}
                    src="/assets/features/professional_networking/feed.webp"
                    alt="Events"
                  />
                </motion.div>
              </motion.div> */}
              {/* Panel - 2 */}
              <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    className="mx-auto"
                    height={612}
                    width={304}
                    src="/assets/features/professional_networking/explore.webp"
                    alt="Events"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/professional_networking/explore_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold montserrat">
                      Explore
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    Find amazing people all over the app which are hot active
                    and new connect.
                  </motion.p>
                </motion.div>
              </motion.div>
              {/* Panel - 3 */}
              {/* <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/professional_networking/mingle_instant_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold montserrat">
                      Mingle Instant
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    Participate in an exciting on the spot video-calls with
                    other users. Connect just by selecting the gender and
                    location.
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    className="mx-auto"
                    height={612}
                    width={304}
                    src="/assets/features/professional_networking/mingle-instant.webp"
                    alt="Events"
                  />
                </motion.div>
              </motion.div> */}
              {/* Panel - 4 */}
              {/* <motion.div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    height={550}
                    width={621.19}
                    src="/assets/features/professional_networking/speed_network.webp"
                    alt="Speed Networking"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/professional_networking/speed_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold montserrat">
                      Speed Networking
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    A series of short conversations lasting for 3 minutes each
                    with 5 different people.
                  </motion.p>
                </motion.div>
              </motion.div> */}
              {/* Panel - 5 */}
              <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "-40%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/professional_networking/events_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold montserrat">
                      Events
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    Create your own events or attend events Mingle Video or
                    Mingle Voice
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "40%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    className="mx-auto"
                    height={614}
                    width={300}
                    src="/assets/features/professional_networking/events.webp"
                    alt="Events"
                  />
                </motion.div>
              </motion.div>
              {/* Panel - 6 */}
              <motion.div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    height={616}
                    width={550}
                    src="/assets/features/professional_networking/chats.webp"
                    alt="Events"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/professional_networking/chats_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold montserrat">
                      Chats
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    Send mystery messages and connect with like minded people
                  </motion.p>
                </motion.div>
              </motion.div>
              {/* Panel - 7 */}
              <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/professional_networking/jobs_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold montserrat">
                      Jobs
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    Find Jobs according to your field and internships as well.
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    height={589}
                    width={658}
                    src="/assets/features/professional_networking/jobs.webp"
                    alt="Events"
                  />
                </motion.div>
              </motion.div>
              {/* Panel - 8 */}
              <motion.div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  className="md:w-[40%]"
                >
                  <Image
                    height={549}
                    width={500}
                    src="/assets/features/professional_networking/freelance_work.webp"
                    alt="Events"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, y: "50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}
                  style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                  className="md:w-[60%] p-7 rounded-md"
                >
                  <motion.div className="flex gap-3 items-center">
                    <Image
                      width={47}
                      height={44}
                      src="/assets/features/professional_networking/freelance_work_small.svg"
                      alt="Event Logo"
                    />
                    <motion.p className="text-2xl md:text-3xl font-semibold montserrat">
                      Freelance Work
                    </motion.p>
                  </motion.div>
                  <motion.p className="poppins-text text-justify mt-3">
                    Create your gigs find freelance work and get started.
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default ProfessionalNetworkingFeatures;
