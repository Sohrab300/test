import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Head from "@/Head";
import DownloadApp from "@/Components/Home/DownloadApp";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  // Brand Gradients
  const textGradient =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#F0015F] via-[#ED006A] via-[#D602AF] to-[#C301EA]";
  const btnGradient =
    "bg-gradient-to-r from-[#F0015F] via-[#ED006A] to-[#C301EA]";
  const leftSideGradient =
    "bg-[linear-gradient(135deg,_#FA7757_0%,_#FFB09D_34%,_#DFA6FF_61%,_#9600E9_100%)]";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post(
        "https://us-central1-minglewise2019.cloudfunctions.net/A6_2_ContactUsWebsiteApi/contactUsWebsite",
        {
          name: data?.name,
          email: data?.email,
          message: data?.message,
        },
      )
      .then((res) => {
        toast.success("Successfully submitted");
        reset();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="bg-[#fbf5ff] min-h-screen">
      <Head
        title={"Contact Us"}
        description={
          "Need help navigating our Minglewise app or want to report a problem? Contact us today. We are happy to answer your questions and solve your issues."
        }
      />

      <div className="pt-32 pb-20 px-4">
        {/* Header Text */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-3xl md:text-5xl font-semibold poppins-text flex flex-col gap-2 mt-10">
            <span>Love to hear from you,</span>
            <span>
              <span className={`${textGradient}`}>Get in touch</span> 👋
            </span>
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-white rounded-[40px] shadow-2xl overflow-hidden">
          {/* Left Side: Image and Gradient */}
          <div
            className={`${leftSideGradient} md:w-[40%] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden`}
          >
            <motion.img
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src="/contact-us-phone.png"
              alt="MingleWise App"
              className="w-full max-w-[320px] drop-shadow-2xl z-10"
            />
            {/* Optional decorative circle for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          {/* Right Side: Form */}
          <div className="md:w-[60%] p-8 md:p-14 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 poppins-text">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Name */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="name"
                    className="text-gray-700 font-medium mb-2 poppins-text"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", {
                      required: "Name is required",
                      maxLength: { value: 15, message: "Max 15 characters" },
                    })}
                    id="name"
                    placeholder="Walter"
                    className={`border-2 ${errors.name ? "border-red-400" : "border-gray-100"} focus:border-purple-400 outline-none px-4 py-3 rounded-xl w-full poppins-text transition-all`}
                    type="text"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name?.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="text-gray-700 font-medium mb-2 poppins-text"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    id="email"
                    placeholder="walter@email.com"
                    className={`border-2 ${errors.email ? "border-red-400" : "border-gray-100"} focus:border-purple-400 outline-none px-4 py-3 rounded-xl w-full poppins-text transition-all`}
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="message"
                  className="text-gray-700 font-medium mb-2 poppins-text"
                >
                  Your Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  placeholder="Need to discuss about the Club"
                  className={`border-2 ${errors.message ? "border-red-400" : "border-gray-100"} focus:border-purple-400 outline-none px-4 py-3 rounded-xl w-full poppins-text h-32 resize-none transition-all`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message?.message}
                  </p>
                )}
              </div>

              {/* Checkbox Section from Image */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="compliance"
                  required
                  className=" w-4 h-4 accent-[#D602AF] cursor-pointer"
                />
                <label
                  htmlFor="compliance"
                  className="text-[11px] md:text-xs text-gray-600 leading-tight"
                >
                  By clicking, you are accepting{" "}
                  <span className="font-bold cursor-pointer">
                    Terms & conditions
                  </span>{" "}
                  and{" "}
                  <span className="font-bold cursor-pointer">
                    Privacy Policy
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-14 ${btnGradient} text-white font-bold text-lg rounded-full shadow-lg hover:shadow-pink-200/50 hover:scale-[1.01] active:scale-[0.98] transition-all flex justify-center items-center`}
                >
                  {loading ? (
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <DownloadApp />
    </div>
  );
};

export default ContactUs;
