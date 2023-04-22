import Image from "next/image";
import React from "react";
import { bg } from "../../../public/assets";

export default function Adoption() {
  const cards = [
    {
      name: "Fast",
      desc: "Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.",
      number: "3,969",
      transaction: "Transactions per second",
    },
    {
      name: "Decentralized",
      desc: "The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",
      number: "1,675",
      transaction: "Validator nodes",
    },
    {
      name: "Scalable",
      desc: "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",
      number: "163,077,581,394",
      transaction: "Total transactions",
    },
    {
      name: "Energy Efficient",
      desc: "Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.",
      number: "0%",
      transaction: "Net carbon impact",
    },
  ];
  return (
    <div className="w-full relative flex justify-between items-start mt-32 py-4">
      <div>
        <h2 className="text-4xl leading-[46px] text-white">
          Made for <br /> mass adoption
        </h2>
        <li className="list-disc text-[#1FCFF1]">
          <span className="text-[#C4C4C4] text-[1rem]">Live data</span>
        </li>
      </div>

      {/* cards */}
      <div className="w-[70%] relative flex flex-wrap justify-between items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${index === 1 ? "-mt-32" : "mt-0"} ${
              index === 3 ? "mb-24" : "mb-0"
            } w-[21.25rem] h-[19.25rem] bg-[rgba(0,0,0,0.28)] backdrop-blur-sm rounded-3xl`}
          >
            <div
              className={`${
                index === 0
                  ? "border-[#1FCFF1]"
                  : index === 1
                  ? "border-[#FFD512]"
                  : index === 2
                  ? "border-[#9945FF]"
                  : index === 3
                  ? "border-[#19FB9B]"
                  : ""
              } border-l-4 py-4 pl-3`}
            >
              <h2 className="text-2xl text-white leading-[33.4px]">
                {card.name}
              </h2>
            </div>
            <p className="text-md mt-3 leading-[27px] text-[#C4C4C4]">
              {card.desc}
            </p>
            <h2 className="text-white mt-6 text-2xl leading-7 font-normal">
              {card.number}
            </h2>
            <p className="text-md leading-7 mt-3 text-[#C4C4C4]">
              {card.transaction}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-0 w-full h-full -z-40">
        <Image src={bg} alt=""/>
      </div>
    </div>
  );
}
