import Link from "next/link"
import React from "react"

export const Media = ({ href, icon: Icon }: { href: string, icon: React.ComponentType }) => {
  return (
    <div className="flex items-center gap-2">
      <Link href={href} className="p-2 bg-[#1F2126] flex items-center justify-center rounded-full text-[#F4A4EC]"><Icon /></Link>
    </div>
  )
}