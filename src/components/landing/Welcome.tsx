import Image from "next/image";
import React from "react";
import {
  left,
  pat1,
  pat2,
  pat3,
  pat4,
  pat5,
  pat6,
  pat7,
  right,
} from "../../../public/assets";

export default function Welcome() {
  return (
    <div className="!w-full relative ">
      <div className="">
        <h2 className="text-center relative z-50 font-bold leading-[74px] text-7xl text-white">
          Powerful for developers.
        </h2>
        <h2 className="text-center relative z-50 font-bold leading-[74px] text-7xl text-white">
          Fast for everyone.
        </h2>
        <p className="mt-[3.4rem] relative z-50 w-[60%] mx-auto text-center leading-[27.3px] text-white text-lg">
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </p>

        <div className="flex justify-center items-center gap-8 mt-12">
          <button className="w-[11rem] h-[3.25rem] border bg-gradient-to-r from-[#8C01FA] to-[#000000] rounded-[36px] border-black text-white text-sm">
            Start building
          </button>
          <button className="w-[11rem] h-[3.25rem] border-white border  rounded-[36px] text-white text-sm">
            Read docs
          </button>
        </div>

        <div className="w-full h-28 mt-16">
          <p className="text-[#618ADC] text-center text-sm leading-[17px]">
            Powering tools and integrations from companies all around the world
          </p>
          <div className="flex justify-between items-center mt-8">
            <div>
              <Image src={pat1} alt="" />
            </div>

            <div>
              <Image src={pat2} alt="" />
            </div>

            <div>
              <Image src={pat3} alt="" />
            </div>

            <div>
              <Image src={pat4} alt="" />
            </div>

            <div>
              <Image src={pat5} alt="" />
            </div>

            <div>
              <Image src={pat6} alt="" />
            </div>

            <div>
              <Image src={pat7} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* gradient images */}
      <div className="absolute -left-24 z-30 -top-32">
        <Image src={left} className="w-[20rem]" alt="" />
      </div>

      <div className="absolute -right-36 z-30 -top-32">
        <Image src={right} className="w-[20rem]" alt="" />
      </div>
    </div>
  );
}
