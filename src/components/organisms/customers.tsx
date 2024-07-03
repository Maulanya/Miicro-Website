import Image from "next/image"
import CustomersImage from '@/assets/images/customers.svg'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Customers() {
  return (
    <section className="w-[70%] h-[500px] flex justify-between m-auto text-white mt-20">
      <div><h1 className="font-ChillaxMedium text-6xl w-[70%]"><span className="text-[#F4A4EC]">1,000</span> customers & counting</h1>
        <div className="w-[65%] mt-10 font-ManropeRegular">
          <p>I used the Eris theme to create my portfolio website, and I didn&apos;t have to use any website builder. I got the design I love, and it shows my work perfectly.</p>
          <p className="text-sm mt-10">Jane Smith, Designer</p>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <div className="p-3 bg-[#1F2126] flex items-center justify-center rounded-full"><FaArrowLeft className="text-[#F4A4EC]" /></div>
          <div className="p-3 bg-[#1F2126] flex items-center justify-center rounded-full"><FaArrowRight className="text-[#F4A4EC]" /></div>
        </div>
      </div>
      <div className="relative h-max">
        <span className="bg-[#E2D26C] absolute top-14 z-50 -right-5 w-max px-2 py-4 text-sm font-ManropeBold text-black rounded-full">WOW</span>
        <Image src={CustomersImage} alt="our sites video" className="relative -bottom-20 bg-purple-500 h-max object-contain rounded-2xl" sizes="100vw" />
      </div>
    </section>
  )
}