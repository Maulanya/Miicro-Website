import Image from "next/image"
import TrustPilot from '@/assets/images/Trustpilot.svg'

export const TrustedPilot = () => {
  return <Image src={TrustPilot} alt="stars" className="w-[25px] h-[25px]" sizes="100vw" />
}