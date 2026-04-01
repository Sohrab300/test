import { SUBSCRIPTION_TIRES } from "@/Data/QuickLink";
import { GoPrimitiveDot } from "react-icons/go";
import React from "react";
import Image from "next/image";
import { BsPinAngleFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import Head from "@/Head";

const SubscriptionTires = () => {
  return (
    <>
      <Head title={"Subscription"} description={"Be a part of amazing features with our subscriptions plans of Mingle Elite and Mingle Celeb and enjoying the amazing features not for all users."}/>
      <AnimatePresence>
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
          className="py-28 bg-[#FCFCFC] overflow-hidden"
        >
          <motion.div className="sm:py-10">
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.1,
                scale: {
                  type: "spring",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-center md:text-left px-2 sm:px-10 py-5 flex flex-col md:flex-row gap-10 items-center bg-gradient-to-r from-[#F7F0FB] to-[#FCF4F4] w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%] mx-auto rounded-md"
            >
              <Image
                width={170}
                height={170}
                src="/assets/subscription/subscription.svg"
                alt="Subscription"
              />
              <motion.div>
                <p className="text-3xl md:text-4xl font-semibold mb-2">
                  Subscription
                </p>
                <p>
                  Be a part of amazing features with our subscriptions plans of
                  Mingle Elite and Mingle Celeb and enjoying the amazing
                  features not for all users.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div>
            <motion.div className="flex items-center justify-center py-14">
              <motion.div
                initial={{ y: "20%", x: "-40%", opacity: 0, scale: 1.2 }}
                whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  scale: {
                    type: "tween",
                    damping: 50,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
              >
                <Image
                  height={107}
                  width={107}
                  src="/assets/logo/mingle.webp"
                  alt="Company Logo"
                />
              </motion.div>
              <motion.p
                initial={{ y: "-20%", x: "40%", opacity: 0, scale: 1.2 }}
                whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  scale: {
                    type: "tween",
                    damping: 50,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="text-2xl md:text-4xl"
              >
                Our Plans
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col items-center md:flex-row justify-center gap-5 lg:gap-16 xl:gap-20 mb-10">
            <motion.div
              initial={{ x: "-50%", opacity: 0, scale: 1.2 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                scale: {
                  type: "tween",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="border-2 border-[#F53D3D] rounded-xl max-w-[400px] max-h-[400px] flex flex-col justify-center items-center text-center p-10 min-h-[400px] relative"
            >
              <Image
                className="absolute top-0 right-10"
                width={45}
                height={69}
                alt="Badge"
                src="/assets/subscription/mingle-elite-mark.svg"
              />
              <Image
                className="bg-gradient-to-r from-[#8801E1]/50 to-[#5E06E1] rounded-full p-1 w-24 h-24 mb-5"
                height={50}
                width={50}
                src="/assets/logo/Icon2V1 1.svg"
                alt="Mingle Elite"
              />
              <span className="text-2xl md:text-3xl font-semibold mb-1">
                Mingle Elite
              </span>
              <p className="mb-3">Get the Elite experience!</p>
              <p>
                Experience the Mingle Elite Subscription and Get a Mingle Elite
                badge, No time limit, teleport, double daily profiles, 2
                rollback swipes, 2 Free buzzes, 2 Mystery Likes, 2 Profile
                Visitors, 2 Limelight.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: "50%", opacity: 0, scale: 1.2 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                scale: {
                  type: "tween",
                  damping: 50,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="border-2 border-[#2D1212] rounded-xl max-w-[400px] max-h-[430px] flex flex-col justify-center items-center text-center p-10 min-h-[400px] relative"
            >
              <Image
                className="absolute top-0 right-10"
                width={45}
                height={69}
                alt="Badge"
                src="/assets/subscription/mingle-celeb-mark.svg"
              />
              <Image
                className="bg-[#2D1212] rounded-full p-3 w-24 h-24 mb-5"
                height={50}
                width={50}
                src="/assets/logo/Icon2V1 1 2.svg"
                alt="Mingle Celeb"
              />
              <span className="text-2xl md:text-3xl font-semibold mb-1">
                Mingle Celeb
              </span>
              <p className="mb-3">Get treated like a celebrity!</p>
              <p>
                Experience the Mingle Celeb Subscription and Get a Mingle Celeb
                badge, Message Before Matching, 3 Free Buzz Per Day, 3 Mystery
                Likes, 3 Profile Visitors, 3 Limelight.
              </p>
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, scale: 0.6, x: "-50%" }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.3,
              scale: {
                type: "spring",
                damping: 50,
                stiffness: 200,
                restDelta: 0.001,
              },
            }}
            className="text-2xl lg:text-3xl poppins-text font-semibold text-center pt-10"
          >
            Subscription Tiers at a glance
          </motion.p>
          <div className="hidden sm:block py-20 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%] mx-auto">
            <table className="container mx-auto bg-white poppins-text shadow-md">
              <thead className="rounded-xl">
                <tr>
                  <th className="py-3 text-start px-4 border-2">Features</th>
                  <th className="py-3 border-2 bg-[#FCFCFC]">MingleWise</th>
                  <th className="py-3 border-2 bg-[#F5F5F5]">
                    <div className="flex items-center justify-center md:gap-2">
                      <span>Mingle Elite</span>
                    </div>
                  </th>
                  <th className="bg-[#ECECEC] py-3 border-2">
                    <div className="flex items-center justify-center md:gap-2">
                      <span>Mingle Celeb</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {SUBSCRIPTION_TIRES.map((data, index) => (
                  <tr key={index} className="border-2">
                    <td className=" py-3 px-4 border-2">{data?.concept}</td>
                    <td className=" py-3 px-4 border-2 bg-[#FCFCFC]">
                      {data?.mingleWise && (
                        <GoPrimitiveDot className="mx-auto text-4xl text-[#BEBEBE]" />
                      )}
                    </td>
                    <td className=" py-3 px-4 border-2 bg-[#F5F5F5] text-4xl text-[#7E02D8]">
                      {data?.mingleElite && (
                        <GoPrimitiveDot className="mx-auto" />
                      )}
                    </td>
                    <td className=" py-3 px-4 border-2 bg-[#ECECEC] text-4xl text-[#4A2E2E]">
                      {data?.mingleCeleb && (
                        <GoPrimitiveDot className="mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="sm:hidden">
            <div className="mt-10 w-[90%] bg-white rounded-md mx-auto shadow">
              <p className="text-center text-xl font-semibold pt-2 poppins-text">
                Mingle Wise
              </p>
              <ul className="px-4 py-3 poppins-text">
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Mingle Date &
                  Pro Profiles
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Match & chat
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Join events
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Virtual Dates &
                  Meetings
                </li>
              </ul>
            </div>
            <div className="mt-10 w-[90%] bg-white rounded-md mx-auto shadow">
              <div className="flex items-center justify-center gap-2 pt-4">
                <Image
                  className="bg-gradient-to-r from-[#8801E1]/50 to-[#5E06E1] rounded-full p-[.1rem] h-10 w-10"
                  height={50}
                  width={50}
                  src="/assets/logo/Icon2V1 1.svg"
                  alt="Mingle Elite"
                />
                <span className="text-xl poppins-text">Mingle Elite</span>
              </div>
              <ul className="px-4 py-3 poppins-text">
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Mingle Date &
                  Pro Profiles
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Match & chat
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Join events
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Virtual Dates &
                  Meetings
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Plan Events
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> No Time Limit
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Teleport
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> See who likes
                  you
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> No more Ads
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Profile Privacy
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Second look
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Rollback Swipes
                </li>
              </ul>
            </div>
            <div className="mt-10 w-[90%] bg-white rounded-md mx-auto shadow">
              <div className="flex items-center justify-center gap-2 pt-4">
                <Image
                  className="bg-[#2D1212] rounded-full p-2 h-10 w-10"
                  height={50}
                  width={50}
                  src="/assets/logo/Icon2V1 1 2.svg"
                  alt="Mingle Elite"
                />
                <span className="text-xl font-semibold poppins-text">
                  Mingle Celeb
                </span>
              </div>
              <ul className="px-4 py-3 poppins-text">
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Mingle Date &
                  Pro Profiles
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Match & chat
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Join events
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Virtual Dates &
                  Meetings
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Plan Events
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> No Time Limit
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Teleport
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> See who likes
                  you
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> No more Ads
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Profile Privacy
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Second look
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Rollback Swipes
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Advanced
                  Filters
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Discounts on
                  in-app purchases
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Priority Match
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Profile
                  Insights
                </li>
                <li className="flex items-center gap-1">
                  <BsPinAngleFill className="text-purple-600" /> Concierge
                  Service
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SubscriptionTires;
