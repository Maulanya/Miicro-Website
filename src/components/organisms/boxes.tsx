import React from 'react'
import CardBoxes from '../atoms/cardBoxes'
import WhiteChecked from "@/assets/images/whitechecked.svg"
import YellowChecked from "@/assets/images/yellowchecked.svg"
import PinkChecked from "@/assets/images/pinkchecked.svg"
import GreenChecked from "@/assets/images/greenChecked.svg"
import BodyCardImage from "@/assets/images/cardboxesimage.svg"

export default function Boxes() {
  return (
    <section className='md:hidden gap-5 flex h-[800px] pt-12 bg-gradient-to-b from-[#191B20] via-[#191B20] to-transparent flex-col items-center relative z-10 mb-[350px] -top-[160px]'>
      <CardBoxes from='from-[#5ECC90]/25' to='to-[transparent]' bodyImage={BodyCardImage} image={GreenChecked}></CardBoxes>
      <CardBoxes from='from-[#F4A4EC]/25' to='to-[transparent]' bodyImage={BodyCardImage} image={PinkChecked}></CardBoxes>
      <CardBoxes from='from-white/25' to='transparent' bodyImage={BodyCardImage} image={WhiteChecked}></CardBoxes>
      <CardBoxes from='from-[#E2D26C]/25' to='transparent' bodyImage={BodyCardImage} image={YellowChecked}></CardBoxes>
    </section>
  )
}