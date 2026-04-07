import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      className="cursor-pointer"
      width={60}
      height={60}
      src="/assets/logo/mingle.webp"
      alt="logo"
    />
  );
};

export default Logo;
