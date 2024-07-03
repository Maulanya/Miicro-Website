import React from 'react'
import CardBoxes from '../atoms/cardBoxes'
import WhiteChecked from "@/assets/images/whitechecked.svg"
import YellowChecked from "@/assets/images/yellowchecked.svg"
import PinkChecked from "@/assets/images/pinkchecked.svg"
import BodyCardImage from "@/assets/images/cardboxesimage.svg"

export default function Boxes() {
  return (
    <section className='md:hidden gap-4 flex h-[800px] pt-10 bg-[#191B20] flex-col items-center relative z-10 mb-[350px] -top-[160px]'>
      <CardBoxes from='from-[#5ECC90]' to='to-[transparent]' bodyImage={BodyCardImage} image={PinkChecked}></CardBoxes>
      <CardBoxes from='from-[#F4A4EC]' to='to-[transparent]' bodyImage={BodyCardImage} image={WhiteChecked}></CardBoxes>
      <CardBoxes from='from-white' to='transparent' bodyImage={BodyCardImage} image={WhiteChecked}></CardBoxes>
      <CardBoxes from='from-[#E2D26C]' to='transparent' bodyImage={BodyCardImage} image={YellowChecked}></CardBoxes>
    </section>
  )
}