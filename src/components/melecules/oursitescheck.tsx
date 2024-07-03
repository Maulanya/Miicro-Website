import { FaCheck } from "react-icons/fa6";

export const Oursitescheck = ({ value }: { value: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 bg-[#1F2126] flex items-center justify-center rounded-full"><FaCheck className="text-[#F4A4EC]" /></div>
      <p>{value}</p>
    </div>
  )
}