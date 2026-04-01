import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Head from "@/Head";

const UnsubMessage = () => {
  return (
    <>
      <Head title={"Message - Unsubscribe"} />
      {/* Background wrapper to match the light lavender theme */}
      <div className="bg-[#fbf5ff] min-h-screen flex items-center justify-center">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto flex flex-col items-center justify-center poppins-text"
          >
            {/* Main Title: Bold and Dark Gray */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#333333] text-center mb-10 leading-tight">
              We’re sad to see you go
            </h1>

            {/* Description Text */}
            <p className="text-center text-[#4d4d4d] text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
              You have successfully unsubscribed from our newsletter and will no
              longer receive any emails from us.
              <br className="hidden md:block" />
              If you change your mind, you can{" "}
              <Link
                href="/#newsletter-signup"
                className="text-[#D602AF] font-bold hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Subscribe Back
              </Link>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default UnsubMessage;
