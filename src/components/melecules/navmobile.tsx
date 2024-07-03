"use client";

import { useCallback, useState } from "react";
import MiicroLogo from "@/assets/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Dropdownlanguage } from "./dropdownlanguage";
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import clsx from "clsx";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import TemplateIcon from "@/assets/images/Template.svg";
import PricingIcon from "@/assets/images/Pricing.svg";
import CLientIcon from "@/assets/images/Client.svg";
import ProductsIcon from "@/assets/images/Products.svg";

export default function NavMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Replace # paths with your paths
  const navigation = [
    {
      title: "Products", path: "#", image: ProductsIcon, subMenu:
        [
          {
            title: 'Minima',
            desc: 'For small businesses'
          },
          {
            title: 'Performa',
            desc: 'For medium sized businesses'
          },
          {
            title: 'Payma',
            desc: 'For online stores'
          },
          {
            title: 'Ordaa',
            desc: 'With food ordering system'
          },
        ]
    },
    { title: "Pricing", path: "#", image: PricingIcon },
    { title: "Clients", path: "#", image: CLientIcon },
    { title: "Templates", path: "#", image: TemplateIcon },
  ];

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
  }, []);

  const handleItemClick = useCallback((index: number) => {
    setActiveItem(index === activeItem ? null : index);
  }, [activeItem]);

  const handleBackClick = useCallback(() => {
    setActiveItem(null);
  }, []);

  return (
    <nav
      className={`w-full md:text-sm md:hidden block ${menuOpen ? "shadow-lg rounded-xl md:shadow-none" : ""
        }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl md:flex">
        <div className="flex items-center justify-between md:block">
          <a href="#">
            <Image src={MiicroLogo} alt="logo" className="w-[100px] my-7" />
          </a>
          <div className="md:hidden">
            <button
              className={clsx(
                "hover:text-gray-800 outline-none border-none p-2 rounded-lg text-lg",
                {
                  "bg-[#F4A4EC] text-black": menuOpen,
                  "bg-[#1F2126] text-white": !menuOpen,
                }
              )}
              onClick={toggleMenu}
            >
              {menuOpen ? <MdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>
        <div
          className={`absolute left-0 px-5 h-screen pb-36 bg-[#141518] w-full items-center justify-between pt-8 md:mt-0 flex flex-col ${menuOpen ? "block" : "hidden"
            }`}
        >
          <ul className="justify-center items-center w-full space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className={activeItem !== null && activeItem !== idx ? "hidden" : "block"}>
                <div
                  className={clsx(
                    "text-white flex items-center justify-between p-2 rounded-lg",
                    { "bg-[#1F2126] p-5 mb-5": activeItem === idx }
                  )}
                  onClick={() => handleItemClick(idx)}
                >
                  <div className="flex items-center gap-2">
                    {activeItem === idx && item.subMenu ? (
                      <button onClick={handleBackClick}><FaChevronLeft /></button>
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={20}
                        height={20}
                        sizes="100vw"
                      />
                    )}
                    <a href={item.path} className="block">
                      {item.title}
                    </a>
                  </div>
                  {activeItem !== idx ? <FaChevronRight /> : null}
                </div>
                {activeItem === idx && item.subMenu && (
                  <ul className="bg-[#141518] px-2 mt-2 text-white w-full h-max flex flex-col gap-7">
                    {item.subMenu.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <h4 className="text-[18px]">{subItem.title}</h4>
                        <p className="text-[14px] opacity-40">{subItem.desc}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="items-center justify-end space-y-3 md:flex md:space-y-0 md:mt-0 w-full">
            <Dropdownlanguage />
            <Link
              href="#"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-ChillaxMedium bg-[#1F2126] hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
            >
              Sign in
            </Link>
            <a
              href="#"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-black font-ChillaxMedium bg-[#E2D26C] hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
