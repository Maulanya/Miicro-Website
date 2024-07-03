import Image from "next/image"
import Stars from '@/assets/images/Stars.svg'

interface Props {
  value: 100 | 50
}

export const TrustedStars = ({ value }: Props) => {
  return (
    <div className="flex justify-center relative items-center w-[30px] h-[30px]">
      <div className="flex justify-center">
        <div className={`bg-[#00B67A] top-0 left-0 absolute z-30 w-[${value === 100 ? "30" : "20"}px] h-[30px]`} />
        <Image src={Stars} alt="stars" className="w-[20px] h-[30px] absolute top-0 z-50" sizes="100vw" />
        <div className="bg-[#6b6f6e] absolute top-0 z-20 w-[30px] h-[30px]" />
      </div>
    </div>
  )
}