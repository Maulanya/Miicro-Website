"use client"

import { HoveredLink, Menu, MenuItem } from "@/components/melecules/navbar-menu";
import { useState } from "react";
import ENLang from '@/assets/images/EN.svg'
import IDLang from '@/assets/images/ID.svg'
import Image from "next/image";

export function Dropdownlanguage({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} imageIcon={ENLang} dropdown={true} item="EN">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="#" className="flex items-center gap-2">
            <Image src={ENLang} alt="EN" width={20} height={20} className="w-full h-full object-cover" sizes="100vw" />
            EN</HoveredLink>
          <HoveredLink href="#" className="flex items-center gap-2">
            <Image src={IDLang} alt="ID" width={20} height={20} className="w-[25px] h-[25px] object-cover" sizes="100vw" />
            ID</HoveredLink>
        </div>
      </MenuItem>
    </Menu>
  );
}