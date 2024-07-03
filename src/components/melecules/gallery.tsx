import Image from "next/image"
import GalleryImage from '@/assets/images/Gallery.svg'

export const Gallery = () => {
  return (
    <Image src={GalleryImage} alt="gallery" className="w-full md:h-full h-[180px] object-cover mt-20" sizes="100vw" />
  )
}