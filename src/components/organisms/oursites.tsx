import { FaArrowRightLong } from "react-icons/fa6"
import { Oursitescheck } from "../melecules/oursitescheck"
import Image from "next/image"
import OurSitesVideo from '@/assets/images/OurSitesVideo.svg'

export default function OurSites() {
  return (
    <section className="md:w-[70%] w-[85%] h-[730px] md:h-[500px] flex md:flex-row flex-col-reverse md:justify-between m-auto text-white md:mt-20">
      <div>
        <div className="flex items-end flex-col w-max">
          <p className="bg-[#E2D26C] relative -right-16 -bottom-5 w-max px-2 py-4 text-sm font-ManropeBold text-black rounded-full">NEW</p>
          <h1 className="font-ChillaxMedium md:text-6xl text-[40px]">Our sites</h1>
        </div>
        <div className="flex flex-col gap-5 md:mt-10 mt-6">
          <Oursitescheck value="Automatic site setup in 5 minutes." />
          <Oursitescheck value="Hosting included." />
          <Oursitescheck value="Temporary domain included." />
          <Oursitescheck value="No technical knowledge needed." />
        </div>
        <button className="flex items-center gap-3 mt-10 px-8 py-4 font-ChillaxMedium bg-white text-black rounded-full">View products <FaArrowRightLong /></button>
      </div>
      <Image src={OurSitesVideo} alt="our sites video" className="md:h-[400px] mb-[100px] md:mb-0 relative -bottom-20 object-contain rounded-2xl" sizes="100vw" />
    </section>
  )
}