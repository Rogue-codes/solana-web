import React, { useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Dig() {
  const arr = [
    {
      text: "Core Documentation",
      desc: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
    },
    {
      text: "Solana Cookbook",
      desc: "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
    },
    {
      text: "Solana Stack Exchange",
      desc: "Solana Stack Exchange is a question and answer site for Solana software users and developers.",
    },
    {
      text: "Solana Playground",
      desc: "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
    },
    {
      text: "create-solana-dapp",
      desc: "Get up and running fast with Solana dApps, generate a project template in seconds.",
    },
    {
      text: "Anchor Docs",
      desc: "Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.",
    },
    {
      text: "Solana Program Library",
      desc: "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.",
    },
    {
      text: "Program Examples",
      desc: "A list of curated examples for a wide range of use cases implemented using on-chain programs.",
    },
  ];

  const opacity = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 2, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  const slideUp = {
    hide: {
      y:50,
      opacity: 0,
    },
    show: {
      y:0,
      opacity: 1,
      transition: { delay: 2, duration: 2, type: "spring", stiffness: 120 },
    },
  };
  const scrollRef = useRef(null);
  return (
    <div className="px-8 lg:px-24  w-full mt-12">
      <motion.h2
        variants={opacity}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="text-[2.4rem] text-white leading-[42px]"
      >
        Dig deeper.
      </motion.h2>
      <motion.p
        variants={opacity}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="text-[1.25rem] mt-2 text-[#C4C4C4] leading-[27px]"
      >
        Learn from resources across the greater Solana ecosystem.
      </motion.p>

      <div className="w-full mt-8 flex flex-wrap justify-start gap-5 items-center">
        {arr.map((item, index) => (
          <motion.div
          variants={slideUp}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
            key={index}
            className="w-full lg:w-[20rem] py-8 px-4 lg:px-8 overflow-hidden bg-[#19161C] m-2 relative h-[17.6rem] rounded-xl"
          >
            <p className="text-[#9945FF] text-xs leading-5 uppercase">
              tool / library
            </p>
            <h2 className="text-white mt-2 text-[1.2rem] leading-5">
              {item.text}
            </h2>
            <p className="text-[1rem] mt-4 text-white leading-[26px]">
              {item.desc}
            </p>
            <div className="flex justify-start gap-5 items-center mt-3 text-white">
              <p>Learn more</p>
              <BsArrowUpRight />
            </div>
            {/* blur bg */}
            {index === 4 && (
              <div className="w-[16rem] absolute bg-[#A962FF] blur-[40px]  -bottom-16 left-[10%] h-[3.6rem]"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
