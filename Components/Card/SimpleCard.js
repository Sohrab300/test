import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";

const SimpleCard = ({ data, index }) => {
  return (
    <m.div
      initial={{ x: "50%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: index * 0.1,
        ease: "easeIn",
        duration: 1,
        type: "tween",
        damping: 100,
        stiffness: 400,
      }}
      className={`md:min-w-[303px] max-w-[400px] mx-auto relative shadow hover:shadow-md`}
    >
      <div className="w-full overflow-hidden">
        <Image
          src={data?.image}
          alt="Card Image"
          className="hover:scale-105 transition-all ease-linear duration-700"
        />
      </div>
      <div className="roboto card-hover min-h-[110px] px-2 pt-3">
        <div className="min-h-[120px] max-h-[120px]">
          <p className="text-xl font-semibold text-[#333333]">{data?.type}</p>
          <p className="mt-3 text-[#4F4F4F]">{data?.info}</p>
        </div>
        <div>
          <button className="font-semibold px-2 pt-2 pb-3 text-[#333333]">
            Know more &#8250;
          </button>
        </div>
      </div>
    </m.div>
  );
};

export default SimpleCard;
