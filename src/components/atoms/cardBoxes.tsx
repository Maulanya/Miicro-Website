import React from 'react'
import Image from 'next/image'

export default function CardBoxes({ image, bodyImage, from, to }: { image: string, bodyImage: string, from: string, to: string }) {
  return (
    <div className={`bg-opacity-25 w-[85%] bg-gradient-to-b ${from}  ${to} h-[364px] rounded-[24px] text-white flex flex-col p-5 pt-6`}>
      <Image src={image} alt="herocheck" className='w-[45px] h-[45x] object-cover' sizes='100vw' />
      <h3 className='mt-4 font-ManropeMedium text-[20px] text-white'>Give your website the address it deserves with a custom domain.</h3>
      <div className='flex justify-center mt-5'>
        <Image src={bodyImage} alt="herocheck" className='w-[86px] h-[86px] object-cover' sizes='100vw' />
      </div>
    </div>
  )
}
