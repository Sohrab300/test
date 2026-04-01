/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhiteBackgroundLogo = () => {
  return (
    <div className="bg-white rounded-full shadow-lg drop-shadow-lg">
      <img
        className="cursor-pointer"
        width={60}
        height={60}
        src="/assets/logo/mingle.webp"
        alt="logo"
      />
    </div>
  );
};

export default WhiteBackgroundLogo;
