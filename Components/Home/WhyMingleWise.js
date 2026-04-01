import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const WhyMingleWise = () => {
  return (
    <AnimatePresence>
      <div className="py-24 overflow-hidden">
        <motion.p
          initial={{ scale: 0.5, opacity: 0 }}
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
          className="text-2xl md:text-3xl font-semibold text-center pb-24 poppins-text"
        >
          Why Create a profile on MingleWise ?
        </motion.p>
        <div className="md:flex items-center container mx-auto gap-14">
          <motion.div
            initial={{ x: "-70%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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
            className="flex md:w-[60%]"
          >
            <Image
              src="/assets/why-minglewise/phonegroup.webp"
              alt="Image"
              width={1000}
              height={500}
            />
          </motion.div>
          <motion.div
            initial={{ x: "70%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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
            className="md:w-[40%] mt-10 md:mt-0"
          >
            <div className="text-center md:text-left lg:w-[80%]">
              <p className="text-xl font-semibold poppins-text">
                DATING PROFILE
              </p>
              <p className="poppins-text mt-2">
                New profiles daily on your feed. Instantly start your chat &
                video dates. Participate in speed dating sessions every week.
              </p>
            </div>
            <div className="text-center md:text-left lg:w-[80%]">
              <p className="text-xl font-semibold mt-10 poppins-text">
                PROFESSIONAL NETWORKING PROFILE
              </p>
              <p className="poppins-text mt-2">
                Write Blogs, Apply for jobs & Internships, Start freelancing and
                attend & livestream events. Increase your network now.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default WhyMingleWise;
