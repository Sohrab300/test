import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Confirmation from "./Confirmation";
import Head from "@/Head";
import { useForm } from "react-hook-form";

const DataCollector = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [info, setInfo] = useState({});

  const onSubmit = (data) => {
    setInfo(data);
    setShowModal(true);
  };

  const brandGradient =
    "bg-gradient-to-r from-[#F0015F] via-[#ED006A] to-[#C301EA]";

  return (
    <>
      <Head title={"Unsubscribe"} />
      {/* Main Background Wrapper */}
      <div className="bg-[#fbf5ff] min-h-screen flex items-center justify-center px-4 py-20">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-[500px]"
          >
            {/* White Form Card */}
            <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-12 border border-white/20">
              <h1 className="text-3xl md:text-4xl font-bold text-[#444444] text-center mb-10 poppins-text">
                Unsubscribe
              </h1>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="userName"
                    className="text-sm font-bold text-gray-800 mb-2 poppins-text ml-1"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", {
                      required: "Name is required",
                      maxLength: {
                        value: 15,
                        message: "Must be max 15 characters",
                      },
                    })}
                    id="userName"
                    placeholder="Walter White"
                    type="text"
                    className="border border-gray-200 focus:border-purple-400 focus:outline-none px-4 py-3 rounded-xl w-full poppins-text bg-gray-50/30 transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 ml-1" role="alert">
                      {errors.name?.message}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="userEmail"
                    className="text-sm font-bold text-gray-800 mb-2 poppins-text ml-1"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email Address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                    id="userEmail"
                    placeholder="heisenberg99@gmail.com"
                    type="email"
                    className="border border-gray-200 focus:border-purple-400 focus:outline-none px-4 py-3 rounded-xl w-full poppins-text bg-gray-50/30 transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 ml-1" role="alert">
                      {errors.email?.message}
                    </p>
                  )}
                </div>

                {/* Unsubscribe Button */}
                <div className="pt-4">
                  <button
                    className={`${brandGradient} text-white font-bold w-full h-14 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 poppins-text text-lg`}
                    type="submit"
                  >
                    Unsubscribe
                  </button>
                </div>

                {/* Footer Text */}
                <p className="text-center text-gray-600 text-sm md:text-base poppins-text leading-relaxed mt-6">
                  If you unsubscribe, you will stop receiving{" "}
                  <br className="hidden md:block" /> emails from us
                </p>
              </form>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Confirmation
        info={info}
        setInfo={setInfo}
        reset={reset}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default DataCollector;
