import React from 'react'
import Image from 'next/image'

export default function CardBoxes({image, bodyImage} : {image: string, bodyImage: string}) {
  return (
    <div className='w-[85%] bg-[#5ECC90] h-[364px] rounded-[24px] text-white flex flex-col p-5'>
        <Image src={image} alt="herocheck" className='w-[46px] h-[46px]'/>
        <h3 className='mt-4 font-ManropeMedium text-[20px]'>Give your website the address it deserves with a custom domain.</h3>
        <div className='flex justify-center mt-5'>
            <Image src={bodyImage} alt="herocheck" className='w-[86px] h-[86px]'/>
        </div>
    </div>
  )
}
