import { Navbar } from "../melecules/navbar"
import Image from "next/image"
import Logo from "@/assets/images/Logo.svg"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-3 w-full sticky top-0 bg-[#121316] z-[100]">
      <nav className="flex items-center text-white w-full justify-between px-5">
        <Image src={Logo} alt="logo" className="w-20 h-20" sizes="100vw" />
        <div className="flex-1 flex justify-center">
          <Navbar className="top-2" />
        </div>
        <div className="flex items-center gap-2">
          <button className="font-ChillaxRegular">Sign in</button>
          <button className="bg-[#E2D26C] font-ChillaxMedium rounded-full text-black px-4 py-2 ml-2">Get Started</button>
        </div>
      </nav>
    </header>

  )
}