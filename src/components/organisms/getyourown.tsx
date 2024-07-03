import React from "react";
import Image from "next/image";
import MainImage from "@/assets/images/heroMainImage.svg"
import { FaArrowRightLong } from "react-icons/fa6";

export default function Getyourown() {
  return (
    <section className="text-white md:hidden mt-10 flex flex-col w-[85%] m-auto relative z-[-1]">
      <h2 className="text-[40px] font-ChillaxMedium">
        Get your own website for
      </h2>
      <div className="flex gap-4 items-center">
        <h1 className="border text-[#F4A4EC] text-4xl w-max border-white rounded-xl px-4 py-1">
            £59
        </h1>
        <p className="bg-[#E2D26C] text-center text-[14px] flex items-center justify-center w-10 h-10 text-sm font-ManropeBold text-black rounded-full">OMG</p>
      </div>
        <button className="flex items-center gap-3 mt-10 px-8 py-4 font-ChillaxMedium bg-white w-max text-black rounded-full">Create Your Website<FaArrowRightLong /></button>
        <div>
            <Image
                src={MainImage}
                alt="main image"
                className="h-[520px] relative z-20"
                sizes="100vw"
                />
        </div>
    </section>
  );
}
