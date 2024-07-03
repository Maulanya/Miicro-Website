import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import MainImage from '@/assets/images/Main-Image.svg'
import { TrustedStars } from "../melecules/trustedstars";
import { TrustedPilot } from "../atoms/trustpilot";

export default function Main() {
  return (
    <section className="text-white bg-dot-white/[0.2] h-full w-full">
      <main className="w-[80%] m-auto">
        <div className="flex justify-between">
          <div className="flex items-end">
            <h1 className="text-6xl font-ChillaxMedium">Website plans <br /> starting <br />  from only
            </h1>
            <div className="-ml-28 flex items-end flex-col">
              <p className="bg-[#E2D26C] relative -right-14 w-max px-2 py-4 text-sm font-ManropeBold text-black rounded-full">OMG</p>
              <h1 className="border text-[#F4A4EC] text-6xl w-max border-white rounded-xl px-2 py-1">£350</h1>
            </div>
          </div>
          <div className="-mb-[450px]">
            <Image src={MainImage} alt="main image" className="h-[700px] relative z-20" sizes="100vw" />
            <div className="w-[150px] h-[150px] border border-[#E2D26C] z-10 rounded-full absolute top-[500px]" />
            <div className="w-[150px] h-[150px] border border-[#F4A4EC] z-10 rounded-full absolute top-64 right-52" />
            <div className="w-[150px] h-[150px] border border-[#F4A4EC] z-10 rounded-full absolute top-56 right-56" />
          </div>
        </div>
        <button className="flex items-center gap-3 mt-5 px-8 py-4 font-ChillaxMedium bg-[#F4A4EC] text-black rounded-full">Get Started <FaArrowRightLong /></button>

        <div className="mt-40">
          <p className="font-ManropeMedium">We do everything so you don’t have to:</p>
          <div className="flex items-center justify-between gap-5 mt-2 w-max main-check">
            <p><FaCheck className="icon-check" /> Design</p>
            <p><FaCheck className="icon-check" /> Code</p>
            <p><FaCheck className="icon-check" /> Content Writing</p>
            <p><FaCheck className="icon-check" /> Images & Video</p>
            <p><FaCheck className="icon-check" /> Launch</p>
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
          <div className="flex items-center gap-3 font-SFprodisplayRegular text-lg">
            <p>151 reviews on</p>
            <p className="flex items-center gap-1"><TrustedPilot /> trustpilot</p>
          </div>
        </div>
      </main>
      <div className="w-full h-[100px] m-auto bg-gradient-to-b from-[#f4a4ec00] to-[#121316]" />
    </section>
  )
}