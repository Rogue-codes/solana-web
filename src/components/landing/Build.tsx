import Image from "next/image";
import React, { useState } from "react";
import { avatar, chimp, clano, fox, nybodies, okay } from "../../../public/assets";

export default function Build() {
    const [active,setActive] = useState<number>(0)

    const handleActive = (index:number) =>{
        setActive(index)
    }
  const data = ["NFTs", "DeFi", "Payments", "Gaming", "DAOs"];
  return (
    <div className="w-full mt-28 py-8">
      <div className="w-full flex mb-8">
        <div className="w-1/2 text-white text-4xl leading-[46px]">
          Build for growth.
        </div>
        <div className="w-1/2">
          <ul className="w-full flex text-white justify-around items-center">
            {data.map((data, index) => (
              <li key={index} className={`${active === index ? "px-4 py-2 border border-[#A962FF]" : "border-[#111111]"} cursor-pointer bg-[#111111] rounded-[15px] `} onClick={()=>handleActive(index)}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex w-full justify-center items-center ">
        <div className="w-1/2 h-[25rem]">
            <Image src={avatar} className="w-full h-full object-cover" alt=""/>
        </div>

        <div className="h-[25rem] pl-[3rem] pt-[6rem] bg-[#111111] w-1/2">
            <div>
                <Image src={nybodies} alt=""/>
            </div>
            <p className="text-lg leading-[27px] text-white mt-7">It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs.</p>
            <span className="text-md block text-[#A962FF] mt-8">Learn more about NFTs on Solana</span>
        </div>
      </div>


      <div className="flex w-full justify-around items-center mt-6">
        <div><Image src={clano} alt=""/></div>
        <div><Image src={chimp} alt=""/></div>
        <div><Image src={fox} alt=""/></div>
        <div><Image src={okay} alt=""/></div>
      </div>
    </div>
  );
}
