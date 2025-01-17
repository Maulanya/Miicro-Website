"use client"

import MiicroLogo from '@/assets/images/Logo.svg'
import Image from 'next/image'
import { Media } from '../melecules/media'
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";


const footerNavs = [
  {
    label: "Products",
    items: [
      {
        href: '#',
        name: 'Minima'
      },
      {
        href: '#',
        name: 'Peforma'
      },
      {
        href: '#',
        name: 'Payma'
      },
      {
        href: '#',
        name: 'Ordaa'
      },
    ],
  },
  {
    label: "Other links",
    items: [
      {
        href: '#',
        name: 'Pricing'
      },
      {
        href: '#',
        name: 'Clients'
      },
      {
        href: '#',
        name: 'Templates'
      },
      {
        href: '#',
        name: 'Blog'
      },
    ],
  },

]

export default function Footer() {
  return (
    <footer className="text-white bg-dot-white/[0.1] px-6 py-6 max-w-screen-xl mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex ">
        <div className="flex-1">
          <div className="max-w-xs">
            <Image src={MiicroLogo} className="w-32" alt='Logo' width={100} height={100} sizes='100vw' />
            <p className="leading-relaxed mt-7 font-ManropeRegular text-[13px] md:block hidden">
              © 2023 Miicro. All rights reserved.
            </p>
          </div>
          <div className='mt-10'>
            <p className='font-ManropeRegular'>Follow us</p>
            <div className='flex items-center gap-3 mt-4'>
              <Media icon={FaYoutube} href='#' />
              <Media icon={FaFacebookF} href='#' />
              <Media icon={FaXTwitter} href='#' />
              <Media icon={FaLinkedinIn} href='#' />
              <Media icon={FaInstagram} href='#' />
              <Media icon={FaTiktok} href='#' />
            </div>
          </div>
        </div>
        <div className="md:flex-1 md:w-auto flex mt-10 items-center  md:justify-center md:gap-[102px] sm:flex md:mt-0">
          {
            footerNavs.map((item, idx) => (
              <ul
                className={`space-y-4 md:mr-0 ${idx > 0 ? "" : "md:mr-0 mr-[100px]"} w-max`}
                key={idx}
              >
                <h4 className="font-ManropeSemibold">
                  {item.label}
                </h4>
                {
                  item.items.map(((el, idx) => (
                    <li key={idx}>
                      <a
                        href={el.href}
                        className="hover:underline hover:text-indigo-600 font-ManropeRegular "

                      >
                        {el.name}
                      </a>
                    </li>
                  )))
                }
              </ul>
            ))
          }
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-col items-center flex-1 md:items-start w-full md:mt-0  mt-10'
        >
          <label className="block md:pt-[3.4px] pt-4 pb-2 font-ManropeMedium">
            Sign up to our newsletter
          </label>
          <div className="max-w-sm flex md:flex-row flex-col items-center justify-center bg-[#1F2126] w-full rounded-3xl p-3 mt-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="md:w-full w-[150px] p-2.5 outline-0 bg-transparent"
            />
            <button
              className="p-2.5 relative md:w-[200px] w-full font-ChillaxMedium rounded-full text-black bg-[#F4A4EC] outline-none shadow-md focus:shadow-none sm:px-5"
            >
              Sign up
            </button>
          </div>
          <p className="leading-relaxed mt-7 font-ManropeRegular text-[13px] md:hidden block">
              © 2023 Miicro. All rights reserved.
            </p>
        </form>
      </div>
      <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
              fill: currentColor;
          }
      `}</style>
    </footer>
  )
}