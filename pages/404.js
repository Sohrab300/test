import ReturnArrow from "@/Components/icons/ReturnArrow";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Error = () => {
    const router = useRouter()
  return (
    <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center gap-[97px] fit">
      <div className="text-center">
        <strong className="text-[64px] font-extrabold ">Oops!</strong>
        <p className="font-bold text-[24px]">You are lost</p>
      </div>
      <Image src={"/404.svg"} width={1280} height={100} alt="404" />
      <button
      onClick={() => router.push('/')}
      className="gradient py-3 px-5 w-[224px] hover:text-white flex items-center justify-center gap-5"><span><ReturnArrow /></span> <span>Go Home</span> </button>
    </div>
  );
};

export default Error;
