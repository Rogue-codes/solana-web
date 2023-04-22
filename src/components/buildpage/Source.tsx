/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { changelog } from "../../../public/assets";

export default function Source() {
  return (
    <div className="w-full py-12 mt-16 bg-gradient-to-b from-[#19161C] to-[#000]">
      <div className="px-24 ">
        <h2 className="text-[2.4rem] text-white leading-[42px]">
          Go to the source.
        </h2>
        <p className="text-[1.25rem] mt-2 text-[#C4C4C4] leading-[27px]">
          Read the documentation for Solana and popular tools.
        </p>

        <div className="flex justify-between mt-12 items-center">
          <div className="w-[47%]">
            <div className="flex justify-between items-start">
              <p className="text-3xl text-white leading-[33px]">Solana Docs</p>
              <button className="w-[9.25rem] h-12 border rounded-3xl text-white text-sm leading-5 uppercase">
                View all
              </button>
            </div>
            <br />
            <hr />
            <p className="text-[1.25rem] mt-8 text-white leading-[27px]">
              Learn how Solana works and get a high-level understanding of
              Solana's architecture.
            </p>
          </div>

          <div className="w-[47%]">
            <div className="flex justify-between items-start">
              <p className="text-3xl text-white leading-[33px]">
                Metaplex Docs
              </p>
              <button className="w-[9.25rem] h-12 border rounded-3xl text-white text-sm leading-5">
                View all
              </button>
            </div>
            <br />
            <hr />
            <p className="text-[1.25rem] mt-8 text-white leading-[27px]">
              Learn what you build with Metaplex, make the process of creating
              and launching NFTs easier.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-between items-start mt-28">
          <div className="w-[32rem]">
            <h2 className="text-4xl leading-[42px] text-white">
              Solana Changelog
            </h2>
            <p className="text-lg leading-[27.3px] text-white mt-8">
              Some more Solana changes from Jacob & Joe. Subscribe to the
              newsletter: https://solana.us17.list-manage.com/s... Proposal -
              Priced Compute Units: ...
            </p>
            <button className="w-[12.5rem] border h-6 rounded-3xl text-sm text-white uppercase mt-14">
              Latest episode
            </button>
          </div>
          <div className="w-[33rem] h-[20rem]">
            <Image src={changelog} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
