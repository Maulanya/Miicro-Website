import { Navbar } from "../melecules/navbar"
import Image from "next/image"
import Logo from "@/assets/images/Logo.svg"
import { Dropdownlanguage } from "../melecules/dropdownlanguage"
import NavMobile from "../melecules/navmobile"

export default function Header() {
  return (
    <header className="flex items-center justify-between md:px-10 px-3 md:py-3 w-full sticky top-0 bg-[#121316] z-[100]">
      <nav className="md:flex hidden items-center text-white w-full justify-between">
        <Image src={Logo} alt="logo" className="w-20 h-20" sizes="100vw" />
        <div className="relative -right-28 flex justify-center">
          <Navbar className="top-2" />
        </div>
        <div className="flex items-center gap-2">
          <Dropdownlanguage />
          <button className="font-ChillaxRegular">Sign in</button>
          <button className="bg-[#E2D26C] font-ChillaxMedium rounded-full text-black px-4 py-2 ml-2">Get Started</button>
        </div>
      </nav>
      <NavMobile />
    </header>

  )
}