import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import Head from "@/Head";
import { ColorRing } from "react-loader-spinner";

const Confirmation = ({ isVisible, onClose, reset, info, setInfo }) => {
  const [loading, setLoading] = useState(false);
  const Router = useRouter();

  if (!isVisible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  const brandGradient = "from-[#F0015F] via-[#ED006A] to-[#C301EA]";

  const handleConfirm = () => {
    setLoading(true);
    axios
      .post(
        "https://us-central1-minglewise2019.cloudfunctions.net/A6_1_UnsubscribeEmailApi/unsubscribeEmail",
        {
          name: info?.name,
          email: info?.email,
        },
      )
      .then(
        (res) => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
          toast.success("Successfully Unsubscribed");
          setInfo({});
          reset();
          Router.push("/Unsubscribe/UnsubMessage");
          setLoading(false);
          onClose();
        },
        (err) => {
          toast.error("Failed to unsubscribe");
          setLoading(false);
          setInfo({});
          reset();
        },
      );
  };

  return (
    <>
      <Head title={"Confirmation"} />
      <AnimatePresence>
        <div
          id="wrapper"
          onClick={handleOnClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[150] px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-[650px] bg-white rounded-[40px] shadow-2xl p-10 md:p-14 relative overflow-hidden"
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4 poppins-text leading-tight">
                Are you sure you would like to unsubscribe?
              </h2>

              <div className="text-gray-500 mb-10 space-y-1">
                <p className="text-[15px] md:text-lg">
                  You are currently subscribed with the address:
                </p>
                <p className="text-lg md:text-xl font-bold text-gray-700 truncate px-4">
                  {info?.email || "heisenberg99@gmail.com"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Yes, Unsubscribe Button */}
                <button
                  onClick={handleConfirm}
                  disabled={loading}
                  className={`w-full sm:w-56 h-14 rounded-full text-white font-bold text-lg bg-gradient-to-r ${brandGradient} shadow-lg shadow-pink-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center`}
                >
                  {loading ? (
                    <ColorRing
                      visible={true}
                      height="35"
                      width="35"
                      colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                    />
                  ) : (
                    "Yes, Unsubscribe"
                  )}
                </button>

                {/* No, not yet Button (Gradient Border Effect) */}
                <button
                  onClick={onClose}
                  className={`w-full sm:w-56 h-14 p-[1.5px] rounded-full bg-gradient-to-r ${brandGradient} hover:scale-[1.02] active:scale-[0.98] transition-all`}
                >
                  <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                    <span
                      className={`font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r ${brandGradient}`}
                    >
                      No, not yet
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Confirmation;
