import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const initialGradient = "linear-gradient(90deg, #8800E1 0%, #F95A63 70%)";
  const successGradient = "linear-gradient(270deg, #8800E1 0%, #F95A63 70%)";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }

    setError(false);
    setLoading(true);

    try {
      // Calling your specific n8n webhook
      await axios.post(
        "https://n8n.srv1028016.hstgr.cloud/webhook/AS/Agentic/Funnel/Website-Form",
        {
          email: email,
          source: "Newsletter Signup", // Optional: helps identify where the lead came from in n8n
          submittedAt: new Date().toISOString(),
        },
      );

      setIsSubmitted(true);
    } catch (err) {
      console.error("Webhook Error:", err);
      // Optional: You could set a specific error message here if the webhook fails
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FDF5FF] py-20 px-6 overflow-hidden">
      <motion.div
        layout
        initial={false}
        animate={{
          background: isSubmitted ? successGradient : initialGradient,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-7xl mx-auto rounded-[32px] p-12 md:p-24 min-h-[450px] flex flex-col items-center justify-center text-center shadow-2xl relative"
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="signup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sign up to our newsletter
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-medium mb-12 max-w-lg mx-auto leading-relaxed">
                Receive latest news, updates and many other news every week.
              </p>

              <form onSubmit={handleSubmit} className="relative group">
                <div
                  className={`p-1 rounded-full transition-all duration-300 ${
                    error
                      ? "bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                      : "bg-transparent"
                  }`}
                >
                  <div className="bg-white rounded-full flex items-center p-2 shadow-inner">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      disabled={loading}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(false);
                      }}
                      className="flex-1 bg-transparent px-6 py-3 text-gray-700 outline-none text-lg placeholder:text-gray-400 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 disabled:opacity-70"
                      style={{
                        background:
                          "linear-gradient(135deg, #D602AF 0%, #8800E1 100%)",
                      }}
                    >
                      {loading ? (
                        <ColorRing
                          visible={true}
                          height="35"
                          width="35"
                          colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                        />
                      ) : (
                        <ArrowRight size={28} strokeWidth={2.5} />
                      )}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-white/80 font-semibold text-left mt-3 ml-6"
                    >
                      Please enter a valid email address.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-10 shadow-xl">
                <Check
                  size={50}
                  strokeWidth={4}
                  style={{ stroke: "url(#gradient)" }}
                />
                <svg width="0" height="0">
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#F95A63" />
                    <stop offset="100%" stopColor="#8800E1" />
                  </linearGradient>
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white w-full leading-tight">
                Thank You for Subscribing! We&apos;ve Received Your Email for
                Newsletter Updates.
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Newsletter;
