"use client"

import { useCallback, useState } from 'react';
import MiicroLogo from '@/assets/images/Logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import { Dropdownlanguage } from './dropdownlanguage';
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import clsx from 'clsx';
import { FaChevronRight } from "react-icons/fa";

import TemplateIcon from '@/assets/images/Template.svg'
import PricingIcon from '@/assets/images/Pricing.svg'
import CLientIcon from '@/assets/images/Client.svg'
import ProductsIcon from '@/assets/images/Products.svg'

export default function NavMobile() {
  const [state, setState] = useState(false);
  // Replace # paths with your paths
  const navigation = [
    { title: 'Products', path: '#', image: TemplateIcon },
    { title: 'Pricing', path: '#', image: PricingIcon },
    { title: 'Clients', path: '#', image: CLientIcon },
    { title: 'Templates', path: '#', image: ProductsIcon }
  ];

  const ShowMenu = useCallback(() => {
    if (state) {
      setState(false)
    } else {
      setState(true)
    }
  }, [state])
  return (
    <nav className={`w-full md:text-sm md:hidden block ${state ? 'shadow-lg rounded-xl  md:shadow-none' : ''}`}>
      <div className="gap-x-14 items-center max-w-screen-xl md:flex">
        <div className="flex items-center justify-between  md:block">
          <a href="#">
            <Image src={MiicroLogo} alt="logo" className="w-[100px] my-7" />
          </a>
          <div className="md:hidden">
            <button
              className={clsx('hover:text-gray-800 outline-none border-none p-2 rounded-lg text-lg', {
                'bg-[#F4A4EC] text-black': state,
                'bg-[#1F2126] text-white': !state,
              })}
              onClick={ShowMenu}
            >
              {
                state ? <MdClose /> : <IoMdMenu />
              }
            </button>
          </div>
        </div>
        <div className={`absolute left-0 px-5 h-screen pb-36 bg-[#141518] w-full items-center justify-between pt-8 md:mt-0 flex flex-col ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center w-full space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-white hover:text-gray-900 flex items-center justify-between">
                <div className='flex items-center gap-2'>
                  <Image src={item.image} alt={item.title} width={20} height={20} sizes='100vw' />
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </div>
                <FaChevronRight />
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
