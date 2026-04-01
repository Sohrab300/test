import { StateContext } from "@/pages/_app";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import FixedBackground from "../../public/assets/background-image/final.webp";

const ImageContainer = () => {
  const { pageName } = useContext(StateContext);
  return (
    <div className="overflow-hidden">
      <div className="fixed inset-0 z-[-50] quick-cover"></div>
      <div className="min-h-[35vh] flex justify-start items-center"></div>
      <div className="text-white container mx-auto px-4 md:px-auto pb-5 md:pb-0">
        <p className="md:text-xl xl:text-3xl font-bold lato tracking-widest">
          {pageName}
        </p>
        <p className="text-[10px] md:text-base font-semibold lato flex items-center gap-3">
          <Link href="/">HOME</Link> - <span>{pageName}</span>
        </p>
      </div>
      <div className="bg-white md min-h-[15vh] clipping-div hidden sm:block"></div>
    </div>
  );
};

export default ImageContainer;
