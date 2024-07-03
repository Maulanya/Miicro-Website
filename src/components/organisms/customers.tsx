import Image from "next/image"
import CustomersImage from '@/assets/images/customers.svg'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Customers() {
  return (
    <section className="md:w-[70%] w-[85%] md:h-[500px] flex md:flex-row flex-col justify-between m-auto text-white md:mt-20 mt-[440px]">
      <div>
        <h1 className="font-ChillaxMedium md:text-6xl md:leading-none leading-[46px] text-[44px] md:w-[70%]"><span className="text-[#F4A4EC]">1,000</span> customers & counting</h1>
        <div className="relative h-max md:hidden block mt-5">
          <span className="bg-[#E2D26C] absolute -top-4 z-50 -right-5 w-max px-2 py-4 text-sm font-ManropeBold text-black rounded-full">WOW</span>
          <Image src={CustomersImage} alt="our sites video" className="md:relative -bottom-20 bg-purple-500 h-max object-contain rounded-2xl" sizes="100vw" />
        </div>
        <div className="md:w-[65%] mt-10 md:text-[16px] text-[20px] font-ManropeRegular">
          <p>I used the Eris theme to create my portfolio website, and I didn&apos;t have to use any website builder. I got the design I love, and it shows my work perfectly.</p>
          <p className="text-sm mt-8">Jane Smith, Designer</p>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <div className="p-4 bg-[#1F2126] flex items-center justify-center rounded-full"><FaArrowLeft className="text-[#F4A4EC]" /></div>
          <div className="p-4 bg-[#1F2126] flex items-center justify-center rounded-full"><FaArrowRight className="text-[#F4A4EC]" /></div>
        </div>
      </div>
      <div className="md:block hidden relative h-max">
        <span className="bg-[#E2D26C] absolute top-14 z-50 -right-5 w-max px-2 py-4 text-sm font-ManropeBold text-black rounded-full">WOW</span>
        <Image src={CustomersImage} alt="our sites video" className="md:relative -bottom-20 bg-purple-500 h-max object-contain rounded-2xl" sizes="100vw" />
      </div>
    </section>
  )
}