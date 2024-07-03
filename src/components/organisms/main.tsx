import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import MainImage from "@/assets/images/heroMainImage.svg";
import MainImageMobile from "@/assets/images/Macbook.svg";
import HeroMobileCheck from "@/assets/images/check.svg";
import { TrustedStars } from "../melecules/trustedstars";
import { TrustedPilot } from "../atoms/trustpilot";

export default function Main() {
  return (
    <section className="text-white bg-dot-white/[0.2] h-full w-full">

      {/* MOBILE MAIN */}
      <main className="md:hidden block text-center">
        <div className="mb-6 mt-5">
          <h1 className="text-center text-[34px] leading-[41px] font-ChillaxMedium font-medium">
            <span className="text-[#F4A4EC]">WordPress</span> themes and fully{" "}
            <span className="text-[#F4A4EC]">managed</span> websites.
          </h1>
        </div>
        <h3 className="font-ManropeMedium text-[16px]">
          We do everything so you don’t have to.
        </h3>
        <ul className="my-[30px] flex flex-col gap-[16px]">
          <li className="flex justify-center gap-3">
            <Image src={HeroMobileCheck} alt="herocheck" />
            Free domain
          </li>
          <li className="flex justify-center gap-3">
            <Image src={HeroMobileCheck} alt="herocheck" />
            Free Website Migration
          </li>
          <li className="flex justify-center gap-3">
            <Image src={HeroMobileCheck} alt="herocheck" />
            24/7 Customer Support
          </li>
        </ul>
        <button className="bg-white py-[12px] px-[32px] rounded-[64px] text-black font-ChillaxMedium">
          Get started
        </button>
        <Image
          src={MainImageMobile}
          alt="main image mobile"
          className="h-max my-11 w-[80%] m-auto relative z-20"
        />
        <div className="mt-10 flex gap-2">
          <div className="flex flex-col items-center w-full gap-3">
            <div className="flex items-center">
              <div className="flex">
                <p className="font-SFprodisplayBold">Rated Excellent</p>
                <div className="ml-2 flex items-start gap-1">
                  <TrustedStars value={100} />
                  <TrustedStars value={100} />
                  <TrustedStars value={100} />
                  <TrustedStars value={100} />
                  <TrustedStars value={50} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 font-SFprodisplayRegular text-lg">
              <p>151 reviews on</p>
              <p className="flex items-center gap-1">
                <TrustedPilot /> trustpilot
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* DESKTOP MAIN */}
      <main className="md:w-[80%] m-auto hidden md:block">
        <div className="flex justify-between">
          <div className="flex items-end">
            <h1 className="text-6xl font-ChillaxMedium">
              Website plans <br /> starting 
              <br /> from only
            </h1>
            <div className="-ml-28 flex items-end flex-col">
              <p className="bg-[#E2D26C] relative -right-14 w-max px-2 py-4 text-sm font-ManropeBold text-black rounded-full">
                OMG
              </p>
              <h1 className="border text-[#F4A4EC] text-6xl w-max border-white rounded-xl px-2 py-1">
                £350
              </h1>
            </div>
          </div>
          <div className="-mb-[450px]">
            <Image
              src={MainImage}
              alt="main image"
              className="h-[700px] relative z-20"
              sizes="100vw"
            />
            {/* <div className="w-[150px] h-[150px] border border-[#E2D26C] z-10 rounded-full absolute top-[500px]" />
            <div className="w-[150px] h-[150px] border border-[#F4A4EC] z-10 rounded-full absolute top-64 right-52" />
            <div className="w-[150px] h-[150px] border border-[#F4A4EC] z-10 rounded-full absolute top-56 right-56" /> */}
          </div>
        </div>
        <button className="flex items-center gap-3 mt-5 px-8 py-4 font-ChillaxMedium bg-[#F4A4EC] text-black rounded-full">
          Get Started <FaArrowRightLong />
        </button>

        <div className="mt-40">
          <p className="font-ManropeMedium">
            We do everything so you don’t have to:
          </p>
          <div className="flex items-center justify-between gap-5 mt-2 w-max main-check">
            <p>
              <FaCheck className="icon-check" /> Design
            </p>
            <p>
              <FaCheck className="icon-check" /> Code
            </p>
            <p>
              <FaCheck className="icon-check" /> Content Writing
            </p>
            <p>
              <FaCheck className="icon-check" /> Images & Video
            </p>
            <p>
              <FaCheck className="icon-check" /> Launch
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-2">
          <div className="flex items-center">
            <p className="font-SFprodisplayBold">Rated Excellent</p>
            <div className="ml-2 flex items-start gap-1">
              <TrustedStars value={100} />
              <TrustedStars value={100} />
              <TrustedStars value={100} />
              <TrustedStars value={100} />
              <TrustedStars value={50} />
            </div>
          </div>
          <div className="flex items-center md:gap-0 gap-3 font-SFprodisplayRegular text-lg">
            <p>151 reviews on</p>
            <p className="flex items-center gap-1">
              <TrustedPilot /> trustpilot
            </p>
          </div>
        </div>
      </main>
      <div className="w-full md:block hidden h-[100px] m-auto bg-gradient-to-b from-[#f4a4ec00] to-[#121316]" />
    </section>
  );
}
