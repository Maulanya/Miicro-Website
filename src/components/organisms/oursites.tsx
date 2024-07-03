import { FaArrowRightLong } from "react-icons/fa6"
import { Oursitescheck } from "../melecules/oursitescheck"
import Image from "next/image"
import OurSitesVideo from '@/assets/images/OurSitesVideo.svg'

export default function OurSites() {
  return (
    <section className="w-[70%] h-[500px] flex justify-between m-auto text-white mt-20">
      <div>
        <div className="flex items-end flex-col w-max">
          <p className="bg-[#E2D26C] relative -right-16 -bottom-5 w-max px-2 py-4 text-sm font-ManropeBold text-black rounded-full">NEW</p>
          <h1 className="font-ChillaxMedium text-6xl">Our sites</h1>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <Oursitescheck value="Automatic site setup in 5 minutes." />
          <Oursitescheck value="Hosting included." />
          <Oursitescheck value="Temporary domain included." />
          <Oursitescheck value="No technical knowledge needed." />
        </div>
        <button className="flex items-center gap-3 mt-10 px-8 py-4 font-ChillaxMedium bg-white text-black rounded-full">View products <FaArrowRightLong /></button>
      </div>
      <Image src={OurSitesVideo} alt="our sites video" className="h-[400px] relative -bottom-20 object-contain rounded-2xl" sizes="100vw" />
    </section>
  )
}