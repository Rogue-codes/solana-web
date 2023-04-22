import Image from "next/image";
import React from "react";
import {
  footerLogo,
  globe,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  logo,
} from "../../public/assets";

export default function Footer() {
  return (
    <div className="py-6 px-5 t40-container border-t border-[#141414] flex">
      <div className="w-[40%]">
        <div className="w-8 h-8">
          <Image
            className="w-full h-full object-cover"
            src={footerLogo}
            alt=""
          />
        </div>
        <p className="text-[1rem] mt-5 font-normal leading-[27px] text-white">
          Managed by Solana Foundation
        </p>
        <ul className="w-full flex mt-5 justify-start gap-5 items-center">
          <li className="h-8 w-8 p-2 rounded-md bg-[#848895]">
            <Image src={icon1} className="h-full w-full object-cover" alt="" />
          </li>
          <li className="h-8 w-8 p-2 rounded-md bg-[#848895]">
            <Image src={icon2} className="h-full w-full object-cover" alt="" />
          </li>
          <li className="h-8 w-8 p-2 rounded-md bg-[#848895]">
            <Image src={icon3} className="h-full w-full object-cover" alt="" />
          </li>
          <li className="h-8 w-8 p-2 rounded-md bg-[#848895]">
            <Image src={icon4} className="h-full w-full object-cover" alt="" />
          </li>
          <li className="h-8 w-8 p-2 rounded-md bg-[#848895]">
            <Image src={icon5} className="h-full w-full object-cover" alt="" />
          </li>
          <li className="h-8 w-8 p-2 rounded-md bg-[#848895]">
            <Image src={icon6} className="h-full w-full object-cover" alt="" />
          </li>
        </ul>
        <p className="text-[1rem] mt-5 leading-[27px] text-[#848895]">©2023 Solana Foundation. All rights reserved.</p>
      </div>

      <div className="w-[60%] flex justify-between items-start">
        <ul>
          <li className="text-white text-[1rem] leading-[19px] uppercase">Solana</li>
          <li className="text-[#848895] text-sm leading-[27px]">Grants</li>
          <li className="text-[#848895] text-sm leading-[27px]">Break Solana</li>
          <li className="text-[#848895] text-sm leading-[27px]">Media Kit</li>
          <li className="text-[#848895] text-sm leading-[27px]">Careers</li>
          <li className="text-[#848895] text-sm leading-[27px]">Disclaimer</li>
        </ul>

        <ul>
          <li className="text-white text-[1rem] leading-[19px] uppercase">Get Connected</li>
          <li className="text-[#848895] text-sm leading-[27px]">Ecosystem</li>
          <li className="text-[#848895] text-sm leading-[27px]">Blog</li>
          <li className="text-[#848895] text-sm leading-[27px]">Newsletter</li>
        </ul>

        <div className="flex justify-start gap-3 items-center">
          <span>
            <Image src={globe} alt="" />
          </span>
          <p>EN</p>
        </div>

      </div>
    </div>
  );
}
