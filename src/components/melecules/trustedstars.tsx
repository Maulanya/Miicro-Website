import Image from "next/image"
import Stars from '@/assets/images/Stars.svg'

interface Props {
  value: 100 | 50
}

export const TrustedStars = ({ value }: Props) => {
  return (
    <div className="flex justify-center relative items-center w-[20px] h-[20px]">
      <div className="flex justify-center items-center">
        <div className={`bg-[#00B67A] top-0 left-0 absolute z-30 h-[20px]`} style={value === 100 ? {width: '20px'} : {width: '10px'}}/>
        <Image src={Stars} alt="stars" className="w-[15px] h-[15px] top-0 z-50" sizes="100vw" />
        <div className="bg-[#6b6f6e] absolute top-0 z-20 w-[20px] h-[20px]" />
      </div>
    </div>
  )
}